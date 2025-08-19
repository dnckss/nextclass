export async function GET(request) {
  
  const { searchParams } = new URL(request.url);
  
  
  const query = {};
  for (const [key, value] of searchParams.entries()) {
    query[key] = value;
  }
  
  
  return new Response(JSON.stringify({ query }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
