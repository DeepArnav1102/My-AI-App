import React from "react";
import Credbox from "../components/Credbox";

const Register = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 120px)",
      }}
    >
      <Credbox type="Signup" />
    </div>
  );
};

export default Register;
