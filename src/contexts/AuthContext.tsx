import React, { createContext, useContext, useEffect, useState } from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import type { UserRole } from '../lib/permissions'

interface AuthContextType {
    session: Session | null
    user: User | null
    userRole: UserRole
    userStates: string[]
    loading: boolean
    signOut: () => Promise<void>
    signIn: (email: string, password: string) => Promise<void>
    signUp: (email: string, password: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
    session: null,
    user: null,
    userRole: 'citizen',
    userStates: [],
    loading: true,
    signOut: async () => { },
    signIn: async () => { },
    signUp: async () => { },
})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [session, setSession] = useState<Session | null>(null)
    const [user, setUser] = useState<User | null>(null)
    const [userRole, setUserRole] = useState<UserRole>('citizen')
    const [userStates, setUserStates] = useState<string[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            setUser(session?.user ?? null)
            if (session?.user) fetchUserRole(session.user.id)
            else setLoading(false)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            setUser(session?.user ?? null)
            if (session?.user) fetchUserRole(session.user.id)
            else {
                setUserRole('citizen')
                setUserStates([])
                setLoading(false)
            }
        })

        return () => subscription.unsubscribe()
    }, [])

    const fetchUserRole = async (userId: string) => {
        try {
            // In a real app, you'd fetch this from a 'profiles' or 'user_roles' table
            // For now, we'll mock it or check metadata
            // const { data } = await supabase.from('user_roles').select('*').eq('user_id', userId).single()

            // Mock logic for demo purposes
            setUserRole('citizen')
            setUserStates([])
        } catch (error) {
            console.error('Error fetching user role:', error)
        } finally {
            setLoading(false)
        }
    }

    const signIn = async (email: string, password: string) => {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
    }

    const signUp = async (email: string, password: string) => {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
    }

    const signOut = async () => {
        await supabase.auth.signOut()
    }

    const value = {
        session,
        user,
        userRole,
        userStates,
        loading,
        signOut,
        signIn,
        signUp,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}