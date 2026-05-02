import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PromptBox from "../components/PromptBox";
import OutputBox from "../components/OutputBox";
import { Box } from "@mui/material";

const TextSummary = () => {
  const navigate = useNavigate();
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
        title="Text Summary"
        placeholder="Enter the text"
        setOutput={setOutput}
      />
      <OutputBox output={output} />
    </Box>
  );
};

export default TextSummary;
