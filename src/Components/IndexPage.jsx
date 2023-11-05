import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function IndexPage() {
  const [show, setShow] = useState([]);
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;
  const { id } = useParams();

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
                <td>
                  <Link to={`/songs/${item.id}`}>
                    {item.is_favorite ? <span>🔥</span> : <span>{""}</span>}
                  </Link>
                </td>
                <td>
                  <Link to={`/songs/${item.id}`}>{item.name}</Link>
                </td>
                <td>
                  <Link to={`/songs/${item.id}`}>{item.artist}</Link>
                </td>
                <td>
                  <Link to={`/songs/${item.id}`}>{item.time}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default IndexPage;
