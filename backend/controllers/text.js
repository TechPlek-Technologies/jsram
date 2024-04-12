import Test from "../models/Test.js";
// import csvParser from "json2csv"

export const getResult = async (req, res) => {

  try {
    const result = await Test.find();

    // Send the result as JSON
    if(result){
    res.status(200).json(result);
    }
  } catch (err) {
    console.error("test error : ", err);
    res.status(500).json({ success: false, message: "Internal Server error" });
  }
};

export const upload = async (req, res) => {
  const batchSize = 100; // Define your batch size here
  const newData = req.body;

  try {
    // Split the data into batches
    for (let i = 0; i < newData.length; i += batchSize) {
      const batch = newData.slice(i, i + batchSize);

      // Separate batch into updates and inserts
      const updates = batch.filter(item => item['_id']);
      const inserts = batch.filter(item => !item['_id']);

      // Perform updates
      if (updates.length > 0) {
    

          const bulkOps = updates.map(update => ({
            updateOne: {
              filter: { _id: update._id }, // Assuming each update object contains _id field
              update: update,
            },
          }));
          const result = await Test.bulkWrite(bulkOps);

        
      }
      // Perform inserts
      if (inserts.length > 0) {
        const result = await Test.insertMany(inserts);
      }


    }
    // Send the result as JSON
    res.status(200).json({ success: true, message: "Upload successful" });

  } catch (err) {
    console.error("Error during upload: ", err);
    res.status(500).json({ success: false, message: "Internal Server error" });
  }
};


export const downloadData = async (req, res) => {
  try {

    const userData=[];
    const result = await Test.find();

    if (result.length > 0) {
      const keys = Object.keys(result[0]);
    
      
      result.forEach((user)=>{
        // userData.push(user)
      })
    }

    

    // Send the result as JSON
    if(result){
    res.status(200).json(result);
    }
  } catch (err) {
    console.error("test error : ", err);
    res.status(500).json({ success: false, message: "Internal Server error" });
  }
};

export const test = async (req, res, next) => {
  try {
    const tests = req.body;

    await Test.insertMany(tests).then(function () {
      res.status(200).json({ success: true, message: "test Successfull" });
    }).catch(function (err) {
      console.log("insertMany error: ", err);
      res.status(400).json({
        success: true,
        error: err,
        message: "test failed",
      });
    });
  } catch (err) {
    console.error("test error : ", err);
    res.status(500).json({ success: false, message: "Internal Server error" });
  }
};

export const testUpdate = async (req, res, next) => {
  try {
    const testData = req.body;

    
    const promises = testData?.map(async (item) => {
      const updatedTest = await Test.findByIdAndUpdate(item._id, {
        $set: { ...item },
      });
      return updatedTest;
    });

    Promise.all(promises).then(() => {
      res.status(200).json({ success: true, message: "Test update success" });
    });
  } catch (err) {
    console.error("Test update error:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const deleteAllData = async (req, res) => {
  try {
    // Delete all documents from the Test collection
    await Test.deleteMany({});

    // Send a success response
    res.status(200).json({ success: true, message: "All data deleted successfully" });
  } catch (err) {
    console.error("Error deleting data:", err);
    // Send an error response
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Controller to bulk add documents
const bulkAddDocuments = async (req, res) => {
  try {
    const documents = req.body; // Assuming req.body contains an array of documents to add
    const result = await Test.insertMany(documents);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to bulk update documents
const bulkUpdateDocuments = async (req, res) => {
  try {
    const updates = req.body; // Assuming req.body contains an array of updates
    const bulkOps = updates.map(update => ({
      updateOne: {
        filter: { _id: update._id }, // Assuming each update object contains _id field
        update: update,
      },
    }));
    const result = await Test.bulkWrite(bulkOps);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete all documents
const deleteAllDocuments = async (req, res) => {
  try {
    const result = await Test.deleteMany({});
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
