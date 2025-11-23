import { LogOut, Menu, X, Home, FileText, Users, BarChart2, Shield } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { hasPermission } from '../../lib/permissions'
import { NotificationCenter } from '../notifications/NotificationCenter'
import { useNavigate, useLocation } from 'react-router-dom'

interface SidebarProps {
    collapsed: boolean
    onToggle: () => void
}

const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
    const { signOut, userRole } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const menuItems = [
        { icon: Home, label: 'Chats', path: '/' },
        { icon: FileText, label: 'Forums', path: '/forums' },
        { icon: Users, label: 'Impact', path: '/impact' },
        { icon: BarChart2, label: 'Events', path: '/events' },
        { icon: Shield, label: 'Resources', path: '/resources' },
    ]

    if (hasPermission(userRole, 'view_analytics')) {
        menuItems.push({ icon: BarChart2, label: 'Analytics', path: '/analytics' })
    }

    if (hasPermission(userRole, 'approve_volunteer')) {
        menuItems.push({ icon: Shield, label: 'Volunteers', path: '/volunteers' })
    }

    return (
        <div className="flex flex-col h-full">
            <div className="p-4 flex items-center justify-between border-b border-gray-100">
                {!collapsed && <span className="font-bold text-xl text-green-600">CEDDERT</span>}
                <button onClick={onToggle} className="p-2 hover:bg-gray-100 rounded-lg">
                    {collapsed ? <Menu size={20} /> : <X size={20} />}
                </button>
            </div>

            <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
                {menuItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => navigate(item.path)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${location.pathname === item.path
                                ? 'bg-green-50 text-green-700 font-medium'
                                : 'hover:bg-gray-50 text-gray-700'
                            } ${collapsed ? 'justify-center' : ''}`}
                    >
                        <item.icon size={20} />
                        {!collapsed && <span>{item.label}</span>}
                    </button>
                ))}
            </nav>

            <div className="p-2 border-t border-gray-100 space-y-1">
                <div className={`w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors ${collapsed ? 'justify-center' : ''}`}>
                    <NotificationCenter />
                    {!collapsed && <span className="font-medium">Notifications</span>}
                </div>

                <button
                    onClick={signOut}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 text-red-600 transition-colors ${collapsed ? 'justify-center' : ''}`}
                >
                    <LogOut size={20} />
                    {!collapsed && <span className="font-medium">Logout</span>}
                </button>
            </div>
        </div>
    )
}

export default Sidebar
