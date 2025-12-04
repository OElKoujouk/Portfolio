/*
import { embed } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import type { NextRequest } from "next/server";

const openai = createOpenAI({
  apiKey: process.env.MODEL_IA,
  baseURL: "https://gateway.ai.vercel.com/api/openai/v1"
});

export async function POST(_req: NextRequest) {
  const result = await embed({
    model: openai.embedding("text-embedding-3-small"),
    value: "Sunny day at the beach",
  });

  return Response.json(result);
}
*/

export async function POST() {
  return Response.json(
    { message: "Chatbot desactive temporairement." },
    { status: 503 }
  );
}
