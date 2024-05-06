import express from "express";
import connection from "./config.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import testRouter from "./routes/test.js";
import dotenv from "dotenv";
import fs from "fs-extra";
import cors from "cors"; // Import cors middleware
import busboy from "connect-busboy";
import path from "path";
import xlsx from "xlsx";
import mime from "mime";

import { fileURLToPath } from "url";
import { error } from "console";
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express(); // Initialize Express application

connection(); // Establish database connection

// app.use(cors());
// Parse JSON request body
app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb', extended: true }));

app.use(
  busboy({
    highWaterMark: 2 * 1024 * 1024, // Set 2MiB buffer
  })
); // Insert the busboy middle-ware

// Set up CORS headers
app.use(cors({
  origin: 'http://jsram.aifuturevision.in'
}));

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

// Define authentication routes
app.use("/auth", authRouter);

// Define user routes
app.use("/user", userRouter);

// Read excel sheets
app.use("/api", testRouter);
// Example route to handle JSON data upload

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define the path where uploaded files will be stored
const uploadPath = path.join(__dirname, "uploads");

fs.ensureDir(uploadPath)
  .then(() => {
    console.log("Upload directory created:", uploadPath);
  })
  .catch((err) => {
    console.error("Error creating upload directory:", err);
  });

  app.post("/storeData", (req, res, next) => {
   req.pipe(req.busboy); // Pipe it trough busboy

  req.busboy.on("file", (fieldname, file, filename) => {
     console.log(`Upload of '${filename.filename}' started`);

    // Create a write stream of the new file
    const fstream = fs.createWriteStream(
      path.join(uploadPath, filename.filename)
    );
    // Pipe it trough
    file.pipe(fstream);

    // On finish of the upload
    fstream.on("close", () => {
      console.log(`Upload of '${filename.filename}' finished`);
      res.send("Upload successful");
    });
  });
});



const resultFilePath = path.join(__dirname, "result.json");

  app.post('/storeResult',  (req, res) => {
    try {
      const data = req.body; // Assuming the data is sent in the request body
  
      // Create a writable stream to the result.json file
      const writeStream = fs.createWriteStream(resultFilePath);
  
      // Write data chunks to the stream
      writeStream.write(JSON.stringify(data), 'utf-8');
  
      // Close the stream when all data is written
      writeStream.end();
  
      // Handle stream events
      writeStream.on('finish', () => {
        console.log("Result file stored successfully");
        res.json({ success: true, message: "Result stored successfully" });
      });
  
      writeStream.on('error', (err) => {
        console.error("Error writing result file:", err);
        res.status(500).json({ success: false, message: "Error storing result" });
      });
  
    } catch (err) {
      console.error("Error storing result:", err);
      res.status(500).json({ success: false, message: "Error storing result" });
    }
  
});



app.get("/getData/:filename", (req, res) => {
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
});

const filePath = path.join(__dirname, "result.json");

app.get("/getData", (req, res) => {
  try {
    if (fs.existsSync(filePath)) {
      // Read the file content
      const jsonData = fs.readFileSync(filePath, "utf8");

      // Parse the JSON data into an array of objects
      const dataArray = JSON.parse(jsonData);

      // Send the array of objects as response
      res.json(dataArray);
    } else {
      // Send an empty array as response when the file doesn't exist
      res.json([]);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
