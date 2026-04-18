const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

// model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password length must be greater than 8"],
  },

  customerId: {
    type: String,
    default: "",
  },

  subscription: {
    type: String,
    default: "",
  },
});

// ------------------------- Middleware functions ----------------------------- //

userSchema.pre("save", async function () {
  // update
  if (!this.isModified("password")) {
    return;
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// check password
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Sign Token
userSchema.methods.getSignedToken = function (res) {
  const accessToken = JWT.sign({ id: this._id }, process.env.JWT_key, {
    expiresIn: process.env.JWT_ACCESS_EXPIREIN,
  });
  const refreshToken = JWT.sign(
    { id: this._id },
    process.env.JWT_REFRESH_TOKEN,
    { expiresIn: process.env.JWT_REFRESH_EXPRIREIN },
  );
  res.cookie("refreshToken", refreshToken, {
    maxAge: 86400 * 7000,
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
  return accessToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
