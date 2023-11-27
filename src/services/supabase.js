
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://wdwznoallloxucwhdjox.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indkd3pub2FsbGxveHVjd2hkam94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwOTU3NjIsImV4cCI6MjAxNjY3MTc2Mn0.bBYaDhT6XzcrEfLfsIFWVdHP_3ZFGtbxFGMc7Ojpet4"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;