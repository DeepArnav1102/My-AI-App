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

module.exports = { getTextSum };
