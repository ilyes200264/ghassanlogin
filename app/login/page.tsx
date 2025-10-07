"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/components/auth-provider'
import { SupabaseConfigAlert } from '@/components/supabase-config-alert'

export default function LoginPage() {
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  }, [user, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <SupabaseConfigAlert />
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-foreground">
            Connexion
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Connectez-vous à votre compte du Centre Communautaire de Salaberry
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: 'hsl(var(--primary))',
                    brandAccent: 'hsl(var(--primary))',
                  },
                },
              },
            }}
            providers={[]}
            redirectTo={`${typeof window !== 'undefined' ? window.location.origin : ''}/dashboard`}
            onlyThirdPartyProviders={false}
          />
        </div>
      </div>
    </div>
  )
}
