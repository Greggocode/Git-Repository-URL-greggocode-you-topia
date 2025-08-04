import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a dummy client if environment variables are not set
// This prevents the app from crashing when Supabase is not configured
export const supabase = SUPABASE_URL && SUPABASE_ANON_KEY 
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : {
      auth: {
        session: () => null,
        onAuthStateChange: () => ({ data: { unsubscribe: () => {} } }),
        signIn: () => Promise.resolve({ user: null, error: { message: 'Supabase not configured' } }),
        signUp: () => Promise.resolve({ user: null, error: { message: 'Supabase not configured' } }),
        signOut: () => Promise.resolve({ error: null })
      }
    };