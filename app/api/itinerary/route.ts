import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  let destination = searchParams.get('destination');
  const totalDays = searchParams.get('total_days');

  if (!destination || !totalDays) {
    return NextResponse.json({ message: "Missing destination or total days" }, { status: 400 });
  }

  // Clean the destination by removing extra parts like ', Canada'
  destination = destination.split(',')[0];  // Keeps only the part before the comma (e.g., 'Quebec City')

  console.log('Fetching itinerary for:', destination, totalDays);

  try {
    // Fetch itinerary data based on the cleaned destination and total days
    const itineraryData = await prisma.itinerary.findMany({
      where: {
        destination: destination,
        total_days: Number(totalDays),
      },
    });

    if (itineraryData.length === 0) {
      return NextResponse.json({ message: "No itinerary data found" }, { status: 404 });
    }

    return NextResponse.json(itineraryData);
  } catch (error) {
    console.error('Error fetching itinerary:', error);
    return NextResponse.json({ message: "Error fetching itinerary data" }, { status: 500 });
  }
}
