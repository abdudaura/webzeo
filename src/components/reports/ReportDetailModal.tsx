import React from 'react';
import { X, MapPin, Clock, Share2, Flag, MessageSquare } from 'lucide-react';
import { VotingButtons } from './VotingButtons';

interface ReportDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    report: {
        id: string;
        title: string;
        description: string;
        location: string;
        status: string;
        created_at: string;
        category: string;
        urgency: string;
        image_url?: string;
        votes?: number;
    };
}

export const ReportDetailModal: React.FC<ReportDetailModalProps> = ({ isOpen, onClose, report }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">

                {/* Header */}
                <div className="flex justify-between items-start p-4 border-b border-gray-100 sticky top-0 bg-white z-10">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${report.urgency === 'High' ? 'bg-red-100 text-red-700' :
                                    report.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-green-100 text-green-700'
                                }`}>
                                {report.urgency} Priority
                            </span>
                            <span className="text-gray-400 text-xs">•</span>
                            <span className="text-gray-500 text-xs font-medium">{report.category}</span>
                        </div>
                        <h2 className="font-bold text-xl text-gray-900">{report.title}</h2>
                    </div>
                    <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                        <X size={24} className="text-gray-500" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-0">
                    {report.image_url && (
                        <div className="w-full h-64 bg-gray-100">
                            <img
                                src={report.image_url}
                                alt="Report evidence"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <div className="p-6 flex gap-6">
                        {/* Left: Voting */}
                        <div className="pt-2">
                            <VotingButtons reportId={report.id} initialScore={report.votes} />
                        </div>

                        {/* Right: Details */}
                        <div className="flex-1 space-y-6">
                            <div>
                                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Description</h3>
                                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                    {report.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                                        <MapPin size={16} />
                                        <span className="text-xs font-medium uppercase">Location</span>
                                    </div>
                                    <p className="text-gray-900 font-medium">{report.location}</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                                        <Clock size={16} />
                                        <span className="text-xs font-medium uppercase">Time</span>
                                    </div>
                                    <p className="text-gray-900 font-medium">
                                        {new Date(report.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>

                            {/* Status Timeline (Mock) */}
                            <div>
                                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Status Timeline</h3>
                                <div className="space-y-4 border-l-2 border-gray-200 ml-2 pl-4">
                                    <div className="relative">
                                        <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-green-500 border-2 border-white ring-1 ring-gray-200"></div>
                                        <p className="text-sm font-medium text-gray-900">Report Submitted</p>
                                        <p className="text-xs text-gray-500">{new Date(report.created_at).toLocaleString()}</p>
                                    </div>
                                    {report.status === 'verified' && (
                                        <div className="relative">
                                            <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-white ring-1 ring-gray-200"></div>
                                            <p className="text-sm font-medium text-gray-900">Verified by Volunteer</p>
                                            <p className="text-xs text-gray-500">Pending review</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-between items-center rounded-b-xl">
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                            <MessageSquare size={16} />
                            Comments (0)
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                            <Share2 size={16} />
                            Share
                        </button>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors">
                        <Flag size={16} />
                        Report Abuse
                    </button>
                </div>
            </div>
        </div>
    );
};
