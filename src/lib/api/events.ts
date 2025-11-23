import { supabase } from '../supabase';

export type Event = {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    type: 'townhall' | 'training' | 'workshop' | 'rally';
    organizer: string;
    attendees_count: number;
    is_virtual: boolean;
    meeting_link?: string;
    image_url?: string;
};

export const eventsApi = {
    async getEvents() {
        // Mock data
        return [
            {
                id: '1',
                title: 'Community Town Hall: Security Update',
                description: 'Join us for a discussion on recent security improvements in Kaduna State.',
                date: '2023-11-15',
                time: '10:00 AM',
                location: 'Kaduna City Hall',
                type: 'townhall',
                organizer: 'CEDDERT Kaduna Team',
                attendees_count: 120,
                is_virtual: false,
                image_url: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800'
            },
            {
                id: '2',
                title: 'Digital Rights Workshop',
                description: 'Learn how to protect your digital privacy and report online harassment.',
                date: '2023-11-20',
                time: '2:00 PM',
                location: 'Zoom',
                type: 'workshop',
                organizer: 'Tech Rights NGO',
                attendees_count: 450,
                is_virtual: true,
                meeting_link: 'https://zoom.us/j/123456789',
                image_url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800'
            },
            {
                id: '3',
                title: 'Volunteer Training Session',
                description: 'Mandatory training for all new verified volunteers.',
                date: '2023-11-25',
                time: '9:00 AM',
                location: 'Abuja Main Office',
                type: 'training',
                organizer: 'CEDDERT HQ',
                attendees_count: 50,
                is_virtual: false,
                image_url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800'
            }
        ] as Event[];
    },

    async createEvent(event: Omit<Event, 'id' | 'attendees_count'>) {
        console.log('Creating event:', event);
        return {
            id: Math.random().toString(36).substr(2, 9),
            ...event,
            attendees_count: 0
        };
    },

    async rsvpToEvent(eventId: string) {
        console.log('RSVP to event:', eventId);
        return true;
    }
};
