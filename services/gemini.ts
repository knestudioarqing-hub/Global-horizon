
import { GoogleGenAI } from "@google/genai";

// Acessa a chave de forma segura
const getApiKey = () => {
  try {
    return process.env.API_KEY || '';
  } catch (e) {
    return '';
  }
};

export const startTravelChat = () => {
  const ai = new GoogleGenAI({ apiKey: getApiKey() });
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: 'Você é um especialista em viagens de luxo da Global Horizon. Seja sofisticado, atencioso e conhecedor. Você ajuda os clientes a planejar viagens exclusivas para destinos como Itália, Japão, Alpes e Dubai. Sempre fale em Português do Brasil.',
    },
  });
};
