import React, { useEffect, useState } from 'react';
import { Briefcase, Filter, Plus, Search, Clock, CheckCircle, AlertCircle, User } from 'lucide-react';
import { casesApi, type Case } from '../../lib/api/cases';

export const CaseDashboard = () => {
    const [cases, setCases] = useState<Case[]>([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        loadCases();
    }, []);

    const loadCases = async () => {
        const data = await casesApi.getCases();
        setCases(data);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'open': return 'bg-blue-100 text-blue-800';
            case 'in_progress': return 'bg-yellow-100 text-yellow-800';
            case 'closed': return 'bg-green-100 text-green-800';
            case 'escalated': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'critical': return 'text-red-600';
            case 'high': return 'text-orange-600';
            case 'medium': return 'text-blue-600';
            default: return 'text-gray-600';
        }
    };

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <Briefcase className="text-brand-primary" />
                        Case Management
                    </h1>
                    <p className="text-gray-500">Track and manage legal cases escalated from reports.</p>
                </div>
                <button className="flex items-center gap-2 bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-primary/90 transition-colors">
                    <Plus size={20} />
                    New Case
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row gap-4 justify-between">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search cases, clients, or case numbers..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Filter size={20} className="text-gray-400" />
                        <select
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="all">All Status</option>
                            <option value="open">Open</option>
                            <option value="in_progress">In Progress</option>
                            <option value="closed">Closed</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-600 font-medium text-sm">
                            <tr>
                                <th className="p-4">Case Number</th>
                                <th className="p-4">Title & Client</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Priority</th>
                                <th className="p-4">Assigned To</th>
                                <th className="p-4">Last Updated</th>
                                <th className="p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {cases.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-mono text-sm text-gray-500">
                                        {item.case_number}
                                    </td>
                                    <td className="p-4">
                                        <div className="font-medium text-gray-900">{item.title}</div>
                                        <div className="text-sm text-gray-500 flex items-center gap-1">
                                            <User size={12} /> {item.client_name}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)} capitalize`}>
                                            {item.status.replace('_', ' ')}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className={`flex items-center gap-1 font-medium text-sm ${getPriorityColor(item.priority)} capitalize`}>
                                            <AlertCircle size={14} />
                                            {item.priority}
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-gray-600">
                                        {item.assigned_to || <span className="text-gray-400 italic">Unassigned</span>}
                                    </td>
                                    <td className="p-4 text-sm text-gray-500">
                                        {new Date(item.updated_at).toLocaleDateString()}
                                    </td>
                                    <td className="p-4">
                                        <button className="text-brand-primary hover:text-brand-primary/80 font-medium text-sm">
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
