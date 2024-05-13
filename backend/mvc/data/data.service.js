import Data from "./data.model.js";


export const getResult = async (req, res) => {
  try {
    // Query the database and collect all the results
    const results = await Data.find().lean();


    res.status(200).json({ success: true, message: 'Fetched successfully',data:results });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ success: false, message: 'Internal Server error' });
  }
};

export const upload = async (req, res) => {
  const batchSize = 100; 
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
          const result = await Data.bulkWrite(bulkOps);

        
      }
      // Perform inserts
      if (inserts.length > 0) {
        const result = await Data.insertMany(inserts);
      }


    }
    // Send the result as JSON
    res.status(200).json({ success: true, message: "Upload successful" });

  } catch (err) {
    console.error("Error during upload: ", err);
    res.status(500).json({ success: false, message: "Internal Server error" });
  }
};

export const getPaginatedResult = async (req, res) => {
  let { page, pageSize } = req.query;
  try {
    // If "page" and "pageSize" are not sent we will default them to 1 and 50.
    page = parseInt(page, 10) || 1;
    pageSize = parseInt(pageSize, 10) || 50;

    const articles = await Data.aggregate([
      {
        $facet: {
          metadata: [{ $count: "totalCount" }],
          data: [{ $skip: (page - 1) * pageSize }, { $limit: pageSize }],
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      articles: {
        metadata: {
          totalCount: articles[0].metadata[0].totalCount,
          page,
          pageSize,
        },
        data: articles[0].data,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const searchAndPaginate = async (req, res) => {
  let { page, pageSize, searchQuery } = req.query;
  try {
    // If "page" and "pageSize" are not sent, default them to 1 and 50.
    page = parseInt(page, 10) || 1;
    pageSize = parseInt(pageSize, 10) || 50;

    // Build the search query
    const regex = new RegExp(searchQuery, "i");
    const search = {
      $or: [
        { "MOBILE NO": regex },
        { CITY: regex },
        { NAME: regex },
        { PAN: regex },
        { EMAIL: regex },
        { "COMPANY NAME": regex },
        { "EMPLOYMENT TYPE": regex },
        { PINCODE: regex },
        { DESIGNATION: regex },
        { "OFFICIAL EMAIL ID": regex },
        { DETAILS1: regex },
        { DETAILS2: regex },
        { REMARKS: regex },
        { "WHATS APP": regex },
        { DATE: regex },
        { SMS: regex },
        { DATE_3: regex },
        { CALLING: regex },
        { DATE_4: regex },
        { "LOGIN DONE": regex },
        { "LOGIN BANK": regex },
        { "BANKS STATUS": regex },
        { "LOGIN DONE_1": regex },
        { "LOGIN BANK 2": regex },
        { "BANKS STATUS_1": regex },
      ],
    };

    const articles = await Data.aggregate([
      { $match: search },
      {
        $facet: {
          metadata: [{ $count: "totalCount" }],
          data: [{ $skip: (page - 1) * pageSize }, { $limit: pageSize }],
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      articles: {
        metadata: {
          totalCount: articles[0].metadata[0]?.totalCount || 0,
          page,
          pageSize,
        },
        data: articles[0].data,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getPaginatedfilterData = async (req, res) => {
  const { filters, page, limit } = req.body;
  try {
    // Build the query object based on the provided filters
    const query = {};

    for (const key in filters) {
      if (filters[key] === null || filters[key] === "All") {
        // If filter value is null or "All", continue to the next key
        continue;
      } else if (key.startsWith("DATE")) {
        // Ignore null date filters
        continue;
      } else if (key === "CITY") {
        // If CITY filter has multiple values, include them in the query with $in operator
        if (Array.isArray(filters.CITY) && filters.CITY.length > 0) {
          query[key.toUpperCase()] = { $in: filters.CITY.map(city => new RegExp(city, "i")) };
        } else {
          // Apply case-insensitive regex filter for single city
          const regex = new RegExp(filters[key], "i");
          query[key.toUpperCase()] = { $regex: regex };
        }
      } else if (key === "WHATS APP" || key === "SMS" || key === "CALLING" || key === "LOGIN DONE" || key === "LOGIN BANK") {
        // Apply case-insensitive regex filter for specific fields
        const regex = new RegExp(filters[key], "i");
        query[key.toUpperCase()] = { $regex: regex };
      } else {
        // Apply case-insensitive regex filter for other fields in the schema
        const regex = new RegExp(filters[key], "i");
        query[key.toUpperCase()] = { $regex: regex };
      }
    }

    // Execute the query with pagination
    const totalCount = await Data.countDocuments(query);
    const totalPages = Math.ceil(totalCount / limit);
    const currentPage = parseInt(page);
    const skip = (currentPage - 1) * limit;

    const result = await Data.find(query).skip(skip).limit(limit);

    return res.json({
      total: totalCount,
      totalPages: totalPages,
      currentPage: currentPage,
      data: result,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUniqueCities = async (req, res) => {
  try {
    const cityCounts = await Data.aggregate([
      { $group: { _id: { $toLower: "$CITY" }, count: { $sum: 1 } } },
      { $project: { _id: 0, CITY: { $toLower: "$_id" }, count: 1 } },
    ]);
    res.json(cityCounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getdashBoardCounts = async (req, res) => {
  try {
    const countsPipeline = [
      // Project lowercase versions of selected fields
      {
        $project: {
          'WHATS APP': { $toLower: '$WHATS APP' },
          'CALLING': { $toLower: '$CALLING' },
          'SMS': { $toLower: '$SMS' },
          'IVR': { $toLower: '$IVR' },
          'BANKS STATUS_1': { $toLower: '$BANKS STATUS_1' },
          'BANKS STATUS': { $toLower: '$BANKS STATUS' }
        }
      },
      // Count total documents
      {
        $facet: {
          totalCount: [{ $count: 'total' }],
          counts: [
            { $group: {
                _id: null,
                'WHATS APP': { $sum: { $cond: [{ $eq: ['$WHATS APP', 'used'] }, 1, 0] } },
                'CALLING': { $sum: { $cond: [{ $eq: ['$CALLING', 'used'] }, 1, 0] } },
                'SMS': { $sum: { $cond: [{ $eq: ['$SMS', 'used'] }, 1, 0] } },
                'IVR': { $sum: { $cond: [{ $eq: ['$IVR', 'used'] }, 1, 0] } },
                'BANKS STATUS_1_approved': { $sum: { $cond: [{ $eq: ['$BANKS STATUS_1', 'approved'] }, 1, 0] } },
                'BANKS STATUS_1_declined': { $sum: { $cond: [{ $eq: ['$BANKS STATUS_1', 'declined'] }, 1, 0] } },
                'BANKS STATUS_approved': { $sum: { $cond: [{ $eq: ['$BANKS STATUS', 'approved'] }, 1, 0] } },
                'BANKS STATUS_declined': { $sum: { $cond: [{ $eq: ['$BANKS STATUS', 'declined'] }, 1, 0] } }
              }
            }
          ]
        }
      }
    ];

    const countsResult = await Data.aggregate(countsPipeline);
    const [countsDoc] = countsResult;

    const totalCount = countsDoc.totalCount[0].total;
    delete countsDoc.totalCount;
    
    res.json({
      total: totalCount,
      counts: countsDoc.counts[0] // Assuming there's only one group
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};





