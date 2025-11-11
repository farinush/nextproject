import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "db.json"); // public
    const data = await fs.readFile(filePath, "utf8");
    const jsonData = JSON.parse(data);

    return new Response(JSON.stringify(jsonData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Cannot read data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
