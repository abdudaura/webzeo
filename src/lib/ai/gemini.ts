import { supabase } from '../supabase';

export interface GeminiMessage {
    role: 'user' | 'assistant';
    content: string;
}

export const geminiService = {
    async generateContent(history: GeminiMessage[], systemInstruction?: string) {
        try {
            // Convert messages to the format expected by the edge function
            const messages = history.map(msg => ({
                role: msg.role === 'assistant' ? 'assistant' : 'user',
                content: msg.content
            }));

            const { data, error } = await supabase.functions.invoke('ai-chat', {
                body: {
                    messages,
                    systemInstruction
                }
            });

            if (error) throw error;

            return {
                text: data?.text || '',
                raw: data
            };
        } catch (error) {
            console.error('AI Chat Error:', error);
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
            const { data, error } = await supabase.functions.invoke('transcribe-audio', {
                body: { audio: base64Audio }
            });

            if (error) throw error;

            return data?.text || '';
        } catch (error) {
            console.error('Audio Transcription Error:', error);
            throw error;
        }
    }
};
