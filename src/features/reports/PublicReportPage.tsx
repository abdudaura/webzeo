import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { reportsApi } from '../../lib/api/reports';

export default function PublicReportPage() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        category: 'general',
        state: 'Kaduna',
        lga: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await reportsApi.submitReport(formData);
            alert('Report submitted successfully');
            setFormData({
                title: '',
                description: '',
                location: '',
                category: 'general',
                state: 'Kaduna',
                lga: ''
            });
        } catch (error) {
            console.error(error);
            alert('Failed to submit report');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Submit a Report</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            className="mt-1 w-full border border-gray-300 rounded-lg p-2"
                            value={formData.title}
                            onChange={e => setFormData({...formData, title: e.target.value})}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            className="mt-1 w-full border border-gray-300 rounded-lg p-2"
                            value={formData.description}
                            onChange={e => setFormData({...formData, description: e.target.value})}
                            required
                            rows={4}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            className="mt-1 w-full border border-gray-300 rounded-lg p-2"
                            value={formData.location}
                            onChange={e => setFormData({...formData, location: e.target.value})}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-brand-primary/30 hover:bg-brand-dark transform hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:transform-none flex items-center justify-center"
                    >
                        {loading ? (
                            <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                            </span>
                        ) : (
                            <span className="flex items-center">
                                Submit Report <Send className="ml-2 w-5 h-5" />
                            </span>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}