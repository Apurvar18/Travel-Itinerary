import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    console.log("GET request received");

    // Extract the query parameter from the URL
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query") || "";
    console.log("Search query received:", query);

    // If no query parameter, return an empty list of destinations
    if (!query) {
      console.log("No query provided, returning empty destinations");
      return NextResponse.json({ destinations: {} });
    }

    // Fetch matching destinations from the database using Prisma
    console.log(`Fetching destinations from database where name contains: ${query}`);
    const destinations = await prisma.destination.findMany({
      where: {
        name: {
          contains: query,
        },
      },
      select: {
        name: true,
        country: true,
      },
    });

    // Log destinations to ensure the structure is correct
    console.log("Fetched destinations:", destinations);

    // Check if destinations are valid before attempting to map them
    if (!destinations || destinations.length === 0) {
      console.log("No destinations found");
      return NextResponse.json({ destinations: {} });
    }

    // Ensure destinationSuggestions has the correct type and reduce it properly
    const destinationSuggestions = destinations.reduce((acc: { [key: string]: string }, city) => {
      if (city.name && city.country) {
        acc[city.name] = city.country; // Store name as key and country as value
      }
      return acc;
    }, {});

    console.log("Destination Suggestions:", destinationSuggestions);

    // Return the destinations as JSON
    return NextResponse.json({ destinations: destinationSuggestions });
  } catch (error) {
    // Log any errors that occur
    console.error("Error fetching destinations:", error);
    return NextResponse.json({ error: "Failed to fetch destinations" }, { status: 500 });
  }
}
