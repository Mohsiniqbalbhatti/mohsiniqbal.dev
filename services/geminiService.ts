import { GoogleGenAI } from "@google/genai";
import { BIO_LONG, EXPERIENCES, PROJECTS, SKILLS, NAME } from "../constants";

let ai: GoogleGenAI | null = null;

try {
  // Initialize only if key is present to avoid runtime crash on start
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI", error);
}

const SYSTEM_PROMPT = `
You are "${NAME}'s Digital Twin", an AI assistant on the portfolio website of ${NAME}.
Your goal is to answer questions about ${NAME} professionally, concisely, and with a touch of wit.

Context:
Bio: ${BIO_LONG}
Skills: ${JSON.stringify(SKILLS)}
Experiences: ${JSON.stringify(EXPERIENCES)}
Projects: ${JSON.stringify(PROJECTS)}

Rules:
1. Keep answers under 3 sentences unless asked for detail.
2. Be helpful and encouraging about hiring ${NAME}.
3. If asked about something not in the context, politely say you don't know but suggest contacting ${NAME} directly.
4. Use a friendly, professional tone.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return `I'm currently offline (API Key missing). Please try again later or contact ${NAME} directly!`;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        thinkingConfig: { thinkingBudget: 0 } // Fast response for chat
      },
    });

    return response.text || "I had a thought, but it slipped away. Try asking again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "My connection to the neural net is a bit fuzzy right now. Can you ask that again?";
  }
};