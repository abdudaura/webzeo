import React, { useState } from 'react';
import { ThreadCard } from '../../components/forums/ThreadCard';
import { NewsDetail } from './NewsDetail';

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
        content: "After months of advocacy through CEDDERT, the community borehole project in Unguwar Rimi has been successfully completed. This project will provide clean water access to over 5,000 residents. Special thanks to all community members who participated in the verification process and the local government for acting on our verified reports.",
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
        content: "We have received multiple verified reports of suspicious activity along the Kaduna-Abuja expressway near Jere. Local security agencies have been notified. We strongly advise travelers to postpone non-essential trips until tomorrow morning. Stay safe and stay informed.",
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
        content: "With upcoming elections, it's important to know how to safely document and report electoral malpractice. CEDDERT provides encrypted reporting tools that protect your identity. Use the AI journalist feature to report incidents, take photos/videos discreetly, and never confront perpetrators directly. Your safety comes first.",
        likes: 56,
        comments: 23,
        timeAgo: "6h ago",
        isTrending: false
    },
];

export const NewsTab: React.FC<NewsTabProps> = ({ onSelect, searchQuery = '' }) => {
    const [selectedNews, setSelectedNews] = useState<typeof MOCK_NEWS[0] | null>(null);

    const filteredNews = MOCK_NEWS.filter(news =>
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.preview.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedNews) {
        return <NewsDetail news={selectedNews} onBack={() => setSelectedNews(null)} />;
    }

    return (
        <div className="divide-y divide-gray-100 overflow-y-auto h-full">
            {filteredNews.map((news) => (
                <ThreadCard
                    key={news.id}
                    {...news}
                    onClick={() => {
                        setSelectedNews(news);
                        onSelect?.();
                    }}
                />
            ))}
        </div>
    );
};

export default NewsTab;