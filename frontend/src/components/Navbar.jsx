import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      width={"100%"}
      p="10px"
      textAlign={"center"}
      sx={{ BoxShadow: 3, mb: 2, bgcolor: "#1e293b", color: "white" }}
    >
      <Typography variant="h4" color={"white"} fontWeight="bold" component={NavLink} to="/" sx={{ textDecoration: "none" }}>
        My<span style={{ color: "#38bdf8" }}>AI</span>
      </Typography>
    </Box>
  );
};

export default Navbar;
