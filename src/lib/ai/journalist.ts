import { securityPrompts } from './prompts/security'
import { corruptionPrompts } from './prompts/corruption'
import { humanRightsPrompts } from './prompts/humanRights'
import { healthcarePrompts } from './prompts/healthcare'
import { educationPrompts } from './prompts/education'
import { womenRightsPrompts } from './prompts/womenRights'
import { childRightsPrompts } from './prompts/childRights'
import { electoralPrompts } from './prompts/electoral'
import { infrastructurePrompts } from './prompts/infrastructure'
import { utilitiesPrompts } from './prompts/utilities'
import { agriculturePrompts } from './prompts/agriculture'
import { environmentPrompts } from './prompts/environment'
import { housingPrompts } from './prompts/housing'
import { laborPrompts } from './prompts/labor'
import { judicialPrompts } from './prompts/judicial'
import { pressPrompts } from './prompts/press'
import { digitalPrompts } from './prompts/digital'
import { validationPrompts } from './prompts/validation'

export interface MessageContext {
    category: string
    history: { role: 'user' | 'assistant', content: string }[]
    language: 'en' | 'ha'
}

export interface AIResponse {
    message: string
    options?: string[]
}

interface Question {
    id: string
    text: string
    type?: 'text' | 'options'
    options?: string[]
}

interface SubCategory {
    id: string
    label: string
    description: string
}

interface CategoryPrompt {
    category: string
    introduction: string
    initialOptions: string[]
    subCategories: SubCategory[]
    questions: Record<string, Question[]>
}

import { geminiService } from './gemini';

// ... (keep imports)

// ... (keep interfaces)

export const generateResponse = async (context: MessageContext): Promise<AIResponse> => {
    const promptData = getCategoryPrompt(context.category) as CategoryPrompt;

    // Construct system instruction
    const systemInstruction = `
        You are the CEDDERT AI Journalist. Your goal is to help users report ${context.category} incidents in Nigeria.
        
        Context:
        ${promptData.introduction}
        
        Available Subcategories:
        ${promptData.subCategories?.map(s => `- ${s.label}: ${s.description}`).join('\n')}
        
        Instructions:
        1. Be empathetic and professional.
        2. Guide the user to provide specific details (Who, What, Where, When).
        3. If the user's input matches a subcategory, ask the relevant questions for that subcategory.
        4. If the user speaks Hausa, reply in Hausa (or English if requested).
        5. ALWAYS return your response in JSON format with the following structure:
        {
            "message": "Your response text here",
            "options": ["Option 1", "Option 2"]
        }
        6. The "options" array should suggest 2-4 likely next responses for the user.
    `;

    // Convert history to Gemini format
    const history = context.history.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user' as 'model' | 'user',
        parts: [{ text: msg.content }]
    }));

    try {
        const response = await geminiService.generateContent(history, systemInstruction);

        // Parse JSON response
        // Gemini might wrap JSON in markdown code blocks, strip them
        const cleanText = response.text.replace(/```json/g, '').replace(/```/g, '').trim();

        try {
            const parsed = JSON.parse(cleanText);
            return {
                message: parsed.message || response.text,
                options: parsed.options || []
            };
        } catch (e) {
            // Fallback if JSON parsing fails
            console.warn('Failed to parse Gemini JSON response', e);
            return {
                message: response.text,
                options: ["Continue", "End Chat"]
            };
        }
    } catch (error) {
        console.error('Gemini Service Error:', error);
        return {
            message: "I'm having trouble connecting to my servers. Please try again later.",
            options: ["Retry"]
        };
    }
}

const getCategoryPrompt = (category: string) => {
    switch (category) {
        case 'security': return securityPrompts
        case 'corruption': return corruptionPrompts
        case 'human-rights': return humanRightsPrompts
        case 'healthcare': return healthcarePrompts
        case 'education': return educationPrompts
        case 'women-rights': return womenRightsPrompts
        case 'child-rights': return childRightsPrompts
        case 'electoral': return electoralPrompts
        case 'infrastructure': return infrastructurePrompts
        case 'utilities': return utilitiesPrompts
        case 'agriculture': return agriculturePrompts
        case 'environment': return environmentPrompts
        case 'housing': return housingPrompts
        case 'labor': return laborPrompts
        case 'judicial': return judicialPrompts
        case 'press': return pressPrompts
        case 'digital': return digitalPrompts
        case 'validation': return validationPrompts
        default: return {
            category: 'general',
            introduction: "I am the CEDDERT AI Journalist. How can I help you today?",
            initialOptions: ["Report an Incident", "Ask for Help"],
            subCategories: [],
            questions: {}
        }
    }
}
