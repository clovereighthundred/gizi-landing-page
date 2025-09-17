import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;

// Client used ONLY for calling edge functions, not writing directly to DB
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
