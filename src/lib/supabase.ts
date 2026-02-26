import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tahwltiqjdccqmeighds.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhaHdsdGlxamRjY3FtZWlnaGRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2MTQ0NDksImV4cCI6MjA4NTE5MDQ0OX0.8iqvHtku-076w8cRegXN_YCK1hNWsjZDU9mn9a-drr8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
