import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Centre Communautaire de Salaberry</h3>
            <p className="text-primary-foreground/80 text-pretty">
              Un lieu d'apprentissage, de spiritualité et d'entraide pour la communauté musulmane de Montréal.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Cours d'Arabe</li>
              <li>Cours de Coran</li>
              <li>Mariages Religieux</li>
              <li>Aide Communautaire</li>
              <li>Activités Jeunesse</li>
              <li>Événements</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">1693 Rue de Salaberry, Montréal, QC</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">Numéro à venir</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">Email à venir</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">© 2025 Centre Communautaire de Salaberry. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
