import { Outlet } from 'react-router-dom'
import ChatListPanel from '../chat/ChatListPanel'
import { useState } from 'react'

const ChatLayout = () => {
    const [showChatList, setShowChatList] = useState(true)

    return (
        <div className="flex h-full overflow-hidden">
            {/* Chat List Panel - WhatsApp style */}
            <div className={`${showChatList ? 'flex' : 'hidden md:flex'} w-full md:w-[400px] flex-col border-r border-gray-200 bg-white`}>
                <ChatListPanel onChatSelect={() => setShowChatList(false)} />
            </div>

            {/* Main Chat Interface Area */}
            <div className={`${showChatList ? 'hidden md:flex' : 'flex'} flex-1 flex-col relative bg-[#efe7dd]`}>
                <Outlet context={{ onBack: () => setShowChatList(true) }} />
            </div>
        </div>
    )
}

export default ChatLayout
