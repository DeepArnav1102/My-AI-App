import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      width={"100%"}
      p="10px"
      textAlign={"center"}
      sx={{ BoxShadow: 3, mb: 2, bgcolor: "darkblue", color: "white" }}
    >
      <Typography variant="h1" color={"white"} fontWeight="bold">
        My-AI-App
      </Typography>
      <NavLink to="/register" p={1}>
        Sign Up
      </NavLink>
      <NavLink to="/login" p={1}>
        Sign in
      </NavLink>
    </Box>
  );
};

export default Navbar;
