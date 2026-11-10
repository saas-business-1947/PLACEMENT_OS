import { createClient } from '@supabase/supabase-js'

// These are injected via Vite env variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
// Ensure you have .env with: VITE_SUPABASE_URL=... & VITE_SUPABASE_ANON_KEY=...
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase credentials missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    storage: localStorage,
  },
})