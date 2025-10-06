import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="a-propos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">À Propos du Centre</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="text-pretty">
                Le Centre Communautaire de Salaberry est un lieu d'accueil chaleureux dédié à la communauté musulmane de
                Montréal. Situé au cœur du quartier, nous offrons un espace de spiritualité, d'apprentissage et
                d'entraide.
              </p>
              <p className="text-pretty">
                Notre mission est d'accompagner les familles dans leur épanouissement spirituel et social, tout en
                préservant les valeurs islamiques et en favorisant l'intégration harmonieuse dans la société québécoise.
              </p>
              <p className="text-pretty">
                Nous croyons en l'importance de l'éducation, de la solidarité et du partage pour construire une
                communauté forte et unie.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Notre Vision</h3>
                <p className="text-muted-foreground text-pretty">
                  Être un centre de référence pour la communauté musulmane, offrant des services de qualité dans un
                  environnement respectueux des valeurs islamiques et ouvert sur la société.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Nos Valeurs</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    Respect et tolérance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    Solidarité communautaire
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    Excellence éducative
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    Ouverture et dialogue
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
