import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    const dbPath = path.join(process.cwd(), "public", "db.json");
    const raw = await fs.readFile(dbPath, "utf8");
    const jsonData = JSON.parse(raw);

    return new Response(JSON.stringify(jsonData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=3600",
      },
    });
  } catch (err) {
    console.error("API Error:", err);
    return new Response(
      JSON.stringify({
        error: "Failed to read db.json",
        message: err.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
