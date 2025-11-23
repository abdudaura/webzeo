import { MoreVertical, Search, Paperclip, Mic } from 'lucide-react'

const ChatWindow = () => {
    return (
        <div className="flex flex-col h-full bg-[#efe7dd] bg-chat-pattern">
            {/* Chat Header */}
            <div className="h-16 bg-gray-100 flex items-center justify-between px-4 border-b border-gray-200 shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div>
                        <h3 className="font-medium text-gray-900">User Name</h3>
                        <span className="text-xs text-gray-500">online</span>
                    </div>
                </div>
                <div className="flex gap-6 text-gray-500">
                    <Search className="w-6 h-6 cursor-pointer" />
                    <MoreVertical className="w-6 h-6 cursor-pointer" />
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Incoming Message */}
                <div className="flex justify-start">
                    <div className="bg-white rounded-lg p-3 max-w-[70%] shadow-sm relative">
                        <p className="text-sm text-gray-900">Hello! How can I help you today?</p>
                        <span className="text-[10px] text-gray-500 block text-right mt-1">12:00 PM</span>
                    </div>
                </div>

                {/* Outgoing Message */}
                <div className="flex justify-end">
                    <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[70%] shadow-sm relative">
                        <p className="text-sm text-gray-900">I want to report an issue in my community.</p>
                        <span className="text-[10px] text-gray-500 block text-right mt-1">12:01 PM</span>
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="bg-gray-100 p-3 flex items-center gap-4 shrink-0">
                <Paperclip className="w-6 h-6 text-gray-500 cursor-pointer" />
                <div className="flex-1 bg-white rounded-lg px-4 py-2">
                    <input
                        type="text"
                        placeholder="Type a message"
                        className="w-full bg-transparent focus:outline-none text-sm"
                    />
                </div>
                <Mic className="w-6 h-6 text-gray-500 cursor-pointer" />
            </div>
        </div>
    )
}

export default ChatWindow
