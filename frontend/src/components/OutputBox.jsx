import { Box, Typography } from "@mui/material";

const OutputBox = ({ output }) => {
  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "white",
        mt: 4,
        mx: "auto",
        p: 3,
        maxWidth: "900px",
        borderRadius: "20px",
        minHeight: "150px",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Output:
      </Typography>

      <Typography sx={{ whiteSpace: "pre-line" }}>
        {output || "Your result will appear here..."}
      </Typography>
    </Box>
  );
};

export default OutputBox;
