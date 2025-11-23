import React from 'react';
import { ForumLayout } from '../forums/ForumLayout';

interface NewsTabProps {
    onSelect?: () => void;
    searchQuery?: string;
}

export const NewsTab: React.FC<NewsTabProps> = ({ onSelect, searchQuery }) => {
    return (
        <div className="h-full w-full">
            <ForumLayout />
        </div>
    );
};

export default NewsTab;