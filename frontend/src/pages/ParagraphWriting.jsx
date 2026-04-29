import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PromptBox from "../components/PromptBox";

const ParagraphWriting = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("username");

    if (!user) {
      navigate("/errorpage");
    }
  }, [navigate]);

  return <PromptBox title="Paragraph Writing" placeholder= "Enter your Prompt" />;
};

export default ParagraphWriting;
