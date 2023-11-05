import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./IndexPage.css";

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
      //console.log(result.data);
      setShow(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  function newSongButton() {
    navigate("/songs/new");
  }

  return (
    <div className="index-container">
      <div className="header">
        <h2>Index</h2>
        <button
          onClick={newSongButton}
          style={{
            backgroundColor: "blue",
            border: "none",
            color: "white",
            padding: "15px 25px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
          }}
        >
          NEW SONG
        </button>
      </div>
      <div className="table-container">
        <table className="table">
          <tbody>
            <tr style={{ fontSize: "30px" }}>
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
                    <Link to={`/songs/${item.id}`} style={{ color: "black" }}>
                      {item.name}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/songs/${item.id}`} style={{ color: "black" }}>
                      {item.artist}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/songs/${item.id}`} style={{ color: "black" }}>
                      {item.time}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IndexPage;
