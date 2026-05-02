const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const bodyParser = require("body-parser");
const errorHandler = require("./middlewares/errorMiddleware");
const cookieParser = require("cookie-parser");

// dotenv object
dotenv.config();

// routes path
const authRoutes = require("./routes/authRouter");
const aiRoutes = require("./routes/AiRouter");

//  rest object
const app = express();

// MongoDB connect
connectDB();

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(errorHandler);

// routes api
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/ai", aiRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`.bgBlue.white);
});
