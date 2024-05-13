import axios from "axios";
import { domain } from "src/config";

export const getPaginatedResult = async (page,rowsPerPage) => {
    const response = await axios.get(`${domain}/api/readPagination?page=${page}&pageSize=${rowsPerPage}`);
    return response.data;
};

export const searchAndPaginate= async (page,rowsPerPage,searchQuery)=>{
    const response = await axios.get(`${domain}/api/search?page=${page}&pageSize=${rowsPerPage}&searchQuery=${searchQuery}`);
    return response.data;
}

export const getUniqueCities= async ()=>{
    const response = await axios.get(`${domain}/api/uniqueCities`);
    return response.data
}

export const getPaginatedfilterData = async (page, rowsPerPage, filters) => {
  try {
    const response = await axios.post(`${domain}/api/filter`, {
      filters: filters,
      page: page,
      limit: rowsPerPage
    });

    return response.data; // Return the data for further processing if necessary
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for handling in the caller function
  }
};
export const DownloadfilterData = async (filters) => {
  try {
    const response = await axios.post(`${domain}/excel/downloadData`, {
      filters: filters,
    });

    return response.data; // Return the data for further processing if necessary
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for handling in the caller function
  }
};

export const getDashBoardInfo=async()=>{
  const response = await axios.get(`${domain}/api/dashboardCounts`);
  return response.data
}