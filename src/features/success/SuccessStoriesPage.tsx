import React from 'react';
import { Share2, Heart, Calendar, MapPin, ArrowRight } from 'lucide-react';

export const SuccessStoriesPage = () => {
    const stories = [
        {
            id: 1,
            title: "Restored Water Supply in Kaduna Village",
            location: "Zaria, Kaduna",
            date: "Oct 15, 2023",
            category: "Infrastructure",
            imageBefore: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=800",
            imageAfter: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800",
            summary: "After 6 months of broken pipes, the community used CEDDERT to report the issue. Within 2 weeks of verification, the local government deployed a repair team.",
            impact: "500+ households now have clean running water."
        },
        {
            id: 2,
            title: "Illegal Checkpoint Removed",
            location: "Onitsha-Owerri Road",
            date: "Nov 02, 2023",
            category: "Corruption",
            imageBefore: "https://images.unsplash.com/photo-1569517282132-25d22f4573e6?auto=format&fit=crop&q=80&w=800",
            imageAfter: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
            summary: "Commuters reported extortion at an illegal checkpoint. The report went viral on CEDDERT, prompting immediate police action.",
            impact: "Safe passage restored for thousands of daily travelers."
        },
        {
            id: 3,
            title: "School Roof Repaired Before Rainy Season",
            location: "Maiduguri, Borno",
            date: "Sep 10, 2023",
            category: "Education",
            imageBefore: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
            imageAfter: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800",
            summary: "A dilapidated school roof threatened student safety. CEDDERT volunteers verified the report and connected with an NGO for rapid repairs.",
            impact: "200 students can now learn safely during the rains."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto p-4 space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-gray-900">Impact Stories</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    See how citizen reporting is transforming communities across Nigeria. Real problems, real solutions.
                </p>
            </div>

            <div className="grid gap-8">
                {stories.map((story) => (
                    <div key={story.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="grid md:grid-cols-2 h-64 md:h-80">
                            <div className="relative group">
                                <img src={story.imageBefore} alt="Before" className="w-full h-full object-cover" />
                                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold">BEFORE</div>
                            </div>
                            <div className="relative group">
                                <img src={story.imageAfter} alt="After" className="w-full h-full object-cover" />
                                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">AFTER</div>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                <span className="flex items-center gap-1">
                                    <Calendar size={14} /> {story.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <MapPin size={14} /> {story.location}
                                </span>
                                <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
                                    {story.category}
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{story.title}</h2>
                            <p className="text-gray-600 mb-4">{story.summary}</p>

                            <div className="bg-green-50 border border-green-100 p-4 rounded-xl mb-6">
                                <h4 className="font-bold text-green-800 text-sm mb-1">IMPACT</h4>
                                <p className="text-green-700 text-sm">{story.impact}</p>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                                    <Heart size={20} />
                                    <span className="text-sm font-medium">Celebrate</span>
                                </button>
                                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                                    <Share2 size={20} />
                                    <span className="text-sm font-medium">Share Story</span>
                                </button>
                                <button className="flex items-center gap-1 text-brand-primary font-bold hover:underline">
                                    Read Full Story <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
