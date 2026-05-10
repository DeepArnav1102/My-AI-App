const { GoogleGenerativeAI } = require("@google/generative-ai");

if (!process.env.GEMINI_API_KEY) {
  throw new Error("Gemini API key is missing");
}
// Gemini api config
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-3-flash-preview",
});

// text summary Controller
const getTextSum = async (req, res) => {
  try {
    const { prompt } = req.body;

    // prompt validation
    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    // Prompting
    const finalPrompt = `Summarize the following text in under 500 words:\n\n${prompt}`;
    const result = await model.generateContent(finalPrompt);
    const text = result.response.text();

    res.status(200).json({
      success: true,
      reply: text,
    });
  } catch (error) {
    console.error("Gemini api error", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const genPara = async (req, res) => {
  try {
    const { prompt } = req.body;

    // prompt validation
    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    // Prompting
    const finalPrompt = `Write a short notes on topic ${prompt} strictly under 500 words`;
    const result = await model.generateContent(finalPrompt);
    const text = result.response.text();

    res.status(200).json({
      success: true,
      reply: text,
    });
  } catch (error) {
    console.error("Gemini api error", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const genCode = async (req, res) => {
  try {
    const { prompt } = req.body;

    // prompt validation
    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    // Prompting
    const finalPrompt = `Generate clean and correct JavaScript code only.

    Rules:
    - Return ONLY code
    - No explanation
    - No markdown
    - No triple backticks
    - No "javascript" text
    - No example usage
    - Proper indentation
    - Structured and production-ready code
    - If function required, return only function
    - Do not add comments unless necessary

    User Request: ${prompt}`;
    const result = await model.generateContent(finalPrompt);
    const text = result.response.text();

    res.status(200).json({
      success: true,
      reply: text,
    });
  } catch (error) {
    console.error("Gemini api error", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const askQuestion = async (req, res) => {
  try {
    const { prompt } = req.body;

    // prompt validation
    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    // Prompting
    const finalPrompt = `Answer the question ${prompt} strictly under 500 words`;
    const result = await model.generateContent(finalPrompt);
    const text = result.response.text();

    res.status(200).json({
      success: true,
      reply: text,
    });
  } catch (error) {
    console.error("Gemini api error", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getTextSum, genPara, genCode, askQuestion };
