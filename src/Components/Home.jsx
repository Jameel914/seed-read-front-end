import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function welcome() {
    navigate("/songs");
  }
  return (
    <div>
      <h2 onClick={welcome}>Welcome to the songs app!</h2>
    </div>
  );
}

export default Home;
