import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import MobileNav from './MobileNav'
import { useState } from 'react'

const MainLayout = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

    return (
        <div className="flex flex-col h-screen bg-background overflow-hidden">
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar - Collapsible on desktop, hidden on mobile */}
                <div className={`hidden lg:flex flex-col border-r border-border bg-white transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-60'}`}>
                    <Sidebar
                        collapsed={sidebarCollapsed}
                        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
                    />
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Outlet />
                </div>
            </div>

            {/* Mobile Navigation - Fixed at bottom */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
                <MobileNav />
            </div>
        </div>
    )
}

export default MainLayout
