import { handleUpload, type HandleUploadBody } from '@vercel/blob/server';

export const runtime = 'edge';

export async function POST(request: Request): Promise<Response> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname: string) => {
        return {
          allowedContentTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
          tokenPayload: JSON.stringify({
            // Optional payload for your serverless function
          }),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // This callback is called after the blob is uploaded to the store successfully
        // You can perform additional actions here if needed
      },
    });

    return new Response(JSON.stringify(jsonResponse), {
        headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    const message = (error as Error).message;
    return new Response(
      JSON.stringify({ error: message }),
      { status: 400 }, // The client will not retry on 4xx status codes
    );
  }
}
