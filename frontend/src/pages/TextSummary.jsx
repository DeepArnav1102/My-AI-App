import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PromptBox from "../components/PromptBox";

const TextSummary = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("username");

    if (!user) {
      navigate("/errorpage");
    }
  }, [navigate]);

  return <PromptBox title="Text Summary" placeholder="Enter the text" />;
};

export default TextSummary;
