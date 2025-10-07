import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Vérification pour le développement
if (process.env.NODE_ENV === 'development') {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.warn('⚠️  Variables d\'environnement Supabase manquantes!')
    console.warn('Créez un fichier .env.local avec:')
    console.warn('NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase')
    console.warn('NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon_supabase')
  }
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
