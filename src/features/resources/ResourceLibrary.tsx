import React, { useState } from 'react';
import { BookOpen, FileText, Video, Download, Search, ChevronRight } from 'lucide-react';

export const ResourceLibrary = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const resources = [
        {
            id: 1,
            title: 'Know Your Rights: Police Encounters',
            type: 'pdf',
            category: 'rights',
            description: 'A comprehensive guide on what to do when stopped by law enforcement.',
            size: '1.2 MB',
            downloads: 1250
        },
        {
            id: 2,
            title: 'How to Document Human Rights Violations',
            type: 'video',
            category: 'training',
            description: 'Video tutorial on safely recording and reporting incidents.',
            duration: '15:30',
            views: 890
        },
        {
            id: 3,
            title: 'Legal Aid Directory 2023',
            type: 'pdf',
            category: 'legal',
            description: 'Contact information for pro-bono lawyers across all 36 states.',
            size: '3.5 MB',
            downloads: 3400
        },
        {
            id: 4,
            title: 'Digital Security for Activists',
            type: 'pdf',
            category: 'safety',
            description: 'Protecting your online identity and communications.',
            size: '2.1 MB',
            downloads: 560
        }
    ];

    const categories = [
        { id: 'all', label: 'All Resources' },
        { id: 'rights', label: 'Human Rights' },
        { id: 'legal', label: 'Legal Aid' },
        { id: 'training', label: 'Training' },
        { id: 'safety', label: 'Safety' }
    ];

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
                <h1 className="text-3xl font-bold text-gray-900">Resource Library</h1>
                <p className="text-gray-600">
                    Empower yourself with knowledge. Browse our collection of guides, legal templates, and training materials.
                </p>
                <div className="relative max-w-md mx-auto mt-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search resources..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    />
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 border-b border-gray-200 pb-6">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat.id
                                ? 'bg-gray-900 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {resources
                    .filter(r => activeCategory === 'all' || r.category === activeCategory)
                    .map(resource => (
                        <div key={resource.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex gap-4">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${resource.type === 'pdf' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                                }`}>
                                {resource.type === 'pdf' ? <FileText size={24} /> : <Video size={24} />}
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-gray-900 mb-1">{resource.title}</h3>
                                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded uppercase font-bold">
                                        {resource.type}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 mb-3">{resource.description}</p>

                                <div className="flex items-center justify-between text-xs text-gray-500">
                                    <span>
                                        {resource.type === 'pdf' ? resource.size : resource.duration} • {resource.downloads || resource.views} {resource.type === 'pdf' ? 'downloads' : 'views'}
                                    </span>
                                    <button className="flex items-center gap-1 text-brand-primary font-medium hover:underline">
                                        Download <Download size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            <div className="bg-brand-primary/5 rounded-2xl p-8 text-center space-y-4">
                <BookOpen className="mx-auto text-brand-primary" size={40} />
                <h3 className="text-xl font-bold text-gray-900">Need a specific guide?</h3>
                <p className="text-gray-600 max-w-lg mx-auto">
                    Our legal team is constantly updating the library. If you can't find what you're looking for, let us know.
                </p>
                <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Request Resource
                </button>
            </div>
        </div>
    );
};
