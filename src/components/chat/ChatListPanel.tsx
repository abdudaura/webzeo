import { useState } from 'react'
import { Search, Plus } from 'lucide-react'
import { useLanguage } from '../../lib/i18n/LanguageContext'
import ReportCategoriesTab from '../../features/reports/ReportCategoriesTab'
import StatesTab from '../../features/reports/StatesTab'
import NewsTab from '../../features/news/NewsTab'

interface ChatListPanelProps {
    onChatSelect?: () => void
}

type TabType = 'report' | 'states' | 'news'

const ChatListPanel = ({ onChatSelect }: ChatListPanelProps) => {
    const { t, language, setLanguage } = useLanguage()
    const [activeTab, setActiveTab] = useState<TabType>('report')
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="bg-brand-primary text-white p-4 flex items-center justify-between">
                <h1 className="text-xl font-semibold">{t('app.title')}</h1>
                <div className="flex items-center gap-3">
                    {/* Language Toggle */}
                    <button
                        onClick={() => setLanguage(language === 'en' ? 'ha' : 'en')}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium hover:bg-white/30 transition"
                    >
                        {language.toUpperCase()}
                    </button>
                    {/* New Report Button */}
                    <button className="p-2 hover:bg-white/20 rounded-full transition">
                        <Plus className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Search Bar */}
            <div className="p-3 bg-gray-50 border-b border-gray-200">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                    />
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 bg-white">
                <button
                    onClick={() => setActiveTab('report')}
                    className={`flex-1 py-3 text-sm font-medium transition ${activeTab === 'report'
                        ? 'text-brand-primary border-b-2 border-brand-primary'
                        : 'text-gray-600 hover:text-gray-900'
                        }`}
                >
                    Report
                </button>
                <button
                    onClick={() => setActiveTab('states')}
                    className={`flex-1 py-3 text-sm font-medium transition ${activeTab === 'states'
                        ? 'text-brand-primary border-b-2 border-brand-primary'
                        : 'text-gray-600 hover:text-gray-900'
                        }`}
                >
                    States
                </button>
                <button
                    onClick={() => setActiveTab('news')}
                    className={`flex-1 py-3 text-sm font-medium transition ${activeTab === 'news'
                        ? 'text-brand-primary border-b-2 border-brand-primary'
                        : 'text-gray-600 hover:text-gray-900'
                        }`}
                >
                    News
                </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto">
                {activeTab === 'report' && <ReportCategoriesTab onSelect={onChatSelect} searchQuery={searchQuery} />}
                {activeTab === 'states' && <StatesTab onSelect={onChatSelect} searchQuery={searchQuery} />}
                {activeTab === 'news' && <NewsTab onSelect={onChatSelect} searchQuery={searchQuery} />}
            </div>
        </div>
    )
}

export default ChatListPanel
