import React from "react";
import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 120px)",
        gap: "24px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: "#e2e8f0",
          textAlign: "center",
        }}
      >
        <span style={{ color: "#38bdf8" }}> AI </span>Companion
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#94a3b8",
          textAlign: "center",
          maxWidth: "500px",
        }}
      >
        Hey There Friend !
      </Typography>
      <Button
        variant="contained"
        size="large"
        component={NavLink}
        to="/register"
        sx={{
          mt: 2,
          px: 5,
          py: 1.5,
          bgcolor: "#38bdf8",
          color: "#0f172a",
          fontWeight: 600,
          borderRadius: "12px",
          textTransform: "none",
          fontSize: "1.1rem",
          "&:hover": {
            bgcolor: "#22b4f3",
          }
        }}
      >
        Get Started
      </Button>
    </div>
  );
};

export default Homepage;
