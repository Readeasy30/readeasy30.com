// readeasy30.com — AI Bubbles chat endpoint
// This Pages Function uses the Workers AI binding configured in your Pages project settings.
// The binding name is "AI" (configured in dashboard > readeasy30 > Settings > Bindings).

export async function onRequestPost(context) {
  const { request, env } = context;

  // CORS headers so the page can call this endpoint
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    const { message, history } = await request.json();

    if (!message || !message.trim()) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Build conversation context
    const chatHistory = Array.isArray(history) ? history : [];
    const messages = [
      {
        role: 'system',
        content:
          'You are the ReadEasy30 AI assistant, a friendly reading and learning helper for kids and parents. ' +
          'Keep answers simple, encouraging, and age-appropriate. Be concise and conversational.',
      },
      ...chatHistory.slice(-20),
      { role: 'user', content: message },
    ];

    // Call Workers AI
    const aiResponse = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
      messages,
      max_tokens: 512,
      temperature: 0.7,
    });

    const reply = aiResponse.response || 'I could not generate a response. Please try again.';

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'AI service error: ' + (err.message || 'unknown error') }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
}

// Also handle GET for health check
export async function onRequestGet(context) {
  const { env } = context;
  return new Response(
    JSON.stringify({ status: 'ok', ai: !!env.AI }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}

