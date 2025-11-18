import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://lqaubwoegnisbnuqaewd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxYXVid29lZ25pc2JudXFhZXdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0MjI5NDYsImV4cCI6MjA3ODk5ODk0Nn0.ux1_k3ME3YTN2TcXvd47nEm4xRWeLE8hjN1UTZqZep4"
);