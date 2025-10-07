"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/components/auth-provider'
import { SupabaseConfigAlert } from '@/components/supabase-config-alert'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Users, Calendar, Heart } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  }, [user, router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Header */}
      <div className="relative z-10 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-xl">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Centre Communautaire</h1>
                <p className="text-sm text-muted-foreground">de Salaberry-de-Valleyfield</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          <SupabaseConfigAlert />
          
          {/* Login Card */}
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-4 text-center pb-8">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Bienvenue !
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground mt-2">
                  Connectez-vous pour accéder à votre espace membre
                </CardDescription>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <Auth
                supabaseClient={supabase}
                appearance={{
                  theme: ThemeSupa,
                  variables: {
                    default: {
                      colors: {
                        brand: 'hsl(var(--primary))',
                        brandAccent: 'hsl(var(--primary))',
                        brandButtonText: 'white',
                        defaultButtonBackground: 'hsl(var(--primary))',
                        defaultButtonBackgroundHover: 'hsl(var(--primary))',
                        defaultButtonBorder: 'transparent',
                        defaultButtonText: 'white',
                        inputBackground: 'hsl(var(--background))',
                        inputBorder: 'hsl(var(--border))',
                        inputBorderHover: 'hsl(var(--primary))',
                        inputBorderFocus: 'hsl(var(--primary))',
                        inputText: 'hsl(var(--foreground))',
                        inputLabelText: 'hsl(var(--foreground))',
                        inputPlaceholder: 'hsl(var(--muted-foreground))',
                        messageText: 'hsl(var(--foreground))',
                        messageTextDanger: 'hsl(var(--destructive))',
                        anchorTextColor: 'hsl(var(--primary))',
                        anchorTextHoverColor: 'hsl(var(--primary))',
                      },
                      space: {
                        spaceSmall: '0.5rem',
                        spaceMedium: '1rem',
                        spaceLarge: '1.5rem',
                        labelBottomMargin: '0.5rem',
                        anchorBottomMargin: '0.5rem',
                        emailInputMargin: '0.5rem',
                        socialAuthSpacing: '0.5rem',
                        buttonPadding: '0.875rem 1rem',
                        inputPadding: '0.75rem 1rem',
                      },
                      fontSizes: {
                        baseBodySize: '14px',
                        baseInputSize: '14px',
                        baseLabelSize: '14px',
                        baseButtonSize: '15px',
                      },
                      fonts: {
                        bodyFontFamily: 'inherit',
                        buttonFontFamily: 'inherit',
                        inputFontFamily: 'inherit',
                        labelFontFamily: 'inherit',
                      },
                      borderWidths: {
                        buttonBorderWidth: '0px',
                        inputBorderWidth: '1px',
                      },
                      radii: {
                        borderRadiusButton: '0.75rem',
                        buttonBorderRadius: '0.75rem',
                        inputBorderRadius: '0.5rem',
                      },
                    },
                  },
                  className: {
                    container: 'space-y-4',
                    button: 'bg-primary text-primary-foreground hover:bg-primary/90 h-11 font-medium w-full',
                    input: 'bg-background border-border h-11',
                    label: 'text-foreground',
                    anchor: 'text-primary hover:underline',
                    loader: 'text-primary',
                  },
                }}
                providers={[]}
                redirectTo={`${typeof window !== 'undefined' ? window.location.origin : ''}/dashboard`}
                onlyThirdPartyProviders={false}
              />
            </CardContent>
          </Card>

          {/* Features */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-2">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-xs text-muted-foreground">Événements</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-xs text-muted-foreground">Communauté</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-2">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-xs text-muted-foreground">Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
