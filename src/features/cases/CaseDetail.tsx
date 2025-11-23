import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, User, MapPin, FileText, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { type Case, casesApi } from '../../lib/api/cases';

interface CaseDetailProps {
    caseData?: Case;
    onBack?: () => void;
}

export const CaseDetail = ({ caseData: propCaseData, onBack: propOnBack }: CaseDetailProps) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'overview' | 'notes' | 'documents'>('overview');
    const [caseData, setCaseData] = useState<Case | null>(propCaseData || null);
    const [loading, setLoading] = useState(!propCaseData);

    useEffect(() => {
        if (!propCaseData && id) {
            loadCase(id);
        }
    }, [id, propCaseData]);

    const loadCase = async (caseId: string) => {
        try {
            const data = await casesApi.getCase(caseId);
            if (data) {
                setCaseData(data);
            }
        } catch (error) {
            console.error('Failed to load case:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleBack = () => {
        if (propOnBack) {
            propOnBack();
        } else {
            navigate('/cases');
        }
    };

    if (loading) {
        return <div className="p-8 text-center">Loading case details...</div>;
    }

    if (!caseData) {
        return <div className="p-8 text-center">Case not found</div>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">
            <button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
                <ArrowLeft size={20} />
                Back to Cases
            </button>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex flex-col md:flex-row justify-between gap-4 border-b border-gray-100 pb-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="font-mono text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {caseData.case_number}
                            </span>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 capitalize`}>
                                {caseData.status.replace('_', ' ')}
                            </span>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">{caseData.title}</h1>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
                            Edit Case
                        </button>
                        <button className="px-4 py-2 bg-brand-primary text-white rounded-lg font-medium hover:bg-brand-primary/90">
                            Update Status
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 pt-6">
                    <div className="col-span-2 space-y-6">
                        <div className="flex gap-4 border-b border-gray-200">
                            {['overview', 'notes', 'documents'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab as any)}
                                    className={`pb-2 px-1 capitalize font-medium transition-colors ${activeTab === tab
                                        ? 'text-brand-primary border-b-2 border-brand-primary'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {activeTab === 'overview' && (
                            <div className="space-y-6 animate-in fade-in">
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Description</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {caseData.description}
                                    </p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                    <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase">Client Information</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <span className="text-xs text-gray-500 block">Name</span>
                                            <span className="font-medium text-gray-900">{caseData.client_name}</span>
                                        </div>
                                        <div>
                                            <span className="text-xs text-gray-500 block">Contact</span>
                                            <span className="font-medium text-gray-900">+234 800 000 0000</span>
                                        </div>
                                        <div>
                                            <span className="text-xs text-gray-500 block">Location</span>
                                            <span className="font-medium text-gray-900">Lagos, Nigeria</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'notes' && (
                            <div className="space-y-4 animate-in fade-in">
                                <div className="flex gap-3">
                                    <textarea
                                        placeholder="Add a case note..."
                                        className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                                        rows={3}
                                    ></textarea>
                                    <button className="bg-gray-900 text-white px-4 rounded-lg font-medium hover:bg-gray-800">
                                        Add Note
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    {[1, 2].map((i) => (
                                        <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                                            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs">
                                                JD
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-bold text-sm text-gray-900">John Doe</span>
                                                    <span className="text-xs text-gray-500">2 hours ago</span>
                                                </div>
                                                <p className="text-sm text-gray-700">
                                                    Spoke with the client. They have provided the necessary documents for the affidavit.
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-sm">Case Details</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm">
                                    <User className="text-gray-400" size={16} />
                                    <div>
                                        <span className="block text-gray-500 text-xs">Assigned To</span>
                                        <span className="font-medium text-gray-900">{caseData.assigned_to || 'Unassigned'}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Calendar className="text-gray-400" size={16} />
                                    <div>
                                        <span className="block text-gray-500 text-xs">Created Date</span>
                                        <span className="font-medium text-gray-900">{new Date(caseData.created_at).toLocaleDateString()}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Clock className="text-gray-400" size={16} />
                                    <div>
                                        <span className="block text-gray-500 text-xs">Last Updated</span>
                                        <span className="font-medium text-gray-900">{new Date(caseData.updated_at).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
