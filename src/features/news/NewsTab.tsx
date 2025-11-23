import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreadCard } from '../../components/forums/ThreadCard';

interface NewsTabProps {
    onSelect?: () => void;
    searchQuery?: string;
}

const MOCK_NEWS = [
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
];

export const NewsTab: React.FC<NewsTabProps> = ({ onSelect, searchQuery = '' }) => {
    const navigate = useNavigate();

    const filteredNews = MOCK_NEWS.filter(news =>
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.preview.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleNewsClick = (id: string) => {
        navigate('/forums');
        onSelect?.();
    };

    return (
        <div className="divide-y divide-gray-100 overflow-y-auto h-full">
            {filteredNews.map((news) => (
                <ThreadCard
                    key={news.id}
                    {...news}
                    onClick={() => handleNewsClick(news.id)}
                />
            ))}
        </div>
    );
};

export default NewsTab;