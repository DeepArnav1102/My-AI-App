import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PromptBox = ({ title, placeholder }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ mt: 4, px: 2 }}>
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

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          placeholder={placeholder}
          variant="outlined"
          fullWidth
          multiline
          rows={6}
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
    </Box>
  );
};

export default PromptBox;
