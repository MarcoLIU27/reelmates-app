import { NextRequest, NextResponse } from 'next/server';
import TMDBClient from '@/app/clients/TMDBclient';

// Fetch movie details and keywords from TMDB
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params; // Extract the movie ID from the parameters

  try {
    // Fetch movie details from TMDB
    const { data: details } = await TMDBClient.get(`/movie/${id}`);

    // Fetch movie keywords from TMDB
    const { data: keywords } = await TMDBClient.get(`/movie/${id}/keywords`);

    // Return the details and keywords
    return NextResponse.json({ details, keywords }, { status: 200 });
  } catch (error: any) {
    // Log the error for debugging
    console.error('Error fetching TMDB data:', error.message);

    // Handle TMDB-specific errors gracefully
    return NextResponse.json(
      { message: error.response?.data?.status_message || 'Failed to fetch movie details from TMDB' },
      { status: error.response?.status || 500 }
    );
  }
}
