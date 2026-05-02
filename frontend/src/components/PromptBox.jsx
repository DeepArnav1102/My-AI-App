import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PromptBox = ({ title, placeholder, setOutput }) => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!prompt) return;

    try {
      setLoading(true);

      const res = await fetch("http://localhost:8080/api/v1/ai/text-summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setOutput(data.reply);
    } catch (error) {
      console.error(error);
      setOutput("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 4, px: 2 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h4">{title}</Typography>

        <Button
          variant="outlined"
          sx={{ color: "white" }}
          onClick={() => navigate("/dashboard")}
        >
          Go Back
        </Button>
      </Box>

      {/* Input */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          placeholder={placeholder}
          variant="outlined"
          fullWidth
          multiline
          rows={6}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          sx={{
            bgcolor: "white",
            maxWidth: "900px",
            borderRadius: "25px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px",
              "& fieldset": {
                border: "2px solid black",
              },
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
            },
          }}
        />
      </Box>

      {/* Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button variant="contained" onClick={handleSubmit} disabled={loading}>
          {loading ? "Generating..." : "Generate Summary"}
        </Button>
      </Box>
    </Box>
  );
};

export default PromptBox;
