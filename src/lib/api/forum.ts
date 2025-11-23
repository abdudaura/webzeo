import { supabase } from '../supabase';
import type { DatabaseDefinition } from '../../types/database';

export type Thread = DatabaseDefinition['public']['Tables']['forum_threads']['Row'];
export type Comment = DatabaseDefinition['public']['Tables']['forum_comments']['Row'];

export const forumApi = {
    async getThreads(category?: string) {
        let query = supabase
            .from('forum_threads')
            .select(`
                *,
                author:author_id(email),
                _count {
                    comments:forum_comments(count),
                    reactions:forum_reactions(count)
                }
            `)
            .order('created_at', { ascending: false });

        if (category && category !== 'All') {
            query = query.eq('category', category);
        }

        const { data, error } = await query;
        if (error) throw error;
        return data;
    },

    async getThread(id: string) {
        const { data, error } = await supabase
            .from('forum_threads')
            .select(`
                *,
                author:author_id(email),
                comments:forum_comments(
                    *,
                    author:author_id(email)
                )
            `)
            .eq('id', id)
            .single();

        if (error) throw error;
        return data;
    },

    async createThread(thread: { title: string; content: string; category: string }) {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('User not authenticated');

        const { data, error } = await supabase
            .from('forum_threads')
            .insert({
                title: thread.title,
                content: thread.content,
                category: thread.category,
                author_id: user.id
            })
            .select()
            .single();

        if (error) throw error;
        return data;
    },

    async addComment(threadId: string, content: string) {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('User not authenticated');

        const { data, error } = await supabase
            .from('forum_comments')
            .insert({
                thread_id: threadId,
                content,
                author_id: user.id
            })
            .select()
            .single();

        if (error) throw error;
        return data;
    }
};
