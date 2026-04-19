import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GenImage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("username");

    if (!user) {
      navigate("/errorpage");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Generate Image</h1>
    </div>
  );
};

export default GenImage;
