import React, { useState } from "react";
import axios from "axios";

function NewPage() {
  const API = import.meta.env.VITE_API_URL;

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
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <h2>New</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Song Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Artist</label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <div>
          <label>Album</label>
          <input
            type="text"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
          />
        </div>
        <div>
          <label>Time</label>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div>
          <label>Favorite</label>
          <input
            type="checkbox"
            checked={is_favorite}
            onChange={(e) => setIs_favorite(e.target.checked)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default NewPage;
