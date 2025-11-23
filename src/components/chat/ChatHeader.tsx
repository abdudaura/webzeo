import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ChatHeaderProps {
    title: string;
    subtitle?: string;
    onBack?: () => void;
    showBackButton?: boolean;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
    title,
    subtitle = 'Online',
    onBack,
    showBackButton = false
}) => {
    return (
        <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-4 sticky top-0 z-10">
            {showBackButton && (
                <button onClick={onBack} className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
            )}
            <div className="flex-1">
                <h2 className="font-semibold text-gray-900">{title}</h2>
                <p className="text-sm text-gray-500">{subtitle}</p>
            </div>
        </div>
    );
};
