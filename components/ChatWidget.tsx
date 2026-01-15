"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  // Simple UI state for the widget and message list.
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hi! I'm the Kebab Assistant. I can help with menu, halal info, allergens, and reservations.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to the newest message as we chat.
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Send the current input to the API and append the assistant reply.
  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    setError(null);

    try {
      // Pass the full chat history so the model can keep context.
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: messages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Request failed");
      }

      // If the API didn't send a reply string, fall back gracefully.
      const data = await response.json();
      const reply =
        typeof data.reply === "string"
          ? data.reply
          : "I'm here to help with menu and reservations.";

      const botMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: reply,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          role: "assistant",
          content:
            "I couldn't reach the AI service. Make sure Ollama is running and the model is pulled.",
        },
      ]);
      setError("Unable to reach the AI service.");
    } finally {
      setIsTyping(false);
    }
  };

  // Enter sends the message, Shift+Enter inserts a new line.
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="glass w-[350px] max-w-[90vw] h-[450px] rounded-2xl p-4 shadow-2xl flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="font-semibold text-slate-900">Kebab Assistant</p>
              <p className="text-xs text-slate-500">
                Ask about menu, halal info, allergens, reservations.
              </p>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              className="h-9 w-9 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 pr-1">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-brand-600 text-white shadow-glow"
                      : "bg-slate-100 text-slate-900 border border-slate-200"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[70%] rounded-2xl px-3 py-2 text-xs text-slate-700 bg-slate-100 border border-slate-200">
                  typing…
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="mt-3 space-y-2">
            <div className="flex items-end gap-2">
              <textarea
                rows={1}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Send a message"
                className="flex-1 resize-none rounded-2xl bg-white border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-200"
              />
              <button
                type="button"
                onClick={() => void sendMessage()}
                disabled={isTyping || input.trim().length === 0}
                className="h-10 w-10 rounded-full bg-brand-600 text-white shadow-glow hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center"
                aria-label="Send message"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M3.4 20.6 22 12 3.4 3.4l-.9 6.7 9.5 1.9-9.5 1.9z" />
                </svg>
              </button>
            </div>
            {error && <p className="text-xs text-amber-600">{error}</p>}
            <p className="text-[11px] text-slate-500">
              Powered by a local Llama model via{" "}
              <code className="text-slate-800">/api/chat</code>.
            </p>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="h-14 w-14 rounded-full bg-brand-600 text-white shadow-glow hover:scale-105 transition flex items-center justify-center"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M4 4h16v9H6l-2 2z" />
          </svg>
        </button>
      )}
    </div>
  );
}
