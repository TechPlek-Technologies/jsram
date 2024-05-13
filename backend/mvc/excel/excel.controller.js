import express from "express";
import { downloadFile, downloadFilteredData, uploadFile } from "./excel.service.js";
const excelRouter = express.Router();

// Excel Sheet Operations
excelRouter.post('/upload', uploadFile);
excelRouter.get('/download/:filename', downloadFile);
excelRouter.post('/downloadData', downloadFilteredData);

export default excelRouter;