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
      let result = await axios.get(`${API}/songs/${id}`);
      console.log(result);
      navigate("/songs");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div>
        <h2>Show</h2>
      </div>
      <div>
        <h2>
          {single.is_favorite ? <span>🔥</span> : <span>{""}</span>}{" "}
          {single.name} - By {single.artist}
        </h2>
      </div>
      <div>
        <p>{single.album}</p>
      </div>
      <div>
        <p>time</p>
      </div>
      <div>
        <button onClick={backButton}>BACK</button>
        <button onClick={editButton}>EDIT</button>
        <button onClick={deleteButton}>DELETE</button>
      </div>
    </div>
  );
}

export default ShowPage;
