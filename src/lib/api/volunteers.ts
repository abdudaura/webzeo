import { supabase } from '../supabase';
import type { DatabaseDefinition } from '../../types/database';

export type VolunteerApplication = DatabaseDefinition['public']['Tables']['volunteer_applications']['Row'];
export type VolunteerAssignment = DatabaseDefinition['public']['Tables']['volunteer_assignments']['Row'];

export const volunteersApi = {
    async submitApplication(application: { state: string; reason: string }) {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('User not authenticated');

        const { data, error } = await supabase
            .from('volunteer_applications')
            .insert({
                user_id: user.id,
                state: application.state,
                reason: application.reason,
                status: 'pending'
            })
            .select()
            .single();

        if (error) throw error;
        return data;
    },

    async getMyApplications() {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('User not authenticated');

        const { data, error } = await supabase
            .from('volunteer_applications')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data;
    },

    async getApplicationsForState(state: string) {
        const { data, error } = await supabase
            .from('volunteer_applications')
            .select(`
                *,
                user:user_id(email)
            `)
            .eq('state', state)
            .eq('status', 'pending')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data;
    },

    async reviewApplication(id: string, status: 'approved' | 'rejected', notes?: string) {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('User not authenticated');

        const { data, error } = await supabase
            .from('volunteer_applications')
            .update({
                status,
                review_notes: notes,
                reviewed_by: user.id,
                reviewed_at: new Date().toISOString()
            })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data;
    }
};
