const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");

// routes path
const authRoutes = require("./routes/authRoutes");

// dotenv object
dotenv.config();

//  rest object
const app = express();

// MongoDB connect
connectDB();

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes api
app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
