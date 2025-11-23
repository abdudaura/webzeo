import { supabase } from '../supabase';
import type { DatabaseDefinition } from '../../types/database';

export type Report = DatabaseDefinition['public']['Tables']['reports']['Row'];

export const fetchReportsByState = async (state: string) => {
    return reportsApi.getReports(state);
};

export const voteOnReport = async (reportId: string, type: 'up' | 'down') => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Must be logged in to vote');

    const { data, error } = await supabase
        .from('report_votes')
        .upsert({
            report_id: reportId,
            user_id: user.id,
            vote_type: type
        }, { onConflict: 'report_id,user_id' })
        .select()
        .single();

    if (error) throw error;
    return data;
};

export const reportsApi = {
    async getReports(state?: string, category?: string) {
        let query = supabase
            .from('reports')
            .select(`
                *,
                _count {
                    votes:report_votes(count),
                    comments:report_comments(count)
                }
            `)
            .order('created_at', { ascending: false });

        if (state && state !== 'All') {
            query = query.eq('state', state);
        }

        if (category && category !== 'All') {
            query = query.eq('category', category);
        }

        const { data, error } = await query;
        if (error) throw error;
        return data;
    },

    async getReport(id: string) {
        const { data, error } = await supabase
            .from('reports')
            .select(`
                *,
                votes:report_votes(count),
                comments:report_comments(
                    *,
                    author:author_id(email)
                )
            `)
            .eq('id', id)
            .single();

        if (error) throw error;
        return data;
    },

    async submitReport(report: {
        title: string;
        description: string;
        category: string;
        location: string;
        state: string;
        lga: string;
        evidence?: any;
    }) {
        const { data: { user } } = await supabase.auth.getUser();

        // Allow anonymous submissions if needed, but for now assume authenticated or handle null user
        const userId = user?.id || null;

        const { data, error } = await supabase
            .from('reports')
            .insert({
                title: report.title,
                description: report.description,
                category: report.category,
                location: report.location,
                state: report.state,
                lga: report.lga,
                evidence: report.evidence,
                user_id: userId,
                status: 'pending',
                urgency: 'medium' // Default, AI could analyze this
            })
            .select()
            .single();

        if (error) throw error;
        return data;
    }
};
