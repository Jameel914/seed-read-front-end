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
      <IndexPage />
    </div>
  );
}

export default Home;
