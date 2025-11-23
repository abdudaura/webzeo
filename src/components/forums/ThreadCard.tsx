import React from 'react';
import { ThumbsUp, MessageCircle, Share2, Clock } from 'lucide-react';

interface ThreadCardProps {
    id: string;
    title: string;
    author: string;
    category: string;
    preview: string;
    likes: number;
    comments: number;
    timeAgo: string;
    isTrending?: boolean;
    onClick: () => void;
}

export const ThreadCard: React.FC<ThreadCardProps> = ({
    title,
    author,
    category,
    preview,
    likes,
    comments,
    timeAgo,
    isTrending,
    onClick
}) => {
    return (
        <div
            onClick={onClick}
            className="bg-white p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
        >
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${category === 'Announcements' ? 'bg-blue-100 text-blue-700' :
                        category === 'Success Stories' ? 'bg-green-100 text-green-700' :
                            'bg-gray-100 text-gray-600'
                        }`}>
                        {category}
                    </span>
                    {isTrending && (
                        <span className="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-700 font-medium flex items-center gap-1">
                            🔥 Trending
                        </span>
                    )}
                </div>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock size={12} />
                    {timeAgo}
                </span>
            </div>

            <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">{title}</h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{preview}</p>

            <div className="flex items-center justify-between text-gray-500 text-xs">
                <span className="font-medium text-gray-700">@{author}</span>

                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 hover:text-green-600 transition-colors">
                        <ThumbsUp size={14} />
                        <span>{likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                        <MessageCircle size={14} />
                        <span>{comments}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-gray-800 transition-colors">
                        <Share2 size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};
