import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditPage() {
  const API = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [time, setTime] = useState("");
  const [is_favorite, setIs_favorite] = useState(false);

  useEffect(() => {
    editSong();
  }, []);

  async function editSong() {
    try {
      let result = await axios.get(`${API}/songs/${id}`);
      console.log(result.data);
      setName(result.data.name);
      setArtist(result.data.artist);
      setAlbum(result.data.album);
      setTime(result.data.time);
      setIs_favorite(result.data.is_favorite);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`${API}/songs/${id}`, {
        name: name,
        artist: artist,
        album: album,
        time: time,
        is_favorite: is_favorite,
      });
      navigate("/songs");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div>
        <h2>Edit</h2>
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
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default EditPage;
