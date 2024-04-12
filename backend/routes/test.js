import express from "express";
import {  deleteAllData, getResult, test, testUpdate, upload } from "../controllers/text.js";

const testRouter = express.Router();


testRouter.get('/read', getResult);

testRouter.post('/upload', upload);

testRouter.post('/test', test);

testRouter.post('/update', testUpdate);

testRouter.post('/delete', deleteAllData);


export default testRouter;