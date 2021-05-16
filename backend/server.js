require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const countryRoutes = require('./routes/countryRoutes')
connectDB();

const app = express();

app.use(express.json());

app.use('/api/countryRoutes', countryRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`running on ${PORT}`))