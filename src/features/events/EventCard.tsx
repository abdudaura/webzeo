import React from 'react';
import { Calendar, MapPin, Users, Video, ExternalLink } from 'lucide-react';
import { type Event } from '../../lib/api/events';

interface EventCardProps {
    event: Event;
    onRsvp: (id: string) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onRsvp }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow group">
            <div className="h-32 overflow-hidden relative">
                <img
                    src={event.image_url}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide text-foreground">
                    {event.type}
                </div>
            </div>

            <div className="p-3">
                <div className="flex gap-3 mb-2">
                    <div className="text-center bg-muted rounded-md p-1.5 min-w-[48px]">
                        <span className="block text-[10px] font-bold text-primary uppercase">
                            {new Date(event.date).toLocaleString('default', { month: 'short' })}
                        </span>
                        <span className="block text-lg font-bold text-foreground">
                            {new Date(event.date).getDate()}
                        </span>
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-sm leading-tight mb-1 line-clamp-2">{event.title}</h3>
                        <p className="text-xs text-muted-foreground line-clamp-1">{event.description}</p>
                    </div>
                </div>

                <div className="space-y-1 mb-3">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar size={12} className="text-muted-foreground" />
                        <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        {event.is_virtual ? <Video size={12} /> : <MapPin size={12} />}
                        <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Users size={12} />
                        <span>{event.attendees_count} attending</span>
                    </div>
                </div>

                <button
                    onClick={() => onRsvp(event.id)}
                    className="w-full py-1.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-1.5"
                >
                    {event.is_virtual ? (
                        <>
                            <ExternalLink size={14} />
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