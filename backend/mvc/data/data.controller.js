import express from "express";

import { getdashBoardCounts,  getPaginatedfilterData, getPaginatedResult, getResult, getUniqueCities, searchAndPaginate, upload } from "./data.service.js";

const dataRouter = express.Router();

// DB Operations
dataRouter.post('/upload', upload);
dataRouter.get('/data', getResult);
dataRouter.get('/readPagination', getPaginatedResult);
dataRouter.get('/search', searchAndPaginate);
dataRouter.post('/filter', getPaginatedfilterData);
dataRouter.get('/uniqueCities', getUniqueCities);
dataRouter.get('/dashboardCounts', getdashBoardCounts);

export default dataRouter;