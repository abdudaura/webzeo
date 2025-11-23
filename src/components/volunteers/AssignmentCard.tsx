import React from 'react'
import { MapPin, Calendar, AlertCircle } from 'lucide-react'

export interface AssignmentCardProps {
    id: string
    title: string
    location: string
    deadline: string
    priority: 'low' | 'medium' | 'high' | 'critical'
    status: 'pending' | 'in_progress' | 'completed'
    description: string
    onAccept?: () => void
    onComplete?: () => void
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({
    title,
    location,
    deadline,
    priority,
    status,
    description,
    onAccept,
    onComplete
}) => {
    const getPriorityColor = (p: string) => {
        switch (p) {
            case 'critical': return 'text-red-600 bg-red-50 border-red-100'
            case 'high': return 'text-orange-600 bg-orange-50 border-orange-100'
            default: return 'text-blue-600 bg-blue-50 border-blue-100'
        }
    }

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-3">
                <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getPriorityColor(priority)}`}>
                    {priority.toUpperCase()} PRIORITY
                </span>
                <span className="text-xs text-gray-500">
                    Due {deadline}
                </span>
            </div>

            <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{location}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Verification Task</span>
                </div>
            </div>

            <div className="flex gap-2">
                {status === 'pending' && (
                    <button
                        onClick={onAccept}
                        className="flex-1 py-2 bg-brand-primary text-white text-sm font-medium rounded-lg hover:bg-brand-dark transition"
                    >
                        Accept Assignment
                    </button>
                )}
                {status === 'in_progress' && (
                    <button
                        onClick={onComplete}
                        className="flex-1 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition"
                    >
                        Submit Report
                    </button>
                )}
                <button className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600">
                    <AlertCircle className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}

export default AssignmentCard