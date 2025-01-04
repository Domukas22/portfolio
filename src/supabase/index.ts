//
//
//

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://peqzwbqszuogacqebfev.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlcXp3YnFzenVvZ2FjcWViZmV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxNzU1MjksImV4cCI6MjA0OTc1MTUyOX0.EEObYu2snGRycJZMsZkWqWoqJld8jg-hK7u8w8Cv7JM";

export const supabase = createClient(supabaseUrl, supabaseKey);
