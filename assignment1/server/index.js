import express from "express";
import cors from "cors";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, "data");
const dataFile = path.join(dataDir, "fs-data.txt");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "FS Model for Node API" });
});

app.post("/write", async (req, res) => {
  try {
    const text = String(req.body?.text || "");
    await fs.mkdir(dataDir, { recursive: true });
    await fs.writeFile(dataFile, text, "utf8");
    res.json({ message: "Written", file: path.basename(dataFile), bytes: text.length });
  } catch (error) {
    res.status(500).json({ message: "Unable to write file" });
  }
});

app.get("/read", async (req, res) => {
  try {
    const content = await fs.readFile(dataFile, "utf8");
    res.json({ content, file: path.basename(dataFile) });
  } catch (error) {
    if (error?.code === "ENOENT") {
      return res.json({ content: "", file: path.basename(dataFile) });
    }
    res.status(500).json({ message: "Unable to read file" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
