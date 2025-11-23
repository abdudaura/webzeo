import React from 'react';
import { Paperclip, Mic, Square, Send } from 'lucide-react';

interface ChatInputProps {
    value: string;
    onChange: (value: string) => void;
    onSend: () => void;
    onRecordToggle: () => void;
    isRecording: boolean;
    placeholder?: string;
    disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
    value,
    onChange,
    onSend,
    onRecordToggle,
    isRecording,
    placeholder = "Type your message...",
    disabled = false
}) => {
    return (
        <div className="bg-white border-t border-gray-200 p-4 sticky bottom-0">
            <div className="flex items-center gap-2">
                <button
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    disabled={disabled}
                >
                    <Paperclip className="w-5 h-5 text-gray-600" />
                </button>

                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !disabled && value.trim() && onSend()}
                    placeholder={isRecording ? "Recording..." : placeholder}
                    disabled={disabled || isRecording}
                    className={`flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${isRecording ? 'bg-red-50 border-red-200 text-red-600' : 'border-gray-300'
                        }`}
                />

                <button
                    onClick={onRecordToggle}
                    disabled={disabled}
                    className={`p-2 rounded-full transition-all ${isRecording
                            ? 'bg-red-100 text-red-600 animate-pulse'
                            : 'hover:bg-gray-100 text-gray-600'
                        }`}
                >
                    {isRecording ? <Square className="w-5 h-5 fill-current" /> : <Mic className="w-5 h-5" />}
                </button>

                <button
                    onClick={onSend}
                    disabled={!value.trim() || isRecording || disabled}
                    className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                >
                    <Send className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};
