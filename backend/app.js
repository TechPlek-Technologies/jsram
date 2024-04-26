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

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express(); // Initialize Express application

connection(); // Establish database connection

app.use(cors());
// Parse JSON request body
app.use(express.json());

app.use(
  busboy({
    highWaterMark: 2 * 1024 * 1024, // Set 2MiB buffer
  })
); // Insert the busboy middle-ware

// Set up CORS headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,credentials, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

// Define authentication routes
app.use("/auth", authRouter);

// Define user routes
app.use("/user", userRouter);

// Read excel sheets
app.use("/api", testRouter);

// Endpoint to receive JSON data and store it in a .json file
// app.post('/storeData', (req, res) => {
//   const jsonData = req.body;
//   fs.writeFileSync('data.txt', JSON.stringify(jsonData));
//   res.send('Data stored successfully');
// });

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

app.get("/getData", (req, res) => {
  try {
    const filePath = "uploads/data.xlsx";
    if (fs.existsSync(filePath)) {
      const jsonData = fs.readFileSync(filePath, "utf8");
      res.json(JSON.parse(jsonData));
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
