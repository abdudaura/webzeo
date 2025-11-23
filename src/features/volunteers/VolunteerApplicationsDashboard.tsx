import React, { useEffect, useState } from 'react';
import { volunteersApi, type VolunteerApplication } from '../../lib/api/volunteers';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

export const VolunteerApplicationsDashboard: React.FC = () => {
    const [applications, setApplications] = useState<VolunteerApplication[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedState, setSelectedState] = useState('Kaduna'); // Mock default for now

    useEffect(() => {
        loadApplications();
    }, [selectedState]);

    const loadApplications = async () => {
        try {
            setLoading(true);
            const data = await volunteersApi.getApplicationsForState(selectedState);
            setApplications(data || []);
        } catch (error) {
            console.error('Error loading applications:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleReview = async (id: string, status: 'approved' | 'rejected') => {
        try {
            await volunteersApi.reviewApplication(id, status);
            // Refresh list
            loadApplications();
        } catch (error) {
            console.error('Error reviewing application:', error);
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Volunteer Applications</h1>
                <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="p-2 border rounded-lg"
                >
                    <option value="Kaduna">Kaduna</option>
                    <option value="Kano">Kano</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Abuja">Abuja</option>
                </select>
            </div>

            {loading ? (
                <div className="text-center py-10 text-gray-500">Loading applications...</div>
            ) : applications.length === 0 ? (
                <div className="text-center py-10 bg-gray-50 rounded-xl">
                    <p className="text-gray-500">No pending applications for {selectedState}</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {applications.map((app) => (
                        <div key={app.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">
                                        {/* In real app, we'd fetch user name properly */}
                                        Applicant ID: {app.user_id.slice(0, 8)}...
                                    </h3>
                                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                        <Clock size={14} />
                                        Applied on {new Date(app.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold uppercase">
                                    Pending Review
                                </span>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Reason for Volunteering</h4>
                                <p className="text-gray-600 bg-gray-50 p-4 rounded-lg italic">
                                    "{app.reason}"
                                </p>
                            </div>

                            <div className="flex gap-3 justify-end border-t border-gray-100 pt-4">
                                <button
                                    onClick={() => handleReview(app.id, 'rejected')}
                                    className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                                >
                                    <XCircle size={18} />
                                    Reject
                                </button>
                                <button
                                    onClick={() => handleReview(app.id, 'approved')}
                                    className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm"
                                >
                                    <CheckCircle size={18} />
                                    Approve Application
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
