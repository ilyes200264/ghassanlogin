"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/auth-provider'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  LogOut, 
  User, 
  Calendar, 
  Settings, 
  Bell, 
  TrendingUp, 
  Users2, 
  Activity,
  Star,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Building2
} from 'lucide-react'
import { LoadingPage } from '@/components/ui/loading-spinner'

export default function DashboardPage() {
  const router = useRouter()
  const { user, loading, signOut } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  if (loading) {
    return <LoadingPage message="Chargement de votre espace..." />
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-primary to-primary/80 rounded-2xl">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                <p className="text-sm text-muted-foreground">Centre Communautaire de Salaberry</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="relative">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </Button>
              <Button onClick={handleSignOut} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl p-8 border border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Bonjour, {user.email?.split('@')[0]} ! 👋
                </h2>
                <p className="text-muted-foreground text-lg">
                  Bienvenue dans votre espace membre du centre communautaire
                </p>
                <div className="flex items-center mt-4 space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Membre depuis {new Date(user.created_at).toLocaleDateString('fr-FR')}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-yellow-500" />
                    Membre actif
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center">
                  <User className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Profil</CardTitle>
              <div className="p-2 bg-blue-100 rounded-lg">
                <User className="h-4 w-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{user.email}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Compte vérifié
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Événements</CardTitle>
              <div className="p-2 bg-green-100 rounded-lg">
                <Calendar className="h-4 w-4 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">3</div>
              <p className="text-xs text-muted-foreground mt-1">
                Prochains événements
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Activité</CardTitle>
              <div className="p-2 bg-purple-100 rounded-lg">
                <Activity className="h-4 w-4 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12</div>
              <p className="text-xs text-muted-foreground mt-1">
                Participations ce mois
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Communauté</CardTitle>
              <div className="p-2 bg-orange-100 rounded-lg">
                <Users2 className="h-4 w-4 text-orange-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">247</div>
              <p className="text-xs text-muted-foreground mt-1">
                Membres actifs
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Actions rapides
                </CardTitle>
                <CardDescription>
                  Accédez rapidement aux services du centre communautaire
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto p-4 justify-start hover:bg-primary/5 hover:border-primary/20 transition-all">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Calendar className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium">Voir les événements</div>
                        <div className="text-sm text-muted-foreground">Calendrier des activités</div>
                      </div>
                      <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground" />
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="h-auto p-4 justify-start hover:bg-primary/5 hover:border-primary/20 transition-all">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <User className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium">Modifier le profil</div>
                        <div className="text-sm text-muted-foreground">Informations personnelles</div>
                      </div>
                      <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground" />
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="h-auto p-4 justify-start hover:bg-primary/5 hover:border-primary/20 transition-all">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Settings className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium">Paramètres</div>
                        <div className="text-sm text-muted-foreground">Préférences du compte</div>
                      </div>
                      <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground" />
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="h-auto p-4 justify-start hover:bg-primary/5 hover:border-primary/20 transition-all">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Bell className="h-5 w-5 text-orange-600" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium">Notifications</div>
                        <div className="text-sm text-muted-foreground">Gérer les alertes</div>
                      </div>
                      <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground" />
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-primary" />
                  Activité récente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50/50">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Calendar className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Inscription à l'événement</p>
                      <p className="text-xs text-muted-foreground">Atelier de cuisine - 15 janvier</p>
                    </div>
                    <span className="text-xs text-muted-foreground">Il y a 2h</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-green-50/50">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <User className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Profil mis à jour</p>
                      <p className="text-xs text-muted-foreground">Informations de contact</p>
                    </div>
                    <span className="text-xs text-muted-foreground">Il y a 1 jour</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MapPin className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Adresse</p>
                    <p className="text-xs text-muted-foreground">123 Rue Principale<br />Salaberry-de-Valleyfield</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Phone className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Téléphone</p>
                    <p className="text-xs text-muted-foreground">(450) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Mail className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <p className="text-xs text-muted-foreground">info@centresalaberry.ca</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Prochains événements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">Atelier de cuisine</p>
                      <p className="text-xs text-muted-foreground">15 janvier 2024</p>
                    </div>
                    <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      Inscrit
                    </div>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">Réunion communautaire</p>
                      <p className="text-xs text-muted-foreground">22 janvier 2024</p>
                    </div>
                    <div className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      Disponible
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
