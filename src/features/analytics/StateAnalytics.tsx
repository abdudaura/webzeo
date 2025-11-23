import React, { useEffect, useState } from 'react';
import { BarChart3, CheckCircle, Clock, Users } from 'lucide-react';
import { analyticsApi } from '../../lib/api/analytics';

interface StateAnalyticsProps {
    stateName: string;
}

export const StateAnalytics: React.FC<StateAnalyticsProps> = ({ stateName }) => {
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadStats();
    }, [stateName]);

    const loadStats = async () => {
        setLoading(true);
        try {
            const data = await analyticsApi.getStateStats(stateName);
            setStats(data);
        } catch (error) {
            console.error('Failed to load state stats', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="animate-pulse h-32 bg-gray-100 rounded-xl"></div>;
    if (!stats) return null;

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-2 text-blue-600 mb-1">
                        <BarChart3 size={16} />
                        <span className="text-xs font-bold uppercase">Total Reports</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalReports}</p>
                </div>

                <div className="bg-green-50 p-3 rounded-xl border border-green-100">
                    <div className="flex items-center gap-2 text-green-600 mb-1">
                        <CheckCircle size={16} />
                        <span className="text-xs font-bold uppercase">Resolved</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{stats.resolvedReports}</p>
                </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200">
                <h4 className="text-sm font-bold text-gray-900 mb-3">Top Issues in {stateName}</h4>
                <div className="space-y-2">
                    {Object.entries(stats.categoryBreakdown)
                        .sort(([, a]: any, [, b]: any) => b - a)
                        .slice(0, 4)
                        .map(([category, count]: any) => (
                            <div key={category} className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">{category}</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-blue-500 rounded-full"
                                            style={{ width: `${(count / stats.totalReports) * 100}%` }}
                                        />
                                    </div>
                                    <span className="font-medium text-gray-900 w-6 text-right">{count}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
