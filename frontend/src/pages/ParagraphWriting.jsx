import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PromptBox from "../components/PromptBox";
import OutputBox from "../components/OutputBox";
import { Box } from "@mui/material";

const ParagraphWriting = () => {
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
        title="Paragraph Writing"
        placeholder="Enter your Prompt"
        button="Paragraph"
        url="gen_pararaph"
        setOutput={setOutput}
      />
      <OutputBox output={output} />
    </Box>
  );
};

export default ParagraphWriting;
