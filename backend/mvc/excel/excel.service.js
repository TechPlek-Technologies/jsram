import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import mime from "mime";
import { Transform } from "stream";
import Data from "../data/data.model.js";


const __dirname = path.dirname(fileURLToPath(import.meta.url));

const uploadPath = path.join(__dirname, "uploads");

fs.ensureDir(uploadPath)
  .then(() => {
    console.log("Upload directory created:", uploadPath);
  })
  .catch((err) => {
    console.error("Error creating upload directory:", err);
  });

export const uploadFile = async (req, res) => {
    try {
      req.pipe(req.busboy); // Pipe it through busboy
  
      req.busboy.on("file", (fieldname, file, filename) => {
        console.log(`Upload of '${filename.filename}' started`);
  
        // Create a write stream of the new file
        const fstream = fs.createWriteStream(
          path.join(uploadPath, filename.filename)
        );
        // Pipe it through
        file.pipe(fstream);
  
        // On finish of the upload
        fstream.on("close", () => {
          console.log(`Upload of '${filename.filename}' finished`);
          res.send("Upload successful");
        });
      });
    } catch (error) {
      console.error("Error occurred during upload:", error);
      res.status(500).json({ message: "An error occurred during upload" });
    }
};

export const downloadFile = async (req, res) => {
    try {
        const filename = req.params.filename; // Access the filename from the request parameters
        const decodedFileName = decodeURIComponent(filename).replace(/\*/g, " ");
        const filePath = path.join(uploadPath, decodedFileName); // Use path.join to construct file path
    
        if (fs.existsSync(filePath)) {
          // Set content type based on file extension
          const contentType = mime.getType(filePath) || "application/octet-stream";
          res.setHeader("Content-Type", contentType);
          res.setHeader(
            "Content-Disposition",
            `attachment; filename="${decodedFileName}"`
          );
    
          // Send the file as a response
          const fileStream = fs.createReadStream(filePath);
          fileStream.pipe(res);
        } else {
          // If the file doesn't exist, send a 404 status code
          res.status(404).send("File not found");
        }
      } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
      }
};

class JSONToCSVTransform extends Transform {
  constructor(options) {
    super(options);
    this.headersWritten = false;
  }
  _transform(chunk, encoding, callback) {
    try {
      console.log("Chunk:", chunk);
      const chunkString = JSON.stringify(chunk); // Convert object to string
      console.log("Chunk String:", chunkString);
      if (!this.headersWritten) {
        console.log("Headers:", Object.keys(chunk).join(','));
        this.headersWritten = true;
        this.push(Object.keys(chunk).join(',') + '\n');
      }
      this.push(Object.values(chunkString).join(',') + '\n'); // Push the stringified chunk
      callback();
    } catch (error) {
      callback(error); // Pass error to callback
    }
  }
  
}

export const downloadFilteredData = async (req, res) => {
  const { filters } = req.body;
  try {
    // Build the query object based on the provided filters
    const query = {};

    for (const key in filters) {
      if (filters[key] === null || filters[key] === "All" || key.startsWith("DATE")) {
        continue;
      } else {
        const regex = new RegExp(filters[key], "i");
        query[key.toUpperCase()] = { $regex: regex };
      }
    }

    // Fetch data and send as JSON response
    const filteredData = await Data.find(query);

    return res.status(200).json({ data: filteredData });
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};



  