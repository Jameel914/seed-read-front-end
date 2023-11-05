import React, { useState } from "react";
import axios from "axios";
import "./NewPage.css";
import { useNavigate } from "react-router-dom";

function NewPage() {
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [time, setTime] = useState("");
  const [is_favorite, setIs_favorite] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let result = await axios.post(`${API}/songs`, {
        name: name,
        artist: artist,
        album: album,
        time: time,
        is_favorite: is_favorite,
      });
      console.log(result);
      navigate("/songs");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="new">
        <h2>New</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="name-input">
          <label>Song Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="artist-input">
          <label>Artist</label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <div className="album-input">
          <label>Album</label>
          <input
            type="text"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
          />
        </div>
        <div className="time-input">
          <label>Time</label>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="favortie">
          <label>Favorite</label>
          <input
            type="checkbox"
            checked={is_favorite}
            onChange={(e) => setIs_favorite(e.target.checked)}
          />
        </div>

        <div className="button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default NewPage;
