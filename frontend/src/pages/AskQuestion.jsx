import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PromptBox from "../components/PromptBox";
import { Box } from "@mui/material";
import OutputBox from "../components/OutputBox";

const AskQuestion = () => {
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
        title="Ask a Question"
        placeholder="What's your Question?"
        button="answer"
        setOutput={setOutput}
        url="ask-question"
      />
      <OutputBox output={output} />
    </Box>
  );
};

export default AskQuestion;
