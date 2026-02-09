import { useState } from "react";
import logo from "./assets/college-logo.svg";

const API_BASE = "";

function App() {
  const [text, setText] = useState("");
  const [readData, setReadData] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const parseJsonSafe = async (response) => {
    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      return response.json();
    }
    const text = await response.text();
    if (!text) {
      return {};
    }
    try {
      return JSON.parse(text);
    } catch {
      return { message: text };
    }
  };

  const handleWrite = async () => {
    setStatus("");
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/write`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });

      const data = await parseJsonSafe(response);
      if (!response.ok) {
        throw new Error(data?.message || "Write failed");
      }
      if (data?.file) {
        setStatus(`File written successfully: ${data.file}`);
      } else {
        setStatus("File written successfully.");
      }
    } catch (error) {
      setStatus(error.message || "Write failed");
    } finally {
      setLoading(false);
    }
  };

  const handleRead = async () => {
    setStatus("");
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/read`);
      const data = await parseJsonSafe(response);
      if (!response.ok) {
        throw new Error(data?.message || "Read failed");
      }
      setReadData(data?.content || "");
      if (data?.file) {
        setStatus(`File read successfully: ${data.file}`);
      } else {
        setStatus("File read successfully.");
      }
    } catch (error) {
      setStatus(error.message || "Read failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <img className="logo" src={logo} alt="College logo" />
        <h1>FS Model for Node</h1>
        <p className="subtitle">Create/Write and Read using Node.js File System</p>

        <label className="label" htmlFor="fsText">
          Text to write
        </label>
        <textarea
          id="fsText"
          className="input"
          rows="4"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Type something to write into the file"
        />

        <div className="actions">
          <button className="btn primary" onClick={handleWrite} disabled={loading || text.trim() === ""}>
            FS Create / Write
          </button>
          <button className="btn" onClick={handleRead} disabled={loading}>
            FS Read
          </button>
        </div>

        {status && <div className="status">{status}</div>}

        <div className="result">
          <div className="result-title">Read Output</div>
          <div className="result-box">{readData || "(nothing yet)"}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
