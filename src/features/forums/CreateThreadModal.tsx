import React, { useState } from 'react';
import { X, Image, Paperclip } from 'lucide-react';

interface CreateThreadModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { title: string; category: string; content: string }) => void;
}

export const CreateThreadModal: React.FC<CreateThreadModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Discussions');
    const [content, setContent] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, category, content });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
                <div className="flex justify-between items-center p-4 border-b border-gray-100">
                    <h2 className="font-bold text-gray-800 text-lg">Create New Post</h2>
                    <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                        <X size={20} className="text-gray-500" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="What's on your mind?"
                            className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
                        >
                            <option value="Discussions">General Discussion</option>
                            <option value="Safety Tips">Safety Tips</option>
                            <option value="Success Stories">Success Stories</option>
                            <option value="Announcements">Announcements</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Share your thoughts..."
                            rows={5}
                            className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none resize-none transition-all"
                            required
                        />
                    </div>

                    <div className="flex justify-between items-center pt-2">
                        <div className="flex gap-2 text-gray-500">
                            <button type="button" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <Image size={20} />
                            </button>
                            <button type="button" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <Paperclip size={20} />
                            </button>
                        </div>
                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 shadow-sm transition-colors"
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
