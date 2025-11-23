import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export interface GeminiMessage {
    role: 'user' | 'model';
    parts: { text: string }[];
}

// Initialize GoogleGenAI with API Key from process.env
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const geminiService = {
    async generateContent(history: GeminiMessage[], systemInstruction?: string) {
        try {
            const response: GenerateContentResponse = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: history,
                config: {
                    systemInstruction: systemInstruction,
                    temperature: 0.7,
                    maxOutputTokens: 1000,
                }
            });

            return {
                text: response.text || '',
                raw: response
            };
        } catch (error) {
            console.error('Gemini API Error:', error);
            throw error;
        }
    },

    async transcribeAudio(audioBlob: Blob): Promise<string> {
        // Convert Blob to Base64
        const base64Audio = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                const base64String = result.split(',')[1];
                resolve(base64String);
            };
            reader.onerror = reject;
            reader.readAsDataURL(audioBlob);
        });

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: {
                    parts: [
                        { text: "Please transcribe this audio exactly as it is spoken. If it is in Hausa, translate it to English as well." },
                        {
                            inlineData: {
                                mimeType: audioBlob.type || 'audio/webm',
                                data: base64Audio
                            }
                        }
                    ]
                }
            });

            return response.text || '';
        } catch (error) {
            console.error('Gemini Audio Transcription Error:', error);
            throw error;
        }
    }
};