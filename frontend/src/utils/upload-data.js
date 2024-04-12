import axios from 'axios';

export const compareDataArrays = (originalArray, uploadArray) => {
  const resultArray = [];
  const originalMap = {};
  const uploadMap = {};

  // Create maps for faster lookups
  originalArray.forEach(item => {
    originalMap[item['MOBILE NO']] = item;
  });

  uploadArray.forEach(item => {
    uploadMap[item['MOBILE NO']] = item;
  });

  // Iterate through originalArray
  originalArray.forEach(existingItem => {
    const matchingUploadItem = uploadMap[existingItem['MOBILE NO']];

    if (matchingUploadItem) {
      const updatedItem = compareAndUpdate(existingItem, matchingUploadItem);
      if (updatedItem) {
        resultArray.push(updatedItem);
      }
      delete uploadMap[existingItem['MOBILE NO']]; // Remove from uploadMap
    } else {
      resultArray.push(existingItem);
    }
  });

  // Add remaining uploadArray items to resultArray
  for (const key in uploadMap) {
    resultArray.push(uploadMap[key]);
  }
console.log("resultArray",resultArray.length)
console.log("uploadArray",uploadArray.length)
console.log("originalArray",originalArray.length)
  return resultArray;
}

// Helper function to identify manipulated values and return remarks
function compareAndUpdate(originalObject, updatedObject) {
  const remarksList = [];

  for (const key in originalObject) {
      if (key !== "REMARKS" && updatedObject[key] !== originalObject[key]) {
          remarksList.push(originalObject[key]);
      }
  }

  const remarks = remarksList.join('|');

  const resultObject = {
      ...originalObject,
      REMARKS: originalObject.REMARKS ? originalObject.REMARKS + ' | ' + remarks : remarks,
  };

  return resultObject;
}

export const updateInDB = async (data) => {
  console.log(data.length);
  try {
    const result = await axios.post('http://localhost:5000/api/upload', data);
    alert("Data Uploaded successfully");
  } catch (error) {
    alert("Data upload Failed");
    console.error('Error:', error);
    throw error; // Re-throw the error to be caught in the calling function
  }
};
