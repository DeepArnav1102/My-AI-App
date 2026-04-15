import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Credbox = ({ type }) => {
  const isSignin = type === "Signin";
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
        variant="outlined"
        size="small"
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
        variant="contained"
        sx={{ mt: 3, width: "85%", bgcolor: "#22b4f3" }}
      >
        {isSignin ? "Login" : "Sign up"}
      </Button>
    </Box>
  );
};

export default Credbox;
