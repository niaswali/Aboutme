// FIX: The 'get' function is no longer exported from '@vercel/blob'. Replaced with 'list' to find the blob by its key and then fetch its content.
import { list, put } from '@vercel/blob';

export const runtime = 'edge';

const BLOB_KEY = 'portfolio-data.json';

export async function GET(request: Request): Promise<Response> {
  try {
    const { blobs } = await list({ prefix: BLOB_KEY, limit: 1 });

    if (blobs.length === 0) {
      // If no blob is found with the key, return 404.
      return new Response('Not Found', { status: 404 });
    }
    
    // Fetch the content from the blob's URL.
    const blobResponse = await fetch(blobs[0].url);
    if (!blobResponse.ok) {
      // Handle cases where fetching the blob URL fails.
      throw new Error(`Failed to fetch blob content: ${blobResponse.statusText}`);
    }

    const data = await blobResponse.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return new Response('Not Found', { status: 404 });
    }
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    return new Response(JSON.stringify({ message: 'Internal Server Error', error: message }), { status: 500 });
  }
}

export async function POST(request: Request): Promise<Response> {
  try {
    const data = await request.json();
    await put(BLOB_KEY, JSON.stringify(data), {
      access: 'public',
      contentType: 'application/json',
    });
    return new Response(JSON.stringify({ message: 'Data saved successfully' }), { status: 200 });
  } catch (error: any) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    return new Response(JSON.stringify({ message: 'Failed to save data', error: message }), { status: 500 });
  }
}