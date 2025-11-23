import React from 'react';
import { Shield, ShieldCheck, ShieldAlert, CheckCircle, Clock } from 'lucide-react';

export type VerificationStatus = 'pending' | 'investigating' | 'verified_volunteer' | 'verified_agent' | 'verified_supervisor' | 'legal_case' | 'resolved';

interface VerificationBadgeProps {
    status: VerificationStatus;
    showLabel?: boolean;
}

export const VerificationBadge: React.FC<VerificationBadgeProps> = ({ status, showLabel = true }) => {
    const config = {
        pending: {
            icon: Clock,
            label: 'Pending Review',
            color: 'text-gray-500',
            bg: 'bg-gray-100',
            border: 'border-gray-200'
        },
        investigating: {
            icon: ShieldAlert,
            label: 'Under Investigation',
            color: 'text-orange-600',
            bg: 'bg-orange-100',
            border: 'border-orange-200'
        },
        verified_volunteer: {
            icon: Shield,
            label: 'Verified by Volunteer',
            color: 'text-blue-600',
            bg: 'bg-blue-100',
            border: 'border-blue-200'
        },
        verified_agent: {
            icon: ShieldCheck,
            label: 'Verified by Agent',
            color: 'text-indigo-600',
            bg: 'bg-indigo-100',
            border: 'border-indigo-200'
        },
        verified_supervisor: {
            icon: ShieldCheck,
            label: 'Verified by Supervisor',
            color: 'text-purple-600',
            bg: 'bg-purple-100',
            border: 'border-purple-200'
        },
        legal_case: {
            icon: Shield,
            label: 'Legal Case Filed',
            color: 'text-red-600',
            bg: 'bg-red-100',
            border: 'border-red-200'
        },
        resolved: {
            icon: CheckCircle,
            label: 'Resolved',
            color: 'text-green-600',
            bg: 'bg-green-100',
            border: 'border-green-200'
        }
    };

    const { icon: Icon, label, color, bg, border } = config[status] || config.pending;

    return (
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${bg} ${border}`}>
            <Icon size={14} className={color} />
            {showLabel && <span className={`text-xs font-medium ${color}`}>{label}</span>}
        </div>
    );
};
