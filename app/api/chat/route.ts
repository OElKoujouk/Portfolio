import { embed } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

const openai = createOpenAI({
  apiKey: process.env.MODEL_IA,
  baseURL: "https://gateway.ai.vercel.com/api/openai/v1" // 🔥 OBLIGATOIRE
});

export async function POST(req) {
  const result = await embed({
    model: openai("text-embedding-3-small"),
    value: "Sunny day at the beach",
  });

  return Response.json(result);
}
