import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Collapse,
} from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Credbox = ({ type }) => {
  const isSignin = type === "Signin";

  axios.defaults.withCredentials = true;

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isSignin) {
        await axios.post("http://localhost:8080/api/v1/auth/register", {
          username,
          email,
          password,
        });
        toast.success("User Registered Successfully");
        navigate("/login");
      } else {
        await axios.post("http://localhost:8080/api/v1/auth/login", {
          username,
          password,
        });
        toast.success("User logged in Successfully");
        navigate("/dashboard");
        localStorage.setItem("username", username);
      }
    } catch (error) {
      console.log(error);
      if (error.response?.data?.error) {
        setError(error.response.data.error);
      } else {
        setError(error.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <Box
      width={"30%"}
      textAlign={"center"}
      sx={{
        ml: "20",
        height: "390px",
        boxShadow: 3,
        mb: 2,
        bgcolor: "#1e293b",
        color: "black",
        borderRadius: "15px",
        border: "1px solid white",
      }}
    >
      <Collapse in={error}>
        <Alert severity="error">{error}</Alert>
      </Collapse>
      <Box
        width={"95%"}
        p="1px"
        sx={{
          bgcolor: "blue",
          ml: "40px",
          mt: "20px",
          mx: "auto",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          height: "55px",
          bgcolor: "black",
          borderRadius: "20px",
        }}
      >
        <Button
          variant="contained"
          size="medium"
          component={NavLink}
          to="/register"
          sx={{
            width: "50%",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            border: "1px solid black",
            bgcolor: !isSignin ? "#38bdf8" : "#1e293b",
            color: !isSignin ? "black" : "white",
          }}
        >
          Sign Up
        </Button>
        <Button
          variant="contained"
          size="medium"
          component={NavLink}
          to="/login"
          sx={{
            width: "50%",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
            border: "1px solid black",
            bgcolor: isSignin ? "#38bdf8" : "#1e293b",
            color: isSignin ? "black" : "white",
          }}
        >
          Sign In
        </Button>
      </Box>
      <form onSubmit={handleSubmit}>
        <Typography
          variant="h4"
          textAlign={"left"}
          sx={{ ml: "20px", mt: 1, mb: -5, color: "#e2e8f0" }}
        >
          {isSignin ? "Login" : "Sign up"}
        </Typography>
        <TextField
          placeholder="Enter username..."
          variant="outlined"
          size="small"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          sx={{
            input: {
              color: "white",
              "&::placeholder": {
                color: "#94a3b8",
                opacity: 1,
              },
            },
            width: "90%",
            mt: 7,
            bgcolor: "#334155",
            borderRadius: "5px",
            border: "1px solid grey",
          }}
        />
        {!isSignin && (
          <TextField
            placeholder="Enter email..."
            variant="outlined"
            size="small"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            sx={{
              input: {
                color: "white",
                "&::placeholder": {
                  color: "#94a3b8",
                  opacity: 1,
                },
              },
              width: "90%",
              mt: 3,
              bgcolor: "#334155",
              borderRadius: "5px",
              border: "1px solid grey",
            }}
          />
        )}
        <TextField
          placeholder="Enter your password..."
          type="password"
          variant="outlined"
          size="small"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          sx={{
            input: {
              color: "white",
              "&::placeholder": {
                color: "#94a3b8",
                opacity: 1,
              },
            },
            width: "90%",
            mt: 3,
            bgcolor: "#334155",
            borderRadius: "5px",
            border: "1px solid grey",
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, width: "85%", bgcolor: "#22b4f3" }}
        >
          {isSignin ? "Login" : "Sign up"}
        </Button>
      </form>
    </Box>
  );
};

export default Credbox;
