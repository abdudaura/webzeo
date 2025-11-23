import React, { useState, useEffect } from 'react';
import { FileText, Download, Printer, X } from 'lucide-react';
import { DocumentGenerator, DocumentType } from '../../lib/legal/generator';

interface DocumentPreviewProps {
    type: DocumentType;
    data: any;
    onClose: () => void;
}

export const DocumentPreview = ({ type, data, onClose }: DocumentPreviewProps) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const generated = DocumentGenerator.generateContent(type, data);
        setContent(generated);
    }, [type, data]);

    const handlePrint = () => {
        DocumentGenerator.generatePDF(content, `${type}_${new Date().getTime()}.pdf`);
    };

    const getTitle = () => {
        switch (type) {
            case 'petition': return 'Legal Petition';
            case 'affidavit': return 'Sworn Affidavit';
            case 'foi_request': return 'FOI Request';
            default: return 'Document';
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-3xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-2 rounded-lg text-blue-700">
                            <FileText size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">{getTitle()}</h3>
                            <p className="text-xs text-gray-500">Preview Mode</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handlePrint}
                            className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm font-medium transition-colors"
                        >
                            <Printer size={16} />
                            Print / Save PDF
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-200 rounded-lg text-gray-500 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-8 bg-gray-100">
                    <div className="bg-white shadow-lg max-w-[210mm] mx-auto min-h-[297mm] p-[20mm] text-gray-900 font-serif whitespace-pre-wrap leading-relaxed text-sm md:text-base">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};
