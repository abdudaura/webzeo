import React from 'react'
import { MapPin, Clock, ThumbsUp, MessageSquare } from 'lucide-react'

export interface ReportCardProps {
    id: string
    title: string
    description: string
    category: string
    location: string
    timestamp: string
    votes: number
    comments: number
    urgency: 'low' | 'medium' | 'high' | 'critical'
    status: 'pending' | 'investigating' | 'resolved'
    onClick?: () => void
    onVote?: (id: string, type: 'up' | 'down') => void
}

const ReportCard = ({
    id,
    title,
    description,
    location,
    timestamp,
    votes,
    comments,
    urgency,
    status,
    onClick,
    onVote
}: ReportCardProps) => {
    const getUrgencyColor = (level: string) => {
        switch (level) {
            case 'critical': return 'bg-red-100 text-red-700 border-red-200'
            case 'high': return 'bg-orange-100 text-orange-700 border-orange-200'
            case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
            default: return 'bg-gray-100 text-gray-700 border-gray-200'
        }
    }

    const getStatusColor = (s: string) => {
        switch (s) {
            case 'resolved': return 'bg-green-100 text-green-700'
            case 'investigating': return 'bg-blue-100 text-blue-700'
            default: return 'bg-gray-100 text-gray-600'
        }
    }

    const handleVote = (e: React.MouseEvent) => {
        e.stopPropagation()
        onVote?.(id, 'up')
    }

    return (
        <div
            onClick={onClick}
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer"
        >
            <div className="flex justify-between items-start mb-2">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getUrgencyColor(urgency)}`}>
                    {urgency.toUpperCase()}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(status)}`}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
            </div>

            <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{title}</h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>

            <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{location}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{timestamp}</span>
                </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                <div className="flex gap-4">
                    <button
                        onClick={handleVote}
                        className="flex items-center gap-1 text-gray-500 hover:text-brand-primary transition group"
                    >
                        <ThumbsUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-medium">{votes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-brand-primary transition">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-xs font-medium">{comments}</span>
                    </button>
                </div>
                <span className="text-xs text-brand-primary font-medium">View Details</span>
            </div>
        </div>
    )
}

export default ReportCard