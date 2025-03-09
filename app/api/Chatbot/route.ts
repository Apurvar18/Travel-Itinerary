import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");

  if (!city) {
    return NextResponse.json({ error: "City is required" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://${process.env.NEXT_PUBLIC_HOTELBEDS_HOST}/hotel-api/1.0/hotels?destination=${encodeURIComponent(city)}`,
      {
        headers: {
          "Api-Key": process.env.NEXT_PUBLIC_HOTELBEDS_API_KEY!,
          "Accept": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json({ hotels: data.hotels || [] });
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return NextResponse.json({ error: "Failed to fetch hotels" }, { status: 500 });
  }
}
