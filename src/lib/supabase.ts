import { createClient } from '@supabase/supabase-js'
import type { DatabaseDefinition } from '../types/database'

const supabaseUrl = process.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient<DatabaseDefinition>(supabaseUrl, supabaseAnonKey)