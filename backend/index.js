
import express from 'express';
import fs from 'fs-extra';

const app = express();
const PORT = 4000;

app.use(express.json());

// Endpoint to receive JSON data and store it in a .json file
app.post('/storeData', (req, res) => {
  const jsonData = req.body;
  fs.writeFileSync('data.json', JSON.stringify(jsonData));
  res.send('Data stored successfully');
});

// Endpoint to fetch stored JSON data
app.get('/getData', (req, res) => {
  try {
    const jsonData = fs.readFileSync('data.json', 'utf8');
    res.json(JSON.parse(jsonData));
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
