import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Cloud, Database, ShoppingCart, Palette, ArrowRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas y responsivas con las últimas tecnologías como React, Next.js y Node.js.",
    },
    {
      icon: Smartphone,
      title: "Apps Móviles",
      description: "Aplicaciones móviles nativas e híbridas para iOS y Android con experiencia de usuario excepcional.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Tiendas online completas con pasarelas de pago, gestión de inventario y analytics.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Diseños intuitivos y atractivos que mejoran la experiencia del usuario y conversiones.",
    },
  ]

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#080138] dark:invert">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos soluciones tecnológicas completas para impulsar tu negocio al siguiente nivel
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-[#b89b09]/50"
            >
              <CardHeader>
                {/* Contenedor Flex para alinear icono y título */}
                <div className="flex items-start space-x-4">
                  {/* Contenedor del icono con colores modificados */}
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[#b89b09]/10 rounded-lg group-hover:bg-[#b89b09]/20 transition-colors">
                    <service.icon className="w-6 h-6 text-[#b89b09]" />
                  </div>
                  
                  {/* Contenedor para el texto */}
                  <div>
                    <CardTitle className="text-xl text-primary mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
