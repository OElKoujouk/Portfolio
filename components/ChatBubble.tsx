"use client";

import { useEffect, useRef, useState } from "react";
import { Send, MessageCircle, X } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

type ChatBubbleProps = {
  defaultOpen?: boolean;
};

export default function ChatBubble({ defaultOpen = false }: ChatBubbleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [messageValue, setMessageValue] = useState("");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { messages, sendMessage, status, error, clearError } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" })
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <button
        type="button"
        aria-label="Ouvrir le chatbot"
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent-blue text-primary shadow-xl shadow-accent-blue/30 transition hover:-translate-y-0.5 hover:shadow-accent-blue/50"
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-[360px] max-w-[90vw] overflow-hidden rounded-3xl border border-white/10 bg-primary/95 shadow-2xl shadow-black/40 backdrop-blur">
          <header className="flex items-center justify-between border-b border-white/5 px-4 py-3 text-sm font-semibold text-white">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent-blue">Chat portfolio</p>
              <p className="text-sm text-gray-200">Parlez avec Omar El Koujouk</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 text-gray-400 transition hover:bg-white/5 hover:text-white"
              aria-label="Fermer le chatbot"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div ref={scrollRef} className="flex max-h-[420px] flex-col gap-3 overflow-y-auto px-4 py-3 text-sm">
            {messages.length === 0 && (
              <div className="rounded-2xl border border-white/5 bg-white/5 px-3 py-2 text-gray-300">
                Posez vos questions sur mon parcours, mes projets, ma stack ou mes choix techniques. Je réponds en streaming.
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[85%] rounded-2xl px-3 py-2 ${
                  message.role === "user"
                    ? "ml-auto bg-accent-blue text-primary shadow-accent-blue/30"
                    : "mr-auto border border-white/5 bg-white/5 text-gray-100"
                }`}
              >
                {message.content}
              </div>
            ))}

            {error && (
              <div className="rounded-2xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-red-200">
                Une erreur est survenue. Réessaie dans un instant.
              </div>
            )}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              const text = messageValue.trim();
              if (!text) return;
              sendMessage({ text });
              setMessageValue("");
            }}
            className="flex items-center gap-2 border-t border-white/5 bg-black/30 px-3 py-3"
          >
            <input
              name="message"
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
              placeholder="Posez une question..."
              className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-500 outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/60"
              autoComplete="off"
              disabled={status === "in-flight"}
            />
            <button
              type="submit"
              disabled={status === "in-flight" || messageValue.trim().length === 0}
              className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-blue text-primary shadow-lg shadow-accent-blue/30 transition hover:-translate-y-0.5 hover:shadow-accent-blue/50 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Envoyer"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
