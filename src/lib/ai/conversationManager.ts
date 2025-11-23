import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Message {
    id: string
    role: 'user' | 'assistant'
    content: string
    timestamp: Date
    options?: string[]
}

interface ConversationState {
    conversations: Record<string, Message[]> // Keyed by category
    activeCategory: string | null
    addMessage: (category: string, message: Message) => void
    setMessages: (category: string, messages: Message[]) => void
    setActiveCategory: (category: string) => void
    clearConversation: (category: string) => void
}

export const useConversationStore = create<ConversationState>()(
    persist(
        (set) => ({
            conversations: {},
            activeCategory: null,
            addMessage: (category, message) =>
                set((state) => ({
                    conversations: {
                        ...state.conversations,
                        [category]: [...(state.conversations[category] || []), message],
                    },
                })),
            setMessages: (category, messages) =>
                set((state) => ({
                    conversations: {
                        ...state.conversations,
                        [category]: messages,
                    },
                })),
            setActiveCategory: (category) => set({ activeCategory: category }),
            clearConversation: (category) =>
                set((state) => ({
                    conversations: {
                        ...state.conversations,
                        [category]: [],
                    },
                })),
        }),
        {
            name: 'ceddert-conversations',
        }
    )
)
