import { MessageSquare, Phone, Users, CircleDashed } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const MobileNav = () => {
    const location = useLocation()

    const isActive = (path: string) => location.pathname === path

    const navItems = [
        { icon: MessageSquare, label: 'Chats', path: '/' },
        { icon: Users, label: 'Forums', path: '/forums' },
        { icon: CircleDashed, label: 'Impact', path: '/impact' },
        { icon: Phone, label: 'Emergency', path: '/emergency' },
    ]

    return (
        <div className="flex justify-around items-center h-16 pb-safe">
            {navItems.map(({ icon: Icon, label, path }) => (
                <Link
                    key={path}
                    to={path}
                    className={`flex flex-col items-center gap-1 px-4 py-2 ${isActive(path) ? 'text-brand-primary' : 'text-gray-500'
                        }`}
                >
                    <Icon className={`w-6 h-6 ${isActive(path) ? 'fill-current' : ''}`} />
                    <span className="text-xs font-medium">{label}</span>
                </Link>
            ))}
        </div>
    )
}

export default MobileNav
