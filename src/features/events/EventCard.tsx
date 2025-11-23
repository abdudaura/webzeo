import React from 'react';
import { Calendar, MapPin, Users, Video, ExternalLink } from 'lucide-react';
import { type Event } from '../../lib/api/events';

interface EventCardProps {
    event: Event;
    onRsvp: (id: string) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onRsvp }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
            <div className="h-48 overflow-hidden relative">
                <img
                    src={event.image_url}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-gray-800">
                    {event.type}
                </div>
            </div>

            <div className="p-5">
                <div className="flex gap-4 mb-3">
                    <div className="text-center bg-blue-50 rounded-lg p-2 min-w-[60px]">
                        <span className="block text-xs font-bold text-blue-600 uppercase">
                            {new Date(event.date).toLocaleString('default', { month: 'short' })}
                        </span>
                        <span className="block text-2xl font-bold text-gray-900">
                            {new Date(event.date).getDate()}
                        </span>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">{event.title}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2">{event.description}</p>
                    </div>
                </div>

                <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar size={16} className="text-gray-400" />
                        <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        {event.is_virtual ? <Video size={16} className="text-gray-400" /> : <MapPin size={16} className="text-gray-400" />}
                        <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users size={16} className="text-gray-400" />
                        <span>{event.attendees_count} attending</span>
                    </div>
                </div>

                <button
                    onClick={() => onRsvp(event.id)}
                    className="w-full py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                    {event.is_virtual ? (
                        <>
                            <ExternalLink size={16} />
                            Join Online
                        </>
                    ) : (
                        'RSVP Now'
                    )}
                </button>
            </div>
        </div>
    );
};