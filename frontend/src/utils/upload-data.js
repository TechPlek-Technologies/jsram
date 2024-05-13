import axios from 'axios';
import { domain } from 'src/config';

export const compareDataArrays = async ( uploadArray) => {
  const resultArray = [];
  const uploadMap = {};

  const response=await axios.get(`${domain}/api/data`)
  const originalArray=response.data.data;

  console.log("compareDataArrays",originalArray.length,uploadArray.length)
  // Create map for faster lookups
  uploadArray.forEach(item => {
    uploadMap[item['MOBILE NO']] = item;
  });

  // Iterate through originalArray
  originalArray.forEach(existingItem => {
    const matchingUploadItem = uploadMap[existingItem['MOBILE NO']];

    if (matchingUploadItem) {
        // Perform operations on matching items
        const updatedItem = compareAndUpdate(existingItem, matchingUploadItem);
        resultArray.push(updatedItem);
        // Remove from uploadMap
        delete uploadMap[existingItem['MOBILE NO']];
    }
});


  // Add remaining uploadArray items to resultArray
  for (const key in uploadMap) {
    resultArray.push(uploadMap[key]);
  }
console.log(resultArray.length);
  await updateInDB(resultArray)
}



function compareAndUpdate(original, newObj) {
  let remarks = original["REMARKS"] || "";

  for (const key in newObj) {
    if (newObj.hasOwnProperty(key)) {
      let value = newObj[key];

      if (key === "MOBILE NO") {
        value = String(value);
        original[key] = String(original[key] || '');
      }

      if (!original.hasOwnProperty(key) || original[key] !== value) {
        if (original[key] !== undefined) {
          remarks += `|${key}: ${value}`;
        }
        original[key] = value;
      } else if (original[key] === value && original[key] !== undefined) {
        remarks = remarks.replace(new RegExp(`\\|${key}: [^|]*`), "");
      }
    }
  }

  original["REMARKS"] = remarks;
  return original;
}


  const CHUNK_SIZE = 500; 

export const updateInDB = async (data) => {
  try {
    // Split the data into chunks
    for (let i = 0; i < data.length; i += CHUNK_SIZE) {
      const chunk = data.slice(i, i + CHUNK_SIZE);
      try{
        const result = await axios.post('http://localhost:5000/api/upload', chunk);
        console.log(`Chunk ${i / CHUNK_SIZE + 1} uploaded successfully`);
      }catch(error){
        console.log("error",error)
      }
     
    }
    alert("All data uploaded successfully");
  } catch (error) {
    alert("Data upload failed");
    console.error('Error:', error);
    throw error; // Re-throw the error to be caught in the calling function
  }
};