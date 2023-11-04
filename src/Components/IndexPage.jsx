import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function IndexPage() {
  const [show, setShow] = useState([]);
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchShow();
  }, []);

  async function fetchShow() {
    try {
      let result = await axios.get(`${API}/songs`);
      console.log(result.data);
      setShow(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  function newSongButton() {
    navigate("/songs/new");
  }

  function isFavoriteLink() {
    navigate("/songs/:id");
  }

  function nameLink() {
    navigate("/songs/:id");
  }

  function artistLink() {
    navigate("/songs/:id");
  }

  function timeLink() {
    navigate("/songs/:id");
  }

  return (
    <div>
      <h2>Index</h2>
      <button onClick={newSongButton}>NEW SONG</button>
      <table>
        <tbody>
          <tr>
            <th>Fav</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Time</th>
          </tr>
          {show.map((item, index) => {
            return (
              <tr key={index}>
                <td onClick={isFavoriteLink}>
                  {item.is_favorite ? <span>🔥</span> : <span>{""}</span>}
                </td>
                <td onClick={nameLink}>{item.name}</td>
                <td onClick={artistLink}>{item.artist}</td>
                <td onClick={timeLink}>{item.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default IndexPage;
