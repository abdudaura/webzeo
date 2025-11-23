import React, { useState } from 'react';
import { Lock, File, Image, Video, Eye, Download, ShieldCheck, AlertOctagon, FileText } from 'lucide-react';

export const EvidenceVault = () => {
    const [unlocked, setUnlocked] = useState(false);
    const [password, setPassword] = useState('');

    const evidenceFiles = [
        { id: 1, name: 'witness_statement_001.pdf', type: 'doc', size: '2.4 MB', date: '2023-10-12' },
        { id: 2, name: 'crime_scene_photo_A.jpg', type: 'image', size: '4.1 MB', date: '2023-10-12' },
        { id: 3, name: 'cctv_footage_clip.mp4', type: 'video', size: '156 MB', date: '2023-10-13' },
        { id: 4, name: 'medical_report_confidential.pdf', type: 'doc', size: '1.8 MB', date: '2023-10-14' },
    ];

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock authentication
        if (password.length > 0) {
            setUnlocked(true);
        }
    };

    if (!unlocked) {
        return (
            <div className="bg-gray-900 rounded-xl p-8 text-center text-white border border-gray-800 shadow-2xl">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gray-700">
                    <Lock size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Evidence Vault</h3>
                <p className="text-gray-400 mb-6 text-sm max-w-md mx-auto">
                    This folder contains sensitive evidentiary materials. Access is logged and monitored.
                    Please enter your secure PIN to proceed.
                </p>

                <form onSubmit={handleUnlock} className="max-w-xs mx-auto">
                    <input
                        type="password"
                        placeholder="Enter Secure PIN"
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-center text-white tracking-widest mb-4 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                        <ShieldCheck size={18} />
                        Authenticate & Access
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="bg-green-100 p-1.5 rounded text-green-700">
                        <Lock size={16} />
                    </div>
                    <span className="font-bold text-gray-700 text-sm">Vault Unlocked</span>
                </div>
                <button
                    onClick={() => { setUnlocked(false); setPassword(''); }}
                    className="text-xs text-red-600 hover:text-red-700 font-medium"
                >
                    Lock Vault
                </button>
            </div>

            <div className="p-2">
                <div className="bg-yellow-50 border border-yellow-100 rounded p-3 mb-2 flex gap-2 items-start">
                    <AlertOctagon size={16} className="text-yellow-600 mt-0.5" />
                    <p className="text-xs text-yellow-800">
                        <strong>Chain of Custody Active:</strong> All file access, downloads, and views are being logged with your user ID and timestamp.
                    </p>
                </div>

                <div className="divide-y divide-gray-100">
                    {evidenceFiles.map((file) => (
                        <div key={file.id} className="p-3 hover:bg-gray-50 flex items-center justify-between group transition-colors rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${file.type === 'doc' ? 'bg-blue-100 text-blue-600' :
                                        file.type === 'image' ? 'bg-purple-100 text-purple-600' :
                                            'bg-red-100 text-red-600'
                                    }`}>
                                    {file.type === 'doc' ? <FileText size={20} /> :
                                        file.type === 'image' ? <Image size={20} /> :
                                            <Video size={20} />}
                                </div>
                                <div>
                                    <h4 className="font-medium text-sm text-gray-900">{file.name}</h4>
                                    <div className="flex gap-2 text-xs text-gray-500">
                                        <span>{file.size}</span>
                                        <span>•</span>
                                        <span>{file.date}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 text-gray-500 hover:text-brand-primary hover:bg-blue-50 rounded-lg transition-colors" title="View">
                                    <Eye size={18} />
                                </button>
                                <button className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Download">
                                    <Download size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};