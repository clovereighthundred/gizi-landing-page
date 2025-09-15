import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types.ts";

const supabaseUrl = "https://hjfskeyiyshouzkklrnt.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqZnNrZXlpeXNob3V6a2tscm50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4ODgwNTcsImV4cCI6MjA3MzQ2NDA1N30.e940kkGO4HaTmWYWEGalmIplp0ABURzhMEZwNROA0Ko";

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export default supabase;
