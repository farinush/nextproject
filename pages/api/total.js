import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  try {
    const dbPath = path.join(process.cwd(), "public", "db.json");
    const raw = await fs.readFile(dbPath, "utf8");
    const jsonData = JSON.parse(raw);
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json(jsonData);
  } catch (err) {
    console.error("pages/api/total error:", err);
    return res
      .status(500)
      .json({ error: "Failed to read db.json", message: err.message });
  }
}
