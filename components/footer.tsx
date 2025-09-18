import { Github, Linkedin, Twitter, Mail, X } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    servicios: [
      { name: "Desarrollo Web", href: "" },
      { name: "Apps Móviles", href: "#" },
      { name: "UI/UX Design", href: "#" },
    ],
    empresa: [
      { name: "Sobre nosotros", href: "#nosotros" },
      { name: "Nuestro equipo", href: "#" },
    ],
    recursos: [
      { name: "Documentación", href: "#" },
      { name: "Casos de estudio", href: "#" },
      { name: "Soporte", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: X, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:herreraperezedgar87@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground dark:invert">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Code<span className="text-accent">Flash</span>
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Transformamos ideas en soluciones digitales innovadoras. Tu socio tecnológico de confianza para el
              crecimiento empresarial.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} CodeFlash. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
