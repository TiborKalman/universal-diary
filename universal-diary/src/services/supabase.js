import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mvvdpzqfitakvqzuedzj.supabase.co";
const supabaseKey =
  "Please create your own key";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
