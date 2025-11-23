import { supabase } from '../supabase';

export const votingApi = {
    async upvoteReport(reportId: string) {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('User not authenticated');

        const { data, error } = await supabase
            .from('report_votes')
            .upsert({
                report_id: reportId,
                user_id: user.id,
                vote_type: 'up'
            } as any)
            .select()
            .single();

        if (error) throw error;
        return data;
    },

    async downvoteReport(reportId: string) {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('User not authenticated');

        const { data, error } = await supabase
            .from('report_votes')
            .upsert({
                report_id: reportId,
                user_id: user.id,
                vote_type: 'down'
            } as any)
            .select()
            .single();

        if (error) throw error;
        return data;
    },

    async getUserVote(reportId: string) {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return null;

        const { data, error } = await supabase
            .from('report_votes')
            .select('vote_type')
            .eq('report_id', reportId)
            .eq('user_id', user.id)
            .single();

        if (error && error.code !== 'PGRST116') throw error; // Ignore not found error
        return data?.vote_type || null;
    },

    async getVoteCount(reportId: string) {
        const { count: upvotes, error: upError } = await supabase
            .from('report_votes')
            .select('*', { count: 'exact', head: true })
            .eq('report_id', reportId)
            .eq('vote_type', 'up');

        if (upError) throw upError;

        const { count: downvotes, error: downError } = await supabase
            .from('report_votes')
            .select('*', { count: 'exact', head: true })
            .eq('report_id', reportId)
            .eq('vote_type', 'down');

        if (downError) throw downError;

        return (upvotes || 0) - (downvotes || 0);
    }
};
