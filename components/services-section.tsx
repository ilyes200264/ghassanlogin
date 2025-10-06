import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Heart, Users, HandHeart, GraduationCap, Calendar } from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "Cours d'Arabe",
    description: "Apprentissage de la langue arabe pour enfants et adultes, du niveau débutant au niveau avancé.",
    details: [
      "Cours pour enfants et jeunes",
      "Apprentissage de l'alphabet",
      "Grammaire et vocabulaire",
      "Expression orale et écrite",
    ],
  },
  {
    icon: GraduationCap,
    title: "Cours de Coran",
    description: "Mémorisation et récitation du Coran avec apprentissage des règles de Tajwid.",
    details: ["Mémorisation du Coran", "Règles de Tajwid", "Valeurs islamiques", "Encadrement spirituel"],
  },
  {
    icon: Heart,
    title: "Mariages Religieux",
    description: "Célébration de mariages selon les traditions islamiques avec accompagnement complet.",
    details: ["Cérémonie religieuse", "Conseil pré-matrimonial", "Documentation", "Accompagnement spirituel"],
  },
  {
    icon: HandHeart,
    title: "Aide Communautaire",
    description: "Soutien et entraide pour les familles dans le besoin et les nouveaux arrivants.",
    details: ["Aide alimentaire", "Soutien aux familles", "Accompagnement administratif", "Orientation sociale"],
  },
  {
    icon: Users,
    title: "Activités Jeunesse",
    description: "Programmes éducatifs et récréatifs pour les jeunes dans un cadre islamique.",
    details: ["Camps de jour", "Activités parascolaires", "Développement personnel", "Sorties éducatives"],
  },
  {
    icon: Calendar,
    title: "Événements Communautaires",
    description: "Organisation d'événements et de célébrations pour renforcer les liens communautaires.",
    details: ["Fêtes de l'Aïd", "Conférences", "Repas communautaires", "Rencontres sociales"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nos Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Découvrez l'ensemble de nos services dédiés à l'épanouissement spirituel, éducatif et social de notre
            communauté
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
