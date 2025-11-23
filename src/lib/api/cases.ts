import { supabase } from '../supabase';
import type { DatabaseDefinition } from '../../types/database';

export type Case = {
    id: string;
    title: string;
    status: 'open' | 'in_progress' | 'closed' | 'escalated';
    priority: 'low' | 'medium' | 'high' | 'critical';
    assigned_to: string | null;
    report_id: string;
    description: string;
    created_at: string;
    updated_at: string;
    client_name: string;
    case_number: string;
};

export type CaseNote = {
    id: string;
    case_id: string;
    author_id: string;
    content: string;
    created_at: string;
    is_private: boolean;
};

export const casesApi = {
    async getCases() {
        // Mock data for now as table might not exist
        return [
            {
                id: '1',
                title: 'Unlawful Detention of Student',
                status: 'in_progress',
                priority: 'high',
                assigned_to: 'Barrister John',
                report_id: 'r1',
                description: 'Student detained without charge for 5 days.',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                client_name: 'Ibrahim Musa',
                case_number: 'CASE-2023-001'
            },
            {
                id: '2',
                title: 'Land Grabbing in Epe',
                status: 'open',
                priority: 'medium',
                assigned_to: null,
                report_id: 'r2',
                description: 'Community land seized by developers without compensation.',
                created_at: new Date(Date.now() - 86400000).toISOString(),
                updated_at: new Date(Date.now() - 86400000).toISOString(),
                client_name: 'Epe Community',
                case_number: 'CASE-2023-002'
            }
        ] as Case[];
    },

    async getCase(id: string) {
        const cases = await this.getCases();
        return cases.find(c => c.id === id);
    },

    async createCase(caseData: Omit<Case, 'id' | 'created_at' | 'updated_at' | 'case_number'>) {
        console.log('Creating case:', caseData);
        return {
            id: Math.random().toString(36).substr(2, 9),
            ...caseData,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            case_number: `CASE-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000)}`
        } as Case;
    },

    async updateStatus(id: string, status: Case['status']) {
        console.log('Updating status:', id, status);
    },

    async addNote(caseId: string, content: string, isPrivate: boolean = false) {
        console.log('Adding note:', caseId, content, isPrivate);
    }
};
