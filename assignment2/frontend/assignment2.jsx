import { useState } from "react";
import "./Assignment2.css";

function Assignment2() {
  const [activePage, setActivePage] = useState("home");
  const [OsOutput, setOsOutput] = useState("");
  const fetch = async (endpoint) => {
    try {
      const response = await window.fetch(`http://localhost:5000/${endpoint}`);
      const data = await response.text();
      setOsOutput(data);
    } catch (err) {
      console.log(err);
      setOsOutput("Error fetching data");
    }
  };
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZVBdSn-1xDcTSccAw3D6ISpSIP07nzFcQA&s"
            alt="ABES"
          />
        </div>

        <div className="nav-buttons">
          <button
            className={activePage === "home" ? "active" : ""}
            onClick={() => setActivePage("home")}
          >
            HOME
          </button>
          <button
            className={activePage === "work" ? "active" : ""}
            onClick={() => setActivePage("work")}
          >
            WORK
          </button>
        </div>
      </nav>
      {activePage === "home" && (
        <div className="home-section">
          <img
            className="home-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZVBdSn-1xDcTSccAw3D6ISpSIP07nzFcQA&s"
            alt="ABES"
          />
          <h1 className="home-title">ABES Engineering College</h1>
        </div>
      )}

      {activePage === "work" && (
        <div className="work-section">
          <h2 className="work-title">OS with React</h2>

          <div className="work-icon">
            <img
              src="https://images-platform.99static.com//lLrXTgVKLZtXB6cKQnvpEDsyCgo=/983x5409:1663x6089/fit-in/500x500/99designs-contests-attachments/98/98462/attachment_98462793"
              alt="icon"
            />
            <h1 className="os-output">{OsOutput}</h1>
          </div>

          <div className="work-buttons">
            <button onClick={() => fetch("user-info")}>User Info</button>
            <button onClick={() => fetch("home-dir")}>Home directory</button>
            <button onClick={() => fetch("platform")}>Platform</button>
            <button onClick={() => fetch("arch")}>Architecture</button>
            <button onClick={() => fetch("hostname")}>Hostname</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Assignment2;