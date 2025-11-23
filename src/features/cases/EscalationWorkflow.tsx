import React from 'react';
import { CheckCircle, Clock, XCircle, ArrowRight } from 'lucide-react';

interface Step {
    id: string;
    label: string;
    status: 'completed' | 'current' | 'pending' | 'rejected';
    date?: string;
    actor?: string;
}

interface EscalationWorkflowProps {
    currentStep: number;
    steps?: Step[];
}

export const EscalationWorkflow = ({ currentStep, steps: propSteps }: EscalationWorkflowProps) => {
    const defaultSteps: Step[] = [
        { id: '1', label: 'Report Verified', status: 'completed', date: 'Oct 12, 10:00 AM', actor: 'Volunteer Musa' },
        { id: '2', label: 'Case Created', status: 'completed', date: 'Oct 12, 2:30 PM', actor: 'Agent Sarah' },
        { id: '3', label: 'Supervisor Review', status: 'current', actor: 'Pending Approval' },
        { id: '4', label: 'Legal Assignment', status: 'pending' },
        { id: '5', label: 'Action Initiated', status: 'pending' }
    ];

    const steps = propSteps || defaultSteps;

    return (
        <div className="w-full">
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Escalation Timeline</h3>
            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 -z-10"></div>

                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex gap-4 items-start">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 bg-white ${step.status === 'completed' ? 'border-green-500 text-green-500' :
                                    step.status === 'current' ? 'border-blue-500 text-blue-500' :
                                        step.status === 'rejected' ? 'border-red-500 text-red-500' :
                                            'border-gray-300 text-gray-300'
                                }`}>
                                {step.status === 'completed' ? <CheckCircle size={16} /> :
                                    step.status === 'rejected' ? <XCircle size={16} /> :
                                        step.status === 'current' ? <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse" /> :
                                            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />}
                            </div>

                            <div className="pt-1">
                                <div className="flex items-center gap-2">
                                    <h4 className={`font-medium text-sm ${step.status === 'completed' ? 'text-gray-900' :
                                            step.status === 'current' ? 'text-blue-700' :
                                                'text-gray-500'
                                        }`}>
                                        {step.label}
                                    </h4>
                                    {step.status === 'current' && (
                                        <span className="bg-blue-100 text-blue-700 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">
                                            In Progress
                                        </span>
                                    )}
                                </div>
                                {(step.date || step.actor) && (
                                    <div className="text-xs text-gray-500 mt-1 flex flex-col gap-0.5">
                                        {step.actor && <span>By: {step.actor}</span>}
                                        {step.date && <span className="flex items-center gap-1"><Clock size={10} /> {step.date}</span>}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
