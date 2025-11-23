import { supabase } from '../supabase';

export const analyticsApi = {
    async getTrendingReports(limit = 5) {
        // In a real app, this would be a complex query or RPC
        // For now, we'll fetch recent reports and sort by vote count client-side or use a simple order
        // Assuming we have a way to count votes efficiently, but for MVP we might just fetch reports with their vote counts

        const { data, error } = await supabase
            .from('reports')
            .select(`
                *,
                votes:report_votes(count),
                comments:report_comments(count)
            `)
            .order('created_at', { ascending: false })
            .limit(20); // Fetch more and filter/sort client side for "trending" mock

        if (error) throw error;

        // Mock "trending" algorithm: simple vote count
        const trending = data.map(r => ({
            ...r,
            vote_count: r.votes?.[0]?.count || 0,
            comment_count: r.comments?.[0]?.count || 0
        })).sort((a, b) => b.vote_count - a.vote_count).slice(0, limit);

        return trending;
    },

    async getStateStats(state: string) {
        // Get total reports
        const { count: total, error: totalError } = await supabase
            .from('reports')
            .select('*', { count: 'exact', head: true })
            .eq('state', state);

        if (totalError) throw totalError;

        // Get resolved reports
        const { count: resolved, error: resolvedError } = await supabase
            .from('reports')
            .select('*', { count: 'exact', head: true })
            .eq('state', state)
            .eq('status', 'resolved');

        if (resolvedError) throw resolvedError;

        // Get reports by category (simplified)
        const { data: categories, error: catError } = await supabase
            .from('reports')
            .select('category')
            .eq('state', state);

        if (catError) throw catError;

        const categoryCounts = categories.reduce((acc: any, curr) => {
            acc[curr.category] = (acc[curr.category] || 0) + 1;
            return acc;
        }, {});

        return {
            totalReports: total || 0,
            resolvedReports: resolved || 0,
            resolutionRate: total ? Math.round((resolved! / total) * 100) : 0,
            categoryBreakdown: categoryCounts
        };
    },

    async getOverallStats() {
        const { count: total } = await supabase
            .from('reports')
            .select('*', { count: 'exact', head: true });

        const { count: resolved } = await supabase
            .from('reports')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'resolved');

        const { count: volunteers } = await supabase
            .from('volunteer_assignments')
            .select('*', { count: 'exact', head: true })
            .eq('active', true);

        return {
            totalReports: total || 0,
            resolvedReports: resolved || 0,
            activeVolunteers: volunteers || 0,
            statesCovered: 36 // Mock for now
        };
    }
};
