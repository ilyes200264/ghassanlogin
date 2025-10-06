import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section id="accueil" className="relative bg-gradient-to-br from-accent/20 to-secondary/30 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Centre Communautaire
            <span className="text-primary block">de Salaberry</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Un lieu d'apprentissage, de spiritualité et d'entraide pour la communauté musulmane de Montréal
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-3">
              Découvrir nos services
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              Nous contacter
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>1693 Rue de Salaberry, Montréal</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Phone className="h-5 w-5 text-primary" />
              <span>À venir</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Clock className="h-5 w-5 text-primary" />
              <span>Horaires variables</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
