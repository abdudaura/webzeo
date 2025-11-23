export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface DatabaseDefinition {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string
                    full_name: string | null
                    avatar_url: string | null
                    phone_number: string | null
                    state_of_origin: string | null
                    created_at: string
                }
                Insert: {
                    id: string
                    full_name?: string | null
                    avatar_url?: string | null
                    phone_number?: string | null
                    state_of_origin?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    full_name?: string | null
                    avatar_url?: string | null
                    phone_number?: string | null
                    state_of_origin?: string | null
                    created_at?: string
                }
            }
            user_roles: {
                Row: {
                    id: string
                    user_id: string
                    role: 'admin' | 'supervisor' | 'agent' | 'volunteer'
                    status: 'pending' | 'approved' | 'rejected'
                    reason: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    role: 'admin' | 'supervisor' | 'agent' | 'volunteer'
                    status?: 'pending' | 'approved' | 'rejected'
                    reason?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    role?: 'admin' | 'supervisor' | 'agent' | 'volunteer'
                    status?: 'pending' | 'approved' | 'rejected'
                    reason?: string | null
                    created_at?: string
                }
            }
            reports: {
                Row: {
                    id: string
                    created_at: string
                    title: string
                    description: string
                    category: string
                    subcategory: string | null
                    status: 'pending' | 'investigating' | 'resolved' | 'rejected'
                    urgency: 'low' | 'medium' | 'high' | 'critical'
                    state: string
                    lga: string
                    location_detail: string | null
                    geo_lat: number | null
                    geo_long: number | null
                    contact_info: string | null
                    user_id: string | null
                    assigned_to: string | null
                }
                Insert: {
                    id?: string
                    created_at?: string
                    title: string
                    description: string
                    category: string
                    subcategory?: string | null
                    status?: 'pending' | 'investigating' | 'resolved' | 'rejected'
                    urgency?: 'low' | 'medium' | 'high' | 'critical'
                    state: string
                    lga: string
                    location_detail?: string | null
                    geo_lat?: number | null
                    geo_long?: number | null
                    contact_info?: string | null
                    user_id?: string | null
                    assigned_to?: string | null
                }
                Update: {
                    id?: string
                    created_at?: string
                    title?: string
                    description?: string
                    category?: string
                    subcategory?: string | null
                    status?: 'pending' | 'investigating' | 'resolved' | 'rejected'
                    urgency?: 'low' | 'medium' | 'high' | 'critical'
                    state?: string
                    lga?: string
                    location_detail?: string | null
                    geo_lat?: number | null
                    geo_long?: number | null
                    contact_info?: string | null
                    user_id?: string | null
                    assigned_to?: string | null
                }
            }
            report_evidence: {
                Row: {
                    id: string
                    report_id: string
                    url: string
                    type: 'image' | 'video' | 'document'
                    uploaded_by: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    report_id: string
                    url: string
                    type: 'image' | 'video' | 'document'
                    uploaded_by?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    report_id?: string
                    url?: string
                    type?: 'image' | 'video' | 'document'
                    uploaded_by?: string | null
                    created_at?: string
                }
            }
            ai_chats: {
                Row: {
                    id: string
                    user_id: string | null
                    session_id: string
                    message: string
                    role: 'user' | 'assistant'
                    language: 'en' | 'ha'
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id?: string | null
                    session_id: string
                    message: string
                    role: 'user' | 'assistant'
                    language?: 'en' | 'ha'
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string | null
                    session_id?: string
                    message?: string
                    role?: 'user' | 'assistant'
                    language?: 'en' | 'ha'
                    created_at?: string
                }
            }
            volunteer_applications: {
                Row: {
                    id: string
                    user_id: string
                    state: string
                    reason: string
                    status: 'pending' | 'approved' | 'rejected'
                    reviewed_by: string | null
                    review_notes: string | null
                    created_at: string
                    reviewed_at: string | null
                }
                Insert: {
                    id?: string
                    user_id: string
                    state: string
                    reason: string
                    status?: 'pending' | 'approved' | 'rejected'
                    reviewed_by?: string | null
                    review_notes?: string | null
                    created_at?: string
                    reviewed_at?: string | null
                }
                Update: {
                    id?: string
                    user_id?: string
                    state?: string
                    reason?: string
                    status?: 'pending' | 'approved' | 'rejected'
                    reviewed_by?: string | null
                    review_notes?: string | null
                    created_at?: string
                    reviewed_at?: string | null
                }
            }
            volunteer_assignments: {
                Row: {
                    id: string
                    volunteer_id: string
                    state: string
                    assigned_by: string | null
                    active: boolean
                    created_at: string
                    deactivated_at: string | null
                }
                Insert: {
                    id?: string
                    volunteer_id: string
                    state: string
                    assigned_by?: string | null
                    active?: boolean
                    created_at?: string
                    deactivated_at?: string | null
                }
                Update: {
                    id?: string
                    volunteer_id?: string
                    state?: string
                    assigned_by?: string | null
                    active?: boolean
                    created_at?: string
                    deactivated_at?: string | null
                }
            }
            report_votes: {
                Row: {
                    id: string
                    report_id: string
                    user_id: string
                    vote_type: 'up' | 'down' | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    report_id: string
                    user_id: string
                    vote_type?: 'up' | 'down' | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    report_id?: string
                    user_id?: string
                    vote_type?: 'up' | 'down' | null
                    created_at?: string
                }
            }
            forum_threads: {
                Row: {
                    id: string
                    category: string
                    title: string
                    content: string
                    author_id: string | null
                    created_at: string
                    pinned: boolean
                    locked: boolean
                }
                Insert: {
                    id?: string
                    category: string
                    title: string
                    content: string
                    author_id?: string | null
                    created_at?: string
                    pinned?: boolean
                    locked?: boolean
                }
                Update: {
                    id?: string
                    category?: string
                    title?: string
                    content?: string
                    author_id?: string | null
                    created_at?: string
                    pinned?: boolean
                    locked?: boolean
                }
            }
            forum_comments: {
                Row: {
                    id: string
                    thread_id: string
                    parent_id: string | null
                    content: string
                    author_id: string | null
                    created_at: string
                    hidden: boolean
                }
                Insert: {
                    id?: string
                    thread_id: string
                    parent_id?: string | null
                    content: string
                    author_id?: string | null
                    created_at?: string
                    hidden?: boolean
                }
                Update: {
                    id?: string
                    thread_id?: string
                    parent_id?: string | null
                    content?: string
                    author_id?: string | null
                    created_at?: string
                    hidden?: boolean
                }
            }
            forum_reactions: {
                Row: {
                    id: string
                    thread_id: string | null
                    comment_id: string | null
                    user_id: string
                    reaction_type: string
                    created_at: string
                }
                Insert: {
                    id?: string
                    thread_id?: string | null
                    comment_id?: string | null
                    user_id: string
                    reaction_type: string
                    created_at?: string
                }
                Update: {
                    id?: string
                    thread_id?: string | null
                    comment_id?: string | null
                    user_id?: string
                    reaction_type?: string
                    created_at?: string
                }
            }
            notifications: {
                Row: {
                    id: string
                    user_id: string
                    type: string
                    title: string
                    message: string
                    link: string | null
                    read: boolean
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    type: string
                    title: string
                    message: string
                    link?: string | null
                    read?: boolean
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    type?: string
                    title?: string
                    message?: string
                    link?: string | null
                    read?: boolean
                    created_at?: string
                }
            }
            verification_logs: {
                Row: {
                    id: string
                    report_id: string
                    verified_by: string | null
                    verification_level: string
                    evidence_added: Json | null
                    notes: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    report_id: string
                    verified_by?: string | null
                    verification_level: string
                    evidence_added?: Json | null
                    notes?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    report_id?: string
                    verified_by?: string | null
                    verification_level?: string
                    evidence_added?: Json | null
                    notes?: string | null
                    created_at?: string
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            user_role_type: 'admin' | 'supervisor' | 'agent' | 'volunteer'
            role_status_type: 'pending' | 'approved' | 'rejected'
            report_status_type: 'pending' | 'investigating' | 'resolved' | 'rejected'
            urgency_type: 'low' | 'medium' | 'high' | 'critical'
            evidence_type: 'image' | 'video' | 'document'
            chat_role_type: 'user' | 'assistant'
            language_type: 'en' | 'ha'
            stakeholder_type: 'traditional' | 'religious' | 'government'
            resource_type: 'pdf' | 'video' | 'audio'
            access_level_type: 'public' | 'staff'
            case_status_type: 'open' | 'mediation' | 'resolved' | 'escalated'
            event_type_enum: 'town_hall' | 'training' | 'workshop' | 'dialogue'
            task_status_type: 'pending' | 'in_progress' | 'completed'
            task_priority_type: 'low' | 'medium' | 'high'
            publication_type_enum: 'research_paper' | 'policy_brief' | 'report'
            publication_status_enum: 'draft' | 'review' | 'published'
            legal_status_type: 'filed' | 'ongoing' | 'concluded'
        }
    }
}
