const express = require("express");
const {
  getTextSum,
  genPara,
  genCode,
  askQuestion,
} = require("../controllers/AiController");

const router = express.Router();

router.post("/text-summary", getTextSum);
router.post("/gen_pararaph", genPara);
router.post("/gen-code", genCode);
router.post("/ask-question", askQuestion);
// router.post("/gen-image", genimage);

module.exports = router;
