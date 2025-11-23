import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import ChatListPanel from '../chat/ChatListPanel'
import MobileNav from './MobileNav'
import { useState } from 'react'

const MainLayout = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
    const [showChatList, setShowChatList] = useState(true)

    return (
        <div className="flex flex-col h-screen bg-gray-100 overflow-hidden">
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar - Collapsible on desktop, hidden on mobile */}
                <div className={`hidden lg:flex flex-col border-r border-gray-200 bg-white transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-60'}`}>
                    <Sidebar
                        collapsed={sidebarCollapsed}
                        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
                    />
                </div>

                {/* Chat List Panel - WhatsApp style */}
                <div className={`${showChatList ? 'flex' : 'hidden md:flex'} w-full md:w-[400px] flex-col border-r border-gray-200 bg-white`}>
                    <ChatListPanel onChatSelect={() => setShowChatList(false)} />
                </div>

                {/* Main Chat Interface Area */}
                <div className={`${showChatList ? 'hidden md:flex' : 'flex'} flex-1 flex-col relative bg-chat-pattern bg-repeat bg-[#efe7dd]`}>
                    <Outlet context={{ onBack: () => setShowChatList(true) }} />
                </div>
            </div>

            {/* Mobile Navigation - Fixed at bottom */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
                <MobileNav />
            </div>
        </div>
    )
}

export default MainLayout
