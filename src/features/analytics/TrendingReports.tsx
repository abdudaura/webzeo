import React, { useEffect, useState } from 'react';
import { TrendingUp, MessageSquare, ThumbsUp, MapPin } from 'lucide-react';
import { analyticsApi } from '../../lib/api/analytics';
import { type Report } from '../../lib/api/reports';

export const TrendingReports = () => {
    const [reports, setReports] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadTrending();
    }, []);

    const loadTrending = async () => {
        try {
            const data = await analyticsApi.getTrendingReports(5);
            setReports(data);
        } catch (error) {
            console.error('Failed to load trending reports', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="p-4 text-center text-gray-500">Loading trending topics...</div>;

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-white flex items-center gap-2">
                <TrendingUp className="text-orange-500" size={20} />
                <h3 className="font-bold text-gray-900">Trending Now</h3>
            </div>

            <div className="divide-y divide-gray-100">
                {reports.map((report, index) => (
                    <div key={report.id} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="flex items-start gap-3">
                            <span className="text-2xl font-bold text-gray-200 leading-none">#{index + 1}</span>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-gray-900 truncate">{report.title}</h4>
                                <p className="text-sm text-gray-500 line-clamp-2 mt-1">{report.description}</p>

                                <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <MapPin size={12} /> {report.state}
                                    </span>
                                    <span className="flex items-center gap-1 text-blue-600 font-medium">
                                        <ThumbsUp size={12} /> {report.vote_count} votes
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MessageSquare size={12} /> {report.comment_count} comments
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {reports.length === 0 && (
                    <div className="p-8 text-center text-gray-500 text-sm">
                        No trending reports yet. Be the first to report!
                    </div>
                )}
            </div>
        </div>
    );
};
