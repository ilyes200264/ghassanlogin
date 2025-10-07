"use client"

import { AlertTriangle } from "lucide-react"

export function SupabaseConfigAlert() {
  const isSupabaseConfigured = process.env.NEXT_PUBLIC_SUPABASE_URL && 
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co'

  if (isSupabaseConfigured) {
    return null
  }

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-yellow-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Configuration Supabase requise
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              Pour utiliser l'authentification, créez un fichier <code className="bg-yellow-100 px-1 rounded">.env.local</code> avec :
            </p>
            <pre className="mt-2 bg-yellow-100 p-2 rounded text-xs">
{`NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon_supabase`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
