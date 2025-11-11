import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    // مسیر فایل db.json
    const dbPath = path.join(process.cwd(), "public", "db.json");

    // خواندن فایل
    const data = await fs.readFile(dbPath, "utf8");
    const jsonData = JSON.parse(data);

    return new Response(JSON.stringify(jsonData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("API Error:", err);
    return new Response(
      JSON.stringify({
        error: "Cannot read data",
        message: err.message,
        path: process.cwd(),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
