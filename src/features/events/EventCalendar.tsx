import React, { useEffect, useState } from 'react';
import { Calendar as CalendarIcon, Plus, Filter } from 'lucide-react';
import { eventsApi, type Event } from '../../lib/api/events';
import { EventCard } from './EventCard';

export const EventCalendar = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        loadEvents();
    }, []);

    const loadEvents = async () => {
        const data = await eventsApi.getEvents();
        setEvents(data);
    };

    const handleRsvp = async (id: string) => {
        await eventsApi.rsvpToEvent(id);
        alert('RSVP Successful! You will receive an email confirmation.');
    };

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <CalendarIcon className="text-brand-primary" />
                        Community Events
                    </h1>
                    <p className="text-gray-600 mt-1">Join town halls, workshops, and training sessions.</p>
                </div>

                <div className="flex gap-3">
                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <select
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent appearance-none bg-white"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="all">All Events</option>
                            <option value="townhall">Town Halls</option>
                            <option value="training">Training</option>
                            <option value="workshop">Workshops</option>
                        </select>
                    </div>
                    <button className="flex items-center gap-2 bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-primary/90 transition-colors font-medium">
                        <Plus size={18} />
                        Host Event
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events
                    .filter(e => filter === 'all' || e.type === filter)
                    .map(event => (
                        <EventCard key={event.id} event={event} onRsvp={handleRsvp} />
                    ))}
            </div>

            {events.length === 0 && (
                <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                    <CalendarIcon className="mx-auto text-gray-300 mb-3" size={48} />
                    <h3 className="text-lg font-medium text-gray-900">No events found</h3>
                    <p className="text-gray-500">Check back later for upcoming community gatherings.</p>
                </div>
            )}
        </div>
    );
};
