import React from 'react';
import { History, User, File, Eye, Download, Upload } from 'lucide-react';

export const ChainOfCustody = () => {
    const logs = [
        { id: 1, action: 'view', user: 'Barrister John', file: 'medical_report_confidential.pdf', time: '10 mins ago', role: 'Legal Lead' },
        { id: 2, action: 'download', user: 'Agent Sarah', file: 'cctv_footage_clip.mp4', time: '2 hours ago', role: 'Investigator' },
        { id: 3, action: 'upload', user: 'Volunteer Musa', file: 'witness_statement_001.pdf', time: 'Yesterday, 4:00 PM', role: 'Field Agent' },
        { id: 4, action: 'view', user: 'Supervisor Amina', file: 'crime_scene_photo_A.jpg', time: 'Yesterday, 2:15 PM', role: 'Supervisor' },
    ];

    const getActionIcon = (action: string) => {
        switch (action) {
            case 'view': return <Eye size={14} />;
            case 'download': return <Download size={14} />;
            case 'upload': return <Upload size={14} />;
            default: return <File size={14} />;
        }
    };

    const getActionColor = (action: string) => {
        switch (action) {
            case 'view': return 'text-blue-600 bg-blue-50';
            case 'download': return 'text-orange-600 bg-orange-50';
            case 'upload': return 'text-green-600 bg-green-50';
            default: return 'text-gray-600 bg-gray-50';
        }
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="p-4 border-b border-gray-200 flex items-center gap-2">
                <History size={18} className="text-gray-500" />
                <h3 className="font-bold text-gray-900 text-sm">Chain of Custody Log</h3>
            </div>

            <div className="max-h-64 overflow-y-auto">
                <div className="divide-y divide-gray-100">
                    {logs.map((log) => (
                        <div key={log.id} className="p-4 hover:bg-gray-50 transition-colors flex gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${getActionColor(log.action)}`}>
                                {getActionIcon(log.action)}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm text-gray-900">
                                    <span className="font-medium">{log.user}</span>
                                    <span className="text-gray-500"> ({log.role}) </span>
                                    <span className="text-gray-600">{log.action}ed </span>
                                    <span className="font-medium text-gray-900 truncate">{log.file}</span>
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">{log.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-3 bg-gray-50 border-t border-gray-200 text-center">
                <button className="text-xs font-medium text-brand-primary hover:text-brand-primary/80">
                    View Full Audit Log
                </button>
            </div>
        </div>
    );
};
