const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// load env vars
dotenv.config({ path: './config/config.env' });

console.log(typeof connectDB, "connectDB");
connectDB();

const app = express();

// Body parser
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/stores', require('./routes/stores'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sever running in ${process.env.NODE_ENV} mode on port ${PORT}`));