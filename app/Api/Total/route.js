export async function GET() {
  try {
    // در development: از /api/total استفاده کنید
    // در production (Vercel): db.json باید در root دسترسی‌پذیر باشد
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/db.json`);

    if (!response.ok) {
      throw new Error("Failed to fetch db.json");
    }

    const jsonData = await response.json();

    return new Response(JSON.stringify(jsonData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("API Error:", err);
    return new Response(
      JSON.stringify({ error: "Cannot read data", message: err.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
