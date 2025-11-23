import React from 'react';
import { CheckCircle, AlertTriangle, MapPin, FileText } from 'lucide-react';

interface ConfirmationSummaryProps {
    data: {
        title: string;
        description: string;
        category: string;
        location: string;
        state: string;
        lga: string;
    };
    onConfirm: () => void;
    onEdit: () => void;
    isSubmitting: boolean;
}

export const ConfirmationSummary: React.FC<ConfirmationSummaryProps> = ({
    data,
    onConfirm,
    onEdit,
    isSubmitting
}) => {
    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden my-4 max-w-md mx-auto">
            <div className="bg-green-600 p-4 text-white flex items-center gap-3">
                <CheckCircle className="w-6 h-6" />
                <h3 className="font-bold text-lg">Review Report</h3>
            </div>

            <div className="p-5 space-y-4">
                <div className="bg-yellow-50 border border-yellow-100 p-3 rounded-lg flex gap-2 text-sm text-yellow-800">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <p>Please verify these details are accurate before submitting. False reporting may lead to account suspension.</p>
                </div>

                <div className="space-y-3">
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Category</label>
                        <p className="font-medium text-gray-900">{data.category}</p>
                    </div>

                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Title</label>
                        <p className="font-medium text-gray-900">{data.title}</p>
                    </div>

                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                            <FileText size={12} /> Description
                        </label>
                        <p className="text-sm text-gray-700 bg-gray-50 p-2 rounded border border-gray-100 mt-1">
                            {data.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                                <MapPin size={12} /> State
                            </label>
                            <p className="font-medium text-gray-900">{data.state}</p>
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">LGA</label>
                            <p className="font-medium text-gray-900">{data.lga}</p>
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Specific Location</label>
                        <p className="text-sm text-gray-700">{data.location}</p>
                    </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100">
                    <button
                        onClick={onEdit}
                        disabled={isSubmitting}
                        className="flex-1 py-2.5 px-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                    >
                        Edit Details
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={isSubmitting}
                        className="flex-1 py-2.5 px-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors shadow-md disabled:opacity-50 flex justify-center items-center gap-2"
                    >
                        {isSubmitting ? 'Submitting...' : 'Confirm & Submit'}
                    </button>
                </div>
            </div>
        </div>
    );
};
