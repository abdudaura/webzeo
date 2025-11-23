import React, { useState } from 'react';
import { X, Briefcase, AlertTriangle, FileText, Shield } from 'lucide-react';
import { casesApi } from '../../lib/api/cases';

interface CreateCaseModalProps {
    reportId: string;
    reportTitle: string;
    onClose: () => void;
    onCaseCreated: () => void;
}

export const CreateCaseModal = ({ reportId, reportTitle, onClose, onCaseCreated }: CreateCaseModalProps) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: `Case: ${reportTitle}`,
        client_name: '',
        priority: 'medium',
        description: '',
        legal_strategy: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await casesApi.createCase({
                report_id: reportId,
                title: formData.title,
                client_name: formData.client_name,
                priority: formData.priority as any,
                description: formData.description,
                status: 'open',
                assigned_to: null
            });
            onCaseCreated();
            onClose();
        } catch (error) {
            console.error('Failed to create case:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                    <div className="flex items-center gap-2 text-gray-900">
                        <div className="bg-red-100 p-2 rounded-lg text-red-600">
                            <Briefcase size={20} />
                        </div>
                        <h3 className="font-bold">Escalate to Legal Case</h3>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex gap-3">
                        <AlertTriangle className="text-yellow-600 shrink-0" size={20} />
                        <p className="text-sm text-yellow-800">
                            Escalating this report will create a formal legal case file. This action cannot be undone and requires supervisor approval.
                        </p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Case Title</label>
                        <input
                            type="text"
                            required
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Client Name (Complainant)</label>
                        <input
                            type="text"
                            required
                            placeholder="Full Legal Name"
                            value={formData.client_name}
                            onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Priority Level</label>
                            <select
                                value={formData.priority}
                                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                                <option value="critical">Critical</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Legal Strategy</label>
                            <select
                                value={formData.legal_strategy}
                                onChange={(e) => setFormData({ ...formData, legal_strategy: e.target.value })}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                            >
                                <option value="">Select Strategy...</option>
                                <option value="petition">Petition Writing</option>
                                <option value="mediation">Mediation / ADR</option>
                                <option value="litigation">Litigation (Court)</option>
                                <option value="foi">FOI Request</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Case Description & Facts</label>
                        <textarea
                            required
                            rows={4}
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                            placeholder="Summarize the key facts for the legal team..."
                        />
                    </div>

                    <div className="pt-2 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-4 py-2 bg-brand-primary text-white rounded-lg font-medium hover:bg-brand-primary/90 disabled:opacity-50 flex items-center gap-2"
                        >
                            {loading ? 'Creating...' : (
                                <>
                                    <Shield size={18} />
                                    Create Case File
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
