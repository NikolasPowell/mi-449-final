import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oqwmuvelxdzjwyqkhxym.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xd211dmVseGR6and5cWtoeHltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI2MjQ2MDIsImV4cCI6MTk5ODIwMDYwMn0.uydYJqld5PwOHCu_AweiWmNiCiOyews2ISbEUjyDYv4';

export const supabase = createClient(supabaseUrl, supabaseKey)