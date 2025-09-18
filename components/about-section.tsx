import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, Users, Lightbulb } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Enfoque en Resultados",
      description: "Nos comprometemos a entregar soluciones que generen valor real para tu negocio.",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboramos estrechamente contigo en cada etapa del proyecto.",
    },
    {
      icon: Lightbulb,
      title: "Innovación Constante",
      description: "Utilizamos las tecnologías más avanzadas y mejores prácticas del mercado.",
    },
  ]

  const achievements = [
    "Más de 100 proyectos exitosos",
    "98% de satisfacción del cliente",
    "Equipo certificado en tecnologías líderes",
    "Soporte técnico 24/7",
  ]

  return (
    <section id="nosotros" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* === CAMBIO 1: Ajuste del grid principal === */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          
          {/* === CAMBIO 2: La columna de contenido ahora ocupa 3 de 5 partes === */}
          <div className="lg:col-span-3">
            <Badge variant="secondary" className="mb-4">
              Sobre CodeFlash
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-[#080138] dark:invert">
              Nuestro objetivo es ayudar a las empresas
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              En CodeFlash, somos un equipo apasionado de desarrolladores y diseñadores que transformamos ideas
              innovadoras en soluciones digitales exitosas. Nuestra misión es ayudar a empresas
              pequeñas y medianas, a crecer mediante soluciones tecnológicas personalizadas y eficientes.
            </p>

            {/* Values (sin cambios en su estructura interna) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="flex items-start sm:items-center space-x-3 mb-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#b89b09]/10 rounded-lg">
                      <value.icon className="w-5 h-5 text-[#b89b09]" />
                    </div>
                    <h3 className="font-semibold text-primary">{value.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground pl-14 sm:pl-0">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* === CAMBIO 3: La columna de la imagen ahora ocupa 2 de 5 partes === */}
          <div className="relative lg:col-span-2">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-gradient-to-br from-accent/20 via-primary/10 to-muted flex items-center justify-center">
                  <Image
                    src="/img/about.png"
                    alt="Equipo de CodeFlash trabajando en proyectos innovadores"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
