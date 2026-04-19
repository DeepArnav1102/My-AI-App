import { Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AiBox = () => {
  const navigate = useNavigate();
  const styles = {
    bgcolor: "#0f172a",
    width: "15%",
    height: "30vh",
    border: "1px solid white",
    borderRadius: "20px",
    mt: 2.5,
    ml: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      borderColor: "#38bdf8",
      transform: "scale(1.05)",
    },
  };
  return (
    <Box
      sx={{
        width: "95%",
        height: "74vh",
        mt: -1,
        ml: 4,
      }}
    >
      <Typography variant="h4" sx={{ ml: 50, mt: 1, color: "#38bdf8" }}>
        What do you wanna do today?
      </Typography>

      <Grid container spacing={1}>
        <Box onClick={() => navigate("/text-summary")} sx={styles}>
          <img
            src="/icons/text-summary-icon.png"
            style={{ width: "200px", height: "120px" }}
          />
          <Typography
            variant="h6"
            align="center"
            sx={{ mt: -1, color: "#38bdf8", fontWeight: "bold" }}
          >
            Text Summary
          </Typography>
          <Typography variant="body2" align="center">
            Summarise long Text into short Stentence
          </Typography>
        </Box>
        <Box onClick={() => navigate("/para-writing")} sx={styles}>
          <img
            src="/icons/paragraph-writing-icon.png"
            style={{ width: "200px", height: "120px" }}
          />
          <Typography
            variant="h6"
            align="center"
            sx={{ mt: -1, color: "#38bdf8", fontWeight: "bold" }}
          >
            Paragraph Writing
          </Typography>
          <Typography variant="body2" align="center">
            Write a Short Note on given Topic
          </Typography>
        </Box>
        <Box onClick={() => navigate("/ask-question")} sx={styles}>
          <img
            src="/icons/ask-question-icon.png"
            style={{ width: "200px", height: "120px" }}
          />
          <Typography
            variant="h6"
            align="center"
            sx={{ mt: -1, color: "#38bdf8", fontWeight: "bold" }}
          >
            Ask a Question
          </Typography>
          <Typography variant="body2" align="center">
            Answer the question
          </Typography>
          <Typography variant="body2" align="center">
            Briefly
          </Typography>
        </Box>
        <Box
          onClick={() => navigate("/gen-jscode")}
          sx={{
            bgcolor: "#0f172a",
            width: "15%",
            height: "30vh",
            border: "1px solid white",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            cursor: "pointer",
            mt: 2.5,
            ml: 42,
            transition: "0.3s",
            "&:hover": {
              borderColor: "#38bdf8",
              transform: "scale(1.05)",
            },
          }}
        >
          <img
            src="/icons/write-js-code.png"
            style={{ width: "200px", height: "120px" }}
          />
          <Typography
            variant="h6"
            align="center"
            sx={{ mt: -1, color: "#38bdf8", fontWeight: "bold" }}
          >
            Generate JS code
          </Typography>
          <Typography variant="body2" align="center">
            Write a JS code on given problem
          </Typography>
        </Box>
        <Box
          onClick={() => navigate("/text-summary")}
          sx={{
            bgcolor: "#0f172a",
            width: "15%",
            height: "30vh",
            border: "1px solid white",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            cursor: "pointer",
            mt: 2.5,
            ml: 20,
            transition: "0.3s",
            "&:hover": {
              borderColor: "#38bdf8",
              transform: "scale(1.05)",
            },
          }}
        >
          <img
            src="/icons/generate-image-icon.png"
            style={{ width: "200px", height: "120px" }}
          />
          <Typography
            variant="h6"
            align="center"
            sx={{ mt: -1, color: "#38bdf8", fontWeight: "bold" }}
          >
            Generate Image
          </Typography>
          <Typography variant="body2" align="center">
            Generate an image on give topic
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default AiBox;
