import React from 'react';
import { ThreadCard } from '../../components/forums/ThreadCard';

// Mock data for now
const MOCK_THREADS = [
    {
        id: '1',
        title: "Community Borehole Project Completed!",
        author: "Musa_K",
        category: "Success Stories",
        preview: "Thanks to everyone who contributed and the CEDDERT team for amplifying our voice. The borehole in Unguwar Rimi is now functional.",
        likes: 124,
        comments: 45,
        timeAgo: "2h ago",
        isTrending: true
    },
    {
        id: '2',
        title: "Safety Alert: Avoid Kaduna-Abuja Road tonight",
        author: "Security_Watch",
        category: "Safety Tips",
        preview: "Credible reports of suspicious activity near Jere. Please stay safe and delay travel if possible.",
        likes: 89,
        comments: 12,
        timeAgo: "4h ago",
        isTrending: true
    },
    {
        id: '3',
        title: "How to report election malpractice anonymously?",
        author: "Concerned_Citizen",
        category: "Discussions",
        preview: "I want to know the best way to document evidence without getting caught. Any tips?",
        likes: 56,
        comments: 23,
        timeAgo: "6h ago",
        isTrending: false
    },
    {
        id: '4',
        title: "New Volunteer Opportunities in Kano",
        author: "CEDDERT_Official",
        category: "Announcements",
        preview: "We are looking for 50 new volunteers to help with the upcoming sensitization campaign.",
        likes: 210,
        comments: 8,
        timeAgo: "1d ago",
        isTrending: false
    }
];

interface ThreadListProps {
    categoryFilter?: string;
    onThreadClick?: (id: string) => void;
}

export const ThreadList: React.FC<ThreadListProps> = ({ categoryFilter, onThreadClick }) => {
    const filteredThreads = categoryFilter && categoryFilter !== 'All'
        ? MOCK_THREADS.filter(t => t.category === categoryFilter)
        : MOCK_THREADS;

    return (
        <div className="flex flex-col bg-gray-50 h-full overflow-y-auto">
            {filteredThreads.map(thread => (
                <ThreadCard
                    key={thread.id}
                    {...thread}
                    onClick={() => onThreadClick?.(thread.id)}
                />
            ))}

            <div className="p-8 text-center text-gray-500 text-sm">
                <p>End of discussions</p>
            </div>
        </div>
    );
};
