import React from 'react';
import { Users, Activity, AlertCircle } from 'lucide-react';

export const VolunteerManagementPage: React.FC = () => {
    // Mock data for now
    const stats = [
        { label: 'Active Volunteers', value: '124', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
        { label: 'Reports Verified', value: '1,205', icon: Activity, color: 'text-green-600', bg: 'bg-green-100' },
        { label: 'Pending Reviews', value: '15', icon: AlertCircle, color: 'text-orange-600', bg: 'bg-orange-100' },
    ];

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Management</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className={`p-4 rounded-full ${stat.bg}`}>
                            <stat.icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Active Volunteers List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="font-bold text-lg text-gray-800">Active Volunteers</h2>
                    <button className="text-sm text-green-600 font-medium hover:text-green-700">View All</button>
                </div>

                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                        <tr>
                            <th className="px-6 py-3 font-medium">Volunteer</th>
                            <th className="px-6 py-3 font-medium">State</th>
                            <th className="px-6 py-3 font-medium">Status</th>
                            <th className="px-6 py-3 font-medium">Activity</th>
                            <th className="px-6 py-3 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <tr key={i} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                                            JD
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 text-sm">John Doe</p>
                                            <p className="text-xs text-gray-500">john@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">Kaduna</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">Verified 12 reports</td>
                                <td className="px-6 py-4">
                                    <button className="text-gray-400 hover:text-gray-600">Manage</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
