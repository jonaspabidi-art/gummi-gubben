import { createClient, SupabaseClient } from "@supabase/supabase-js";

export type BookingTier = "personbil" | "suv" | "transport";

export interface Booking {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  phone: string;
  tier: BookingTier;
  preferred_date: string;
  reg_number: string;
  notes?: string;
}

let _client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!_client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) {
      throw new Error(
        "Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local"
      );
    }
    _client = createClient(url, key);
  }
  return _client;
}
