import React from 'react';
import { Phone, Shield, Heart, Gavel, AlertTriangle } from 'lucide-react';

export const EmergencyContacts = () => {
    const contacts = [
        {
            category: 'Security & Police',
            icon: Shield,
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            numbers: [
                { name: 'Police Emergency', number: '112' },
                { name: 'Rapid Response Squad', number: '0800-777-0112' },
            ]
        },
        {
            category: 'Medical & Fire',
            icon: Heart,
            color: 'text-red-600',
            bg: 'bg-red-50',
            numbers: [
                { name: 'Ambulance Service', number: '112' },
                { name: 'Fire Service', number: '112' },
                { name: 'NCDC (Health)', number: '0800-9700-0010' },
            ]
        },
        {
            category: 'Legal Aid & Rights',
            icon: Gavel,
            color: 'text-purple-600',
            bg: 'bg-purple-50',
            numbers: [
                { name: 'Legal Aid Council', number: '0800-534-2524' },
                { name: 'Human Rights Commission', number: '0800-647-2428' },
            ]
        },
        {
            category: 'Gender-Based Violence',
            icon: AlertTriangle,
            color: 'text-orange-600',
            bg: 'bg-orange-50',
            numbers: [
                { name: 'NAPTIP (Trafficking)', number: '0800-225-5627' },
                { name: 'Women\'s Rights Watch', number: '0800-000-5555' },
            ]
        }
    ];

    return (
        <div className="space-y-4">
            <div className="bg-red-50 border border-red-100 p-4 rounded-xl flex items-start gap-3">
                <AlertTriangle className="text-red-600 shrink-0 mt-1" />
                <div>
                    <h3 className="font-bold text-red-900">Emergency Mode</h3>
                    <p className="text-sm text-red-700 mt-1">
                        If you are in immediate danger, please call 112 immediately. Do not rely solely on this app for life-threatening emergencies.
                    </p>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {contacts.map((group) => (
                    <div key={group.category} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                            <div className={`p-2 rounded-lg ${group.bg}`}>
                                <group.icon className={group.color} size={20} />
                            </div>
                            <h4 className="font-bold text-gray-900">{group.category}</h4>
                        </div>
                        <div className="space-y-2">
                            {group.numbers.map((contact) => (
                                <div key={contact.name} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                                    <span className="text-sm text-gray-600 font-medium">{contact.name}</span>
                                    <a
                                        href={`tel:${contact.number}`}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-bold hover:bg-green-100 transition-colors"
                                    >
                                        <Phone size={14} />
                                        {contact.number}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
