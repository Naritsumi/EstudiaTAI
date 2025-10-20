import { Counter } from 'counterapi';

export async function POST() {
  try {
    const counter = new Counter({
      workspace: import.meta.env.COUNTER_WORKSPACE,
      accessToken: import.meta.env.COUNTER_TOKEN,
    });
    const result = await counter.up('estudiatai-downloads');
    return new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: (error as Error)?.message || String(error) }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
