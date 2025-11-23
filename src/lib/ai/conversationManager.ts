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
    conversations: Record<string, Message[]>
    activeCategory: string | null
    messages: Message[]
    addMessage: (message: Omit<Message, 'id'>) => void
    setMessages: (messages: Message[]) => void
    setCategory: (category: string) => void
    clearConversation: (category: string) => void
    startRecording: () => Promise<void>
    stopRecording: () => Promise<Blob>
    isVoiceRecording: boolean
    audioBlob: Blob | null
}

export const useConversationStore = create<ConversationState>()(
    persist(
        (set, get) => ({
            conversations: {},
            activeCategory: null,
            messages: [],
            isVoiceRecording: false,
            audioBlob: null,
            
            addMessage: (message) => {
                const { activeCategory } = get()
                if (!activeCategory) return
                
                const newMessage = { 
                    ...message, 
                    id: Date.now().toString() + Math.random() 
                }
                
                set((state) => {
                    const categoryMessages = state.conversations[activeCategory] || []
                    return {
                        conversations: {
                            ...state.conversations,
                            [activeCategory]: [...categoryMessages, newMessage],
                        },
                        messages: [...categoryMessages, newMessage]
                    }
                })
            },
            
            setMessages: (messages) => {
                const { activeCategory } = get()
                if (!activeCategory) return
                
                set((state) => ({
                    conversations: {
                        ...state.conversations,
                        [activeCategory]: messages,
                    },
                    messages
                }))
            },
            
            setCategory: (category) => {
                set((state) => ({
                    activeCategory: category,
                    messages: state.conversations[category] || []
                }))
            },
            
            clearConversation: (category) =>
                set((state) => ({
                    conversations: {
                        ...state.conversations,
                        [category]: [],
                    },
                    messages: state.activeCategory === category ? [] : state.messages
                })),
            
            startRecording: async () => {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
                const mediaRecorder = new MediaRecorder(stream)
                const chunks: BlobPart[] = []
                
                mediaRecorder.ondataavailable = (e) => chunks.push(e.data)
                mediaRecorder.onstop = () => {
                    const blob = new Blob(chunks, { type: 'audio/webm' })
                    set({ audioBlob: blob, isVoiceRecording: false })
                }
                
                mediaRecorder.start()
                set({ isVoiceRecording: true })
                ;(window as any).__mediaRecorder = mediaRecorder
            },
            
            stopRecording: async () => {
                const recorder = (window as any).__mediaRecorder
                if (recorder && recorder.state !== 'inactive') {
                    recorder.stop()
                    recorder.stream.getTracks().forEach((track: MediaStreamTrack) => track.stop())
                }
                
                return new Promise<Blob>((resolve) => {
                    const checkBlob = setInterval(() => {
                        const { audioBlob } = get()
                        if (audioBlob) {
                            clearInterval(checkBlob)
                            resolve(audioBlob)
                            set({ audioBlob: null })
                        }
                    }, 100)
                })
            },
        }),
        {
            name: 'ceddert-conversations',
        }
    )
)
