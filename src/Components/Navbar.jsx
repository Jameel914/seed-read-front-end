import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function navigateToSongs() {
    navigate("/songs");
  }
  return <h1 onClick={navigateToSongs}>Tuner</h1>;
}

export default Navbar;
