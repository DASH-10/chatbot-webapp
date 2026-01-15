import { NextResponse } from "next/server";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

// This prompt sets the assistant's role and tone for every response.
const SYSTEM_PROMPT =
  "You are the Kebab Assistant for Omar's Kebab House, a Turkish kebab & shawarma restaurant. "
  + "Be short, friendly, and helpful about the menu, halal info, allergens, and reservations. "
  + "If someone wants to reserve, ask for date, time, guests, name, and phone. "
  + "Keep answers brief and welcoming.";

export async function POST(request: Request) {
  console.log("[/api/chat] route hit");

  try {
    // Ollama runs locally by default, but these env vars let us override it.
    const baseUrl = process.env.OLLAMA_BASE_URL || "http://127.0.0.1:11434";
    const model = process.env.OLLAMA_MODEL || "llama3.1";

    // Read the incoming JSON body (message + optional chat history).
    const body = (await request.json()) as {
      message?: string;
      history?: ChatMessage[];
    };

    // Basic guardrails so we always have a user message.
    if (!body?.message || typeof body.message !== "string") {
      return NextResponse.json(
        { error: "Please provide a message string." },
        { status: 400 },
      );
    }

    // Keep only valid history items to avoid bad shapes or unknown roles.
    const history = Array.isArray(body.history)
      ? body.history.filter(
          (item): item is ChatMessage =>
            typeof item?.content === "string" &&
            (item.role === "user" ||
              item.role === "assistant" ||
              item.role === "system"),
        )
      : [];

    // Call Ollama's chat endpoint with system + history + new user message.
    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify({
        model,
        stream: false,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...history,
          { role: "user", content: body.message },
        ],
        options: {
          temperature: 0.5,
          num_predict: 200,
        },
      }),
    });

    // If Ollama fails, return a friendly error to the client.
    if (!response.ok) {
      const details = await response.text();
      return NextResponse.json(
        { error: "Chat service failed.", details },
        { status: 502 },
      );
    }

    const data = (await response.json()) as {
      message?: { content?: string };
    };
    // Safely pick the assistant message or fall back to a short apology.
    const reply =
      data.message?.content?.trim() ||
      "Sorry, I could not generate a reply.";

    return NextResponse.json({ reply });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error calling Ollama";
    console.error("[/api/chat] error:", message);
    return NextResponse.json(
      { error: "Chat service failed.", details: message },
      { status: 500 },
    );
  }
}
