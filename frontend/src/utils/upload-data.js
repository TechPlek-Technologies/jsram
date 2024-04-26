import axios from 'axios';

export const compareDataArrays = (originalArray, uploadArray) => {
  const resultArray = [];
  const uploadMap = {};

  // Create map for faster lookups
  uploadArray.forEach(item => {
    uploadMap[item['MOBILE NO']] = item;
  });

  // Iterate through originalArray
  originalArray.forEach(existingItem => {
    const matchingUploadItem = uploadMap[existingItem['MOBILE NO']];

    if (matchingUploadItem) {
      const updatedItem = compareAndUpdate(existingItem, matchingUploadItem);
      resultArray.push(updatedItem);
      delete uploadMap[existingItem['MOBILE NO']]; // Remove from uploadMap
    }
  });

  // Add remaining uploadArray items to resultArray
  for (const key in uploadMap) {
    resultArray.push(uploadMap[key]);
  }

  return resultArray;
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
        remarks += `|${key}: ${value}`; // Modify this line
        original[key] = value;
      }
    }
  }

  original["REMARKS"] = remarks;
  return original;
}





  const CHUNK_SIZE = 5000; 

export const updateInDB = async (data) => {
  try {
    // Split the data into chunks
    for (let i = 0; i < data.length; i += CHUNK_SIZE) {
      const chunk = data.slice(i, i + CHUNK_SIZE);
      const result = await axios.post('http://jsram.aifuturevision.in:5000/api/upload', chunk);
      console.log(`Chunk ${i / CHUNK_SIZE + 1} uploaded successfully`);
    }
    alert("All data uploaded successfully");
  } catch (error) {
    alert("Data upload failed");
    console.error('Error:', error);
    throw error; // Re-throw the error to be caught in the calling function
  }
};