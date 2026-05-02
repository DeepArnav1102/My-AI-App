const express = require("express");
const {getTextSum} = require("../controllers/AiController");

const router = express.Router();

router.post("/text-summary", getTextSum);

module.exports = router;