import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PromptBox from "../components/PromptBox";
import { Box } from "@mui/material";
import OutputBox from "../components/OutputBox";

const GenJScode = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("username");

    if (!user) {
      navigate("/errorpage");
    }
  }, [navigate]);

  return (
    <Box>
      <PromptBox
        title="Generate JS Code"
        placeholder="Enter your Prompt"
        button="code"
        url="gen-code"
        setOutput={setOutput}
      />
      <OutputBox output={output} />
    </Box>
  );
};

export default GenJScode;
