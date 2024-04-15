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
    } else {
      resultArray.push(existingItem);
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
