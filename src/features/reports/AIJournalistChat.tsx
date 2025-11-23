import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useConversationStore } from '../../lib/ai/conversationManager'
import { generateResponse } from '../../lib/ai/journalist'
import MessageBubble from '../../components/chat/MessageBubble'
import OptionButtons from '../../components/chat/OptionButtons'
import { ChatHeader } from '../../components/chat/ChatHeader'
import { ChatInput } from '../../components/chat/ChatInput'
import { ConfirmationSummary } from '../../components/chat/ConfirmationSummary'
import { reportsApi } from '../../lib/api/reports'
import { geminiService } from '../../lib/ai/gemini'

const AIJournalistChat = () => {
    const { category } = useParams<{ category: string }>()
    const navigate = useNavigate()
    const {
        messages,
        addMessage,
        setCategory,
        clearConversation,
        startRecording,
        stopRecording,
        isVoiceRecording,
        audioBlob
    } = useConversationStore()

    const [inputValue, setInputValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isRecording, setIsRecording] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const [reportData, setReportData] = useState<any>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if (category) {
            setCategory(category)
            // Initial greeting if empty
            if (messages.length === 0) {
                handleAIResponse(true)
            }
        }
    }, [category])

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleAIResponse = async (isInitial = false) => {
        setIsLoading(true)
        try {
            const context = {
                category: category || 'general',
                history: messages,
                language: 'en' as 'en' | 'ha'
            }
            const response = await generateResponse(context)

            addMessage({
                role: 'assistant',
                content: response.message,
                options: response.options,
                timestamp: new Date()
            })

            // Check if we should generate a report summary based on conversation depth or specific triggers
            // For now, we'll rely on the user clicking "Review Report Details" option
            if (response.options?.includes('Review Report Details')) {
                // Pre-fill report data logic could go here if we wanted to auto-trigger
                // But we'll wait for user selection
            }

        } catch (error) {
            console.error("AI Error:", error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return

        addMessage({
            role: 'user',
            content: inputValue,
            timestamp: new Date()
        })
        setInputValue('')
        await handleAIResponse()
    }

    const handleOptionSelect = (option: string) => {
        if (option === 'Review Report Details') {
            // Trigger summary generation logic
            setReportData({
                title: "Incident Report",
                description: messages.filter(m => m.role === 'user').map(m => m.content).join('\n'),
                category: getCategoryName(category || ''),
                location: "Kaduna Central Market", // Mock extraction
                state: "Kaduna",
                lga: "Kaduna North"
            })
            return;
        }

        addMessage({
            role: 'user',
            content: option,
            timestamp: new Date()
        })
        handleAIResponse()
    }

    const handleSubmitReport = async () => {
        if (!reportData) return;
        setIsSubmitting(true);
        try {
            await reportsApi.submitReport(reportData);

            setReportData(null); // Clear summary
            addMessage({
                role: 'assistant',
                content: "✅ Report submitted successfully! Reference ID: #RPT-" + Math.floor(Math.random() * 10000) + ". You can track its status in the 'My Reports' section.",
                options: ['Submit Another Report', 'Go to Home'],
                timestamp: new Date()
            });
        } catch (error) {
            console.error("Submission error:", error);
            alert("Failed to submit report. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEditReport = () => {
        setReportData(null);
        addMessage({
            role: 'assistant',
            content: "What details would you like to change?",
            timestamp: new Date()
        });
    };

    const onBack = () => {
        navigate('/')
    }

    const toggleRecording = async () => {
        if (isRecording) {
            try {
                const audio = await stopRecording()
                setIsRecording(false)
                setIsLoading(true)

                try {
                    // Transcribe with Gemini
                    const transcription = await geminiService.transcribeAudio(audio);

                    addMessage({
                        role: 'user',
                        content: transcription || "[Audio Message]",
                        timestamp: new Date()
                    })

                    // Get AI response to the transcription
                    await handleAIResponse()
                } catch (error) {
                    console.error("Transcription failed", error);
                    addMessage({
                        role: 'user',
                        content: "Error processing audio message.",
                        timestamp: new Date()
                    })
                } finally {
                    setIsLoading(false)
                }

            } catch (err) {
                console.error("Failed to stop recording", err)
            }
        } else {
            try {
                await startRecording()
                setIsRecording(true)
            } catch (err) {
                console.error("Failed to start recording", err)
                alert("Could not access microphone")
            }
        }
    }

    const getCategoryName = (cat: string) => {
        const names: Record<string, string> = {
            'security': 'Security & Conflict',
            'corruption': 'Corruption & Fraud',
            'human-rights': 'Human Rights Violations',
            'healthcare': 'Healthcare',
            'education': 'Education',
            'infrastructure': 'Infrastructure',
            'utilities': 'Utilities',
            'agriculture': 'Agriculture',
            'environment': 'Environment',
            'electoral': 'Electoral Malpractice',
            'child-rights': 'Child Rights',
            'women-rights': 'Women\'s Rights',
            'housing': 'Housing',
            'labor': 'Labor',
            'judicial': 'Judicial Misconduct',
            'press': 'Press Freedom',
            'digital': 'Digital Rights'
        }
        return names[cat] || cat || 'General'
    }

    return (
        <div className="flex flex-col h-full bg-gray-50">
            <ChatHeader
                title={getCategoryName(category || '')}
                subtitle="AI Journalist • Online"
                onBack={onBack}
                showBackButton={true}
            />

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div key={message.id}>
                        <MessageBubble message={message} />
                        {message.options && message.role === 'assistant' && !reportData && (
                            <OptionButtons options={message.options} onSelect={handleOptionSelect} />
                        )}
                    </div>
                ))}

                {reportData && (
                    <ConfirmationSummary
                        data={reportData}
                        onConfirm={handleSubmitReport}
                        onEdit={handleEditReport}
                        isSubmitting={isSubmitting}
                    />
                )}

                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <div className="flex gap-2">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <ChatInput
                value={inputValue}
                onChange={setInputValue}
                onSend={handleSendMessage}
                onRecordToggle={toggleRecording}
                isRecording={isRecording}
                disabled={isLoading || !!reportData}
            />
        </div>
    )
}

export default AIJournalistChat