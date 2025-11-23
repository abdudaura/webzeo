interface Message {
    id: string
    role: 'user' | 'assistant'
    content: string
    timestamp: Date
    options?: string[]
}

interface MessageBubbleProps {
    message: Message
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
    const isUser = message.role === 'user'

    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div
                className={`max-w-[70%] rounded-lg p-3 shadow-sm ${isUser
                        ? 'bg-chat-outgoing text-gray-900'
                        : 'bg-chat-incoming text-gray-900'
                    }`}
            >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                <p className="text-xs text-gray-500 mt-1 text-right">
                    {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </p>
            </div>
        </div>
    )
}

export default MessageBubble
