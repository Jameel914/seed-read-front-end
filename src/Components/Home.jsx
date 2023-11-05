import React from "react";
import { useNavigate } from "react-router-dom";
import IndexPage from "./IndexPage";

function Home() {
  const navigate = useNavigate();

  function welcome() {
    navigate("/songs");
  }
  return (
    <div>
      <h2 onClick={welcome}>Welcome to the songs app!</h2>
      <IndexPage />
    </div>
  );
}

export default Home;
