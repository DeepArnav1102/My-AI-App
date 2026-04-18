const userModel = require("../models/userModel");
const errorResponse = require("../utils/errorResposne");

// JWT Token
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken(res);
  res.status(statusCode).json({
    success: true,
    token,
  });
};

// Register User
const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // validation
    if (!username || !email || !password) {
      return next(
        new errorResponse("Please enter the all required fields", 404),
      );
    }

    // existing user
    const existingEmail = await userModel.findOne({ email });
    const existingUsername = await userModel.findOne({ username });
    if (existingEmail || existingUsername) {
      return next(
        new errorResponse("Email or Username is already registered", 500),
      );
    }

    const user = await userModel.create({ username, email, password });
    sendToken(user, 201, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Login User
const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // existence validation
    if (!username || !password) {
      return next(new errorResponse("Please provide username and password"));
    }
    const user = await userModel.findOne({ username });
    // Credential validation
    if (!user) {
      return next(new errorResponse("Invalid Credentials", 401));
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return next(new errorResponse("Invalid Credentials", 401));
    }
    // response
    sendToken(user, 200, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Logout User
const logoutUser = async (req, res) => {
  res.clearCookie("refreshToken");
  return res.status(200).json({
    success: true,
    message: "Log Out successfully",
  });
};

// exports
module.exports = { sendToken, registerUser, loginUser, logoutUser };
