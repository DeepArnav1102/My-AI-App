import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8080/api/v1/auth/logout",
        {},
        { withCredentials: true },
      );

      localStorage.removeItem("username");

      navigate("/login");
      toast.success("User Logged out Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (!user) {
      navigate("/errorpage");
    } else {
      setUsername(user);
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 1,
      }}
    >
      <Typography variant="h5" sx={{ ml: 5 }}>
        Welcome {username}
      </Typography>
      <Button
        onClick={handleLogout}
        variant="outlined"
        sx={{ mr: 5, color: "white" }}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default Dashboard;
