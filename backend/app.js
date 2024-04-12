import express from 'express';
import connection from "./config.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import testRouter from "./routes/test.js";
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express(); // Initialize Express application

connection(); // Establish database connection

// Parse JSON request body
app.use(express.json({ limit: '100mb' }));

// Set up CORS headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,credentials, Content-Type, Accept");
  next();
});

app.get("/",(req,res)=>{
  res.send("Welcome to homepage")
});

// Define authentication routes
app.use('/auth', authRouter);

// Define user routes
app.use('/user', userRouter);

// Read excel sheets
app.use('/api', testRouter);


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
