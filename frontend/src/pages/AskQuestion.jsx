import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PromptBox from "../components/PromptBox";

const AskQuestion = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("username");

    if (!user) {
      navigate("/errorpage");
    }
  }, [navigate]);

  return <PromptBox title="Ask a Question" placeholder="What's your Question?" />;
};

export default AskQuestion;
