import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PromptBox from "../components/PromptBox";

const GenImage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("username");

    if (!user) {
      navigate("/errorpage");
    }
  }, [navigate]);

  return <PromptBox title="Generate Image" placeholder="Describe your Image" />;
};

export default GenImage;
