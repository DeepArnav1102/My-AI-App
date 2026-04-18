import Navbar from "../components/Navbar";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const LoginRedi = () => {
    navigate("/login");
  };
  return (
    <Box>
      <Typography variant="h2" sx={{ ml: 45, mt: 10 }}>
        Something went Wrong
      </Typography>
      <Button onClick={LoginRedi} variant="contained" sx={{ ml: 78, mt: 10 }}>
        Log in
      </Button>
    </Box>
  );
};
export default ErrorPage;
