import React from 'react';
import { Users, FileCheck, Globe, Activity, Download, TrendingUp } from 'lucide-react';

export const ImpactDashboard = () => {
    const metrics = [
        { label: 'Reports Submitted', value: '12,450', change: '+12%', icon: FileCheck, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Issues Resolved', value: '8,320', change: '+8%', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
        { label: 'Lives Impacted', value: '450k+', change: '+25%', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
        { label: 'States Covered', value: '36 + FCT', change: '100%', icon: Globe, color: 'text-orange-600', bg: 'bg-orange-50' },
    ];

    return (
        <div className="max-w-6xl mx-auto p-4 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Impact Dashboard</h1>
                    <p className="text-gray-600">Tracking our progress in promoting transparency and justice.</p>
                </div>
                <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium shadow-sm">
                    <Download size={16} />
                    Download Annual Report
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((metric) => (
                    <div key={metric.label} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-lg ${metric.bg}`}>
                                <metric.icon className={metric.color} size={24} />
                            </div>
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                {metric.change}
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">{metric.value}</h3>
                        <p className="text-sm text-gray-500 mt-1">{metric.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                        <Activity className="text-gray-400" size={20} />
                        <h3 className="font-bold text-gray-900">Monthly Resolution Rate</h3>
                    </div>
                    <div className="h-64 flex items-end justify-between gap-2">
                        {[40, 55, 45, 60, 75, 65, 80, 85, 70, 90, 95, 88].map((height, i) => (
                            <div key={i} className="w-full bg-blue-100 rounded-t-lg relative group">
                                <div
                                    className="absolute bottom-0 w-full bg-blue-600 rounded-t-lg transition-all duration-500 group-hover:bg-blue-700"
                                    style={{ height: `${height}%` }}
                                ></div>
                                <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded pointer-events-none">
                                    {height}%
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-gray-400 uppercase font-bold">
                        <span>Jan</span><span>Dec</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                        <TrendingUp className="text-gray-400" size={20} />
                        <h3 className="font-bold text-gray-900">Top Impact Areas</h3>
                    </div>
                    <div className="space-y-4">
                        {[
                            { label: 'Infrastructure Repair', value: 35, color: 'bg-blue-500' },
                            { label: 'Human Rights Protection', value: 25, color: 'bg-purple-500' },
                            { label: 'Corruption Exposed', value: 20, color: 'bg-red-500' },
                            { label: 'Public Safety', value: 15, color: 'bg-orange-500' },
                            { label: 'Other', value: 5, color: 'bg-gray-400' },
                        ].map((item) => (
                            <div key={item.label}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-medium text-gray-700">{item.label}</span>
                                    <span className="text-gray-500">{item.value}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                                    <div className={`h-full ${item.color}`} style={{ width: `${item.value}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

import { CheckCircle } from 'lucide-react'; // Added missing import
