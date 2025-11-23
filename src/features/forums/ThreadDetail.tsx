import React, { useState } from 'react';
import { ArrowLeft, ThumbsUp, MessageCircle, Share2, Send, MoreVertical } from 'lucide-react';

interface Comment {
    id: string;
    author: string;
    content: string;
    timeAgo: string;
    likes: number;
}

interface ThreadDetailProps {
    thread: {
        id: string;
        title: string;
        author: string;
        category: string;
        content: string;
        likes: number;
        comments: number;
        timeAgo: string;
    };
    onBack: () => void;
}

const MOCK_COMMENTS: Comment[] = [
    { id: '1', author: 'Fatima_A', content: 'This is great news! We need more of this.', timeAgo: '1h ago', likes: 12 },
    { id: '2', author: 'Ibrahim_S', content: 'Can we get the contact of the contractor?', timeAgo: '45m ago', likes: 5 },
    { id: '3', author: 'Zainab_M', content: 'Well done to the community leaders.', timeAgo: '10m ago', likes: 2 },
];

export const ThreadDetail: React.FC<ThreadDetailProps> = ({ thread, onBack }) => {
    const [newComment, setNewComment] = useState('');

    return (
        <div className="flex flex-col h-full bg-white animate-in slide-in-from-right duration-200">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-100 sticky top-0 bg-white z-10">
                <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ArrowLeft size={20} className="text-gray-600" />
                </button>
                <div className="flex-1">
                    <h2 className="font-bold text-gray-800 text-lg line-clamp-1">Thread</h2>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <MoreVertical size={20} className="text-gray-500" />
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
                {/* Main Post */}
                <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                            {thread.author[0]}
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-sm">@{thread.author}</p>
                            <p className="text-xs text-gray-500">{thread.timeAgo} • {thread.category}</p>
                        </div>
                    </div>

                    <h1 className="text-xl font-bold text-gray-900 mb-2">{thread.title}</h1>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap mb-4">
                        {thread.content}
                    </p>

                    <div className="flex items-center gap-6 py-2 border-t border-gray-50">
                        <button className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors">
                            <ThumbsUp size={18} />
                            <span className="text-sm font-medium">{thread.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
                            <MessageCircle size={18} />
                            <span className="text-sm font-medium">{thread.comments}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors">
                            <Share2 size={18} />
                        </button>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="bg-gray-50 min-h-full pb-20">
                    <div className="p-4 text-sm font-bold text-gray-500 uppercase tracking-wider">
                        Comments
                    </div>
                    {MOCK_COMMENTS.map(comment => (
                        <div key={comment.id} className="p-4 bg-white border-b border-gray-100">
                            <div className="flex justify-between items-start mb-1">
                                <span className="font-bold text-sm text-gray-900">@{comment.author}</span>
                                <span className="text-xs text-gray-400">{comment.timeAgo}</span>
                            </div>
                            <p className="text-gray-700 text-sm mb-2">{comment.content}</p>
                            <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-green-600 transition-colors">
                                <ThumbsUp size={12} />
                                <span>{comment.likes}</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Comment Input */}
            <div className="p-3 border-t border-gray-200 bg-white sticky bottom-0">
                <div className="flex gap-2 items-center bg-gray-100 rounded-full px-4 py-2">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Write a comment..."
                        className="flex-1 bg-transparent border-none focus:ring-0 text-sm outline-none"
                    />
                    <button
                        disabled={!newComment.trim()}
                        className={`p-2 rounded-full transition-colors ${newComment.trim() ? 'text-green-600 hover:bg-green-50' : 'text-gray-400'
                            }`}
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};
