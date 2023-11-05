import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  function navigateToSongs() {
    navigate("/songs");
  }
  return (
    <div className="navbar">
      <h1 onClick={navigateToSongs}>Tuner</h1>
    </div>
  );
}

export default Navbar;
