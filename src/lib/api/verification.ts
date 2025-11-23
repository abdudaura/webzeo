import { supabase } from '../supabase';
import type { DatabaseDefinition } from '../../types/database';

export type VerificationLog = DatabaseDefinition['public']['Tables']['verification_logs']['Row'];

export const verificationApi = {
    async addVerificationLog(log: {
        reportId: string;
        level: string;
        notes: string;
        evidence?: any;
    }) {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('User not authenticated');

        const { data, error } = await supabase
            .from('verification_logs')
            .insert({
                report_id: log.reportId,
                verified_by: user.id,
                verification_level: log.level,
                notes: log.notes,
                evidence_added: log.evidence
            })
            .select()
            .single();

        if (error) throw error;
        return data;
    },

    async getVerificationLogs(reportId: string) {
        const { data, error } = await supabase
            .from('verification_logs')
            .select(`
                *,
                verifier:verified_by(email)
            `)
            .eq('report_id', reportId)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data;
    }
};
