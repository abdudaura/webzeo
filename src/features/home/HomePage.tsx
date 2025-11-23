import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import ChatWindow from '../chat/components/ChatWindow';
import VoiceAssistantButton from '../../components/ui/VoiceAssistantButton';
import { FileText, LogIn, Shield } from 'lucide-react';

const HomePage = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="h-screen flex items-center justify-center">Loading...</div>;
    }

    if (user) {
        return (
            <div className="h-full relative">
                <ChatWindow />
                <VoiceAssistantButton />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero Section */}
            <div className="bg-brand-primary text-white py-20 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30">
                        <span className="text-white font-bold text-4xl">C</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">CEDDERT</h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-2xl mx-auto font-light">
                        Centre For Democratic Development, Research and Training
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/report"
                            className="flex items-center justify-center px-8 py-4 bg-white text-brand-primary rounded-xl font-bold text-lg shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1"
                        >
                            <FileText className="w-5 h-5 mr-2" />
                            Submit a Report
                        </Link>
                        <Link
                            to="/signin"
                            className="flex items-center justify-center px-8 py-4 bg-brand-dark text-white rounded-xl font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
                        >
                            <LogIn className="w-5 h-5 mr-2" />
                            Staff Login
                        </Link>
                    </div>
                </div>
            </div>

            {/* Info Section */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <div className="w-12 h-12 bg-orange-100 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Secure & Anonymous</h3>
                        <p className="text-gray-600">Submit reports safely. Your identity is protected unless you choose to share it.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Easy Reporting</h3>
                        <p className="text-gray-600">Quickly categorize and describe issues in your community with our simple form.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Direct Action</h3>
                        <p className="text-gray-600">Your reports go directly to our field agents and supervisors for immediate review.</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-900 text-white py-8 text-center mt-auto">
                <p className="opacity-60 text-sm">&copy; 2024 CEDDERT. All rights reserved.</p>
            </div>
        </div>
    );
}

export default HomePage;
