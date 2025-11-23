import React, { useState } from 'react';
import { AlertTriangle, X, Phone, MapPin, Share2 } from 'lucide-react';

export const EmergencyAlert = () => {
    const [isVisible, setIsVisible] = useState(false);

    if (!isVisible) {
        return (
            <button
                onClick={() => setIsVisible(true)}
                className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors z-50 animate-pulse"
                title="Emergency SOS"
            >
                <AlertTriangle size={24} />
            </button>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="bg-red-600 p-6 text-white text-center relative">
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-4 right-4 text-white/80 hover:text-white"
                    >
                        <X size={24} />
                    </button>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle size={32} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Emergency SOS</h2>
                    <p className="text-red-100 mt-2">Are you in immediate danger?</p>
                </div>

                <div className="p-6 space-y-4">
                    <a
                        href="tel:112"
                        className="flex items-center justify-center gap-3 w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
                    >
                        <Phone size={24} />
                        Call Emergency (112)
                    </a>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200">
                            <MapPin className="text-blue-600" size={24} />
                            <span className="text-sm font-medium text-gray-900">Share Location</span>
                        </button>
                        <button className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200">
                            <Share2 className="text-green-600" size={24} />
                            <span className="text-sm font-medium text-gray-900">Notify Contacts</span>
                        </button>
                    </div>

                    <p className="text-xs text-center text-gray-500 mt-4">
                        Your location will be shared with emergency services when you call.
                    </p>
                </div>
            </div>
        </div>
    );
};
