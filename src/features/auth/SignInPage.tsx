import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { ArrowLeft, Loader2 } from 'lucide-react';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { signIn } = useAuth();
    const { t } = useLanguage();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await signIn(email, password);
            navigate('/');
        } catch (err) {
            setError('Failed to sign in. Please check your credentials.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Left Side - Branding & Info (60%) */}
            <div className="hidden lg:flex w-[60%] bg-brand-primary relative overflow-hidden">
                {/* Background Pattern/Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-dark opacity-90"></div>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="relative z-10 flex flex-col justify-center h-full px-12 py-12 text-white">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 border border-white/30">
                            <span className="text-white font-bold text-2xl">C</span>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">CEDDERT</h1>
                            <p className="text-xs opacity-80 uppercase tracking-wider">Centre For Democratic Development</p>
                        </div>
                    </div>

                    <h2 className="text-4xl font-extrabold mb-4 leading-tight">
                        Research & Training <br /> for Development
                    </h2>
                    <p className="text-lg opacity-90 mb-10 max-w-2xl font-light leading-relaxed">
                        Conducting problem-oriented and policy-related scientific research to build self-reliance and promote democratic rights and human dignity.
                    </p>

                    {/* Capability Cards Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl hover:bg-white/20 transition-colors duration-300">
                            <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                            </div>
                            <h3 className="font-bold text-lg mb-1">Research</h3>
                            <p className="text-xs opacity-80 leading-relaxed">Qualitative and quantitative research into policies affecting living standards.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl hover:bg-white/20 transition-colors duration-300">
                            <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                            <h3 className="font-bold text-lg mb-1">Empowerment</h3>
                            <p className="text-xs opacity-80 leading-relaxed">Enhancing popular participation in governance and the democratic process.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl hover:bg-white/20 transition-colors duration-300">
                            <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            </div>
                            <h3 className="font-bold text-lg mb-1">Conflict Resolution</h3>
                            <p className="text-xs opacity-80 leading-relaxed">Finding ways to empower people to participate fully in democracy.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl hover:bg-white/20 transition-colors duration-300">
                            <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                            </div>
                            <h3 className="font-bold text-lg mb-1">Trainings</h3>
                            <p className="text-xs opacity-80 leading-relaxed">Training officials to improve expertise and enhance service delivery.</p>
                        </div>
                    </div>

                    <div className="flex space-x-6 text-xs opacity-60 mt-auto">
                        <span>&copy; 2024 CEDDERT</span>
                        <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
                        <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Right Side - Sign In Form (40%) */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-12 bg-white">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <Link to="/" className="flex items-center text-gray-500 hover:text-gray-700 mb-8">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>

                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                        Sign in
                    </h2>
                    <p className="text-sm text-gray-600 mb-8">
                        Or{' '}
                        <Link to="/signup" className="font-medium text-brand-primary hover:text-brand-dark">
                            create a new account
                        </Link>
                    </p>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-brand-primary hover:text-brand-dark">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:opacity-50"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Sign in'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}