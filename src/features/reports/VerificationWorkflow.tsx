import React, { useState } from 'react';
import { Camera, FileText, Send } from 'lucide-react';
import { verificationApi } from '../../lib/api/verification';
import { useAuth } from '../../contexts/AuthContext';
import { hasPermission } from '../../lib/permissions';

interface VerificationWorkflowProps {
    reportId: string;
    onVerificationComplete: () => void;
}

export const VerificationWorkflow: React.FC<VerificationWorkflowProps> = ({ reportId, onVerificationComplete }) => {
    const { userRole } = useAuth();
    const [notes, setNotes] = useState('');
    const [loading, setLoading] = useState(false);

    const canVerify = hasPermission(userRole, 'verify_report');

    if (!canVerify) return null;

    const handleSubmit = async () => {
        if (!notes.trim()) return;
        setLoading(true);
        try {
            await verificationApi.addVerificationLog({
                reportId,
                level: userRole,
                notes,
                evidence: {} // Placeholder for evidence
            });
            setNotes('');
            onVerificationComplete();
        } catch (error) {
            console.error('Error submitting verification:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mt-4">
            <h3 className="font-bold text-gray-900 mb-3">Verification Actions</h3>

            <div className="flex gap-2 mb-4">
                <button className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100">
                    <Camera size={16} />
                    Add Photo Evidence
                </button>
                <button className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100">
                    <FileText size={16} />
                    Add Document
                </button>
            </div>

            <div className="relative">
                <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add verification notes, witness statements, or findings..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px] text-sm"
                />
                <button
                    onClick={handleSubmit}
                    disabled={loading || !notes.trim()}
                    className="absolute bottom-3 right-3 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 transition-colors"
                >
                    <Send size={16} />
                </button>
            </div>
        </div>
    );
};
