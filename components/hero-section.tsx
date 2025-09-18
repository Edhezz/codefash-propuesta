import { Zap } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Fondos y efectos visuales (sin cambios) */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-[#1771F1]/10" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1771F1]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Contenedor Principal: Ahora es un Flex Container */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left">
        
        {/* === Columna 1: Texto === */}
        <div className="w-full lg:w-1/2 lg:pr-8">

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#b89b09] mb-6 leading-tight text-balance">
            Transformamos tus <span className="text-[#080138] dark:invert">ideas</span> en Software
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-pretty">
            Desarrollamos aplicaciones web y móviles innovadoras que impulsan el crecimiento de tu negocio con
            tecnología de última generación.
          </p>
        </div>

        {/* === Columna 2: Imagen === */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <Image 
            src="/img/banner.png" 
            alt="Ilustración de desarrollo de software y tecnología" 
            width={700}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  )
}