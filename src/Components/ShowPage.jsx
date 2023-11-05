import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ShowPage() {
  const [single, setSingle] = useState("");
  const API = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingle();
  }, []);

  async function fetchSingle() {
    try {
      let result = await axios.get(`${API}/songs/${id}`);
      console.log(result.data);
      setSingle(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  function backButton() {
    navigate("/songs");
  }

  function editButton() {
    navigate(`/songs/${id}/edit`);
  }

  async function deleteButton() {
    try {
      let result = await axios.delete(`${API}/songs/${id}`);
      console.log(result);
      navigate("/songs");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div>
        <h2
          style={{
            display: "flex",
            position: "relative",
            margin: "150px 0px 0px 0px",
          }}
        >
          Show
        </h2>
      </div>
      <div
        style={{
          border: "1px solid blue",
          margin: "10px",
          width: "40%",
          paddingLeft: "20px",
        }}
      >
        <div>
          <h2>
            {single.is_favorite ? <span>🔥</span> : <span>{""}</span>}{" "}
            {single.name} - By {single.artist}
          </h2>
        </div>
        <div>
          <h4>{single.album}</h4>
        </div>
        <div>
          <p>Time: {single.time}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "30px",
        }}
      >
        <button
          onClick={backButton}
          style={{
            backgroundColor: "blue",
            border: "none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
          }}
        >
          BACK
        </button>
        <button
          onClick={editButton}
          style={{
            backgroundColor: "blue",
            border: "none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
          }}
        >
          EDIT
        </button>
        <button
          onClick={deleteButton}
          style={{
            backgroundColor: "blue",
            border: "none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
          }}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default ShowPage;
