import React, { useState } from 'react';
import { ThreadList } from './ThreadList';
import { CreateThreadModal } from './CreateThreadModal';
import { ThreadDetail } from './ThreadDetail';
import { Plus, Search, Filter } from 'lucide-react';

export const ForumLayout: React.FC = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [selectedThreadId, setSelectedThreadId] = useState<string | null>(null);

    const tabs = ['All', 'Announcements', 'Success Stories', 'Safety Tips', 'Discussions'];

    const handleThreadClick = (id: string) => {
        setSelectedThreadId(id);
    };

    const handleCreateSubmit = (data: any) => {
        console.log('New thread:', data);
        // In real app, would add to list here
    };

    // Mock data for detail view (in real app, fetch by ID)
    const mockThreadDetail = {
        id: selectedThreadId || '1',
        title: "Community Borehole Project Completed!",
        author: "Musa_K",
        category: "Success Stories",
        content: "I am happy to report that the borehole project in Unguwar Rimi has been successfully completed. This was made possible by the collective effort of the community and the support from CEDDERT in amplifying our voice. \n\nWe now have clean running water for over 500 households. This is a big win for us! Let's continue to work together for more developments.",
        likes: 124,
        comments: 45,
        timeAgo: "2h ago"
    };

    if (selectedThreadId) {
        return (
            <ThreadDetail
                thread={mockThreadDetail}
                onBack={() => setSelectedThreadId(null)}
            />
        );
    }

    return (
        <div className="flex flex-col h-full bg-gray-100 relative">
            {/* Forum Header */}
            <div className="bg-white p-4 border-b border-gray-200 shadow-sm z-10">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-gray-800">Community Forum</h1>
                    <button
                        onClick={() => setIsCreateModalOpen(true)}
                        className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-green-700 transition-colors shadow-sm"
                    >
                        <Plus size={18} />
                        New Post
                    </button>
                </div>

                {/* Search and Filter */}
                <div className="flex gap-2 mb-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search discussions..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-green-500 outline-none"
                        />
                    </div>
                    <button className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200">
                        <Filter size={20} />
                    </button>
                </div>

                {/* Categories */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${activeTab === tab
                                    ? 'bg-green-100 text-green-700 border border-green-200'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Thread List Area */}
            <div className="flex-1 overflow-hidden relative">
                <ThreadList
                    categoryFilter={activeTab}
                    onThreadClick={handleThreadClick}
                />

                {/* Floating Action Button for Mobile */}
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="absolute bottom-6 right-6 w-14 h-14 bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center md:hidden hover:bg-green-700 transition-colors z-20"
                >
                    <Plus size={24} />
                </button>
            </div>

            <CreateThreadModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onSubmit={handleCreateSubmit}
            />
        </div>
    );
};
