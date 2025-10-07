"use client"

import { AlertTriangle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SupabaseConfigAlert() {
  const isSupabaseConfigured = process.env.NEXT_PUBLIC_SUPABASE_URL && 
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co'

  if (isSupabaseConfigured) {
    return null
  }

  return (
    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 mb-6 shadow-lg">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">
            Configuration Supabase requise
          </h3>
          <div className="text-sm text-yellow-700 mb-4">
            <p className="mb-3">
              Pour utiliser l'authentification, créez un fichier <code className="bg-yellow-100 px-2 py-1 rounded text-xs font-mono">.env.local</code> avec les variables suivantes :
            </p>
            <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-200">
              <pre className="text-xs text-yellow-800 whitespace-pre-wrap">
{`NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon_supabase`}
              </pre>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-yellow-300 text-yellow-700 hover:bg-yellow-100"
              onClick={() => window.open('https://supabase.com', '_blank')}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Créer un projet Supabase
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
