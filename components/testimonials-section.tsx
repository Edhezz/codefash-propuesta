"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      position: "CEO, TechStart",
      company: "TechStart",
      content:
        "CodeFlash transformó completamente nuestra presencia digital. Su equipo no solo entregó una aplicación excepcional, sino que también nos guió durante todo el proceso con profesionalismo y expertise.",
      rating: 5,
      avatar: "/placeholder-io7yf.png",
    },
    {
      name: "Carlos Rodríguez",
      position: "Director de IT",
      company: "InnovateCorp",
      content:
        "La calidad del código y la atención al detalle de CodeFlash es impresionante. Nuestro e-commerce ha aumentado las ventas en un 300% desde el lanzamiento.",
      rating: 5,
      avatar: "/placeholder-7yr6f.png",
    },
    {
      name: "Ana Martínez",
      position: "Fundadora",
      company: "HealthTech Solutions",
      content:
        "Trabajar con CodeFlash fue una experiencia increíble. Su enfoque en UX/UI resultó en una aplicación que nuestros usuarios adoran. Altamente recomendados.",
      rating: 5,
      avatar: "/professional-woman-founder-smiling.jpg",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonios" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            La satisfacción de nuestros clientes es nuestra mayor recompensa
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center justify-between mb-8">
                <Quote className="w-8 h-8 text-accent/30" />
                <div className="flex space-x-1">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
              </div>

              <blockquote className="text-lg lg:text-xl text-foreground mb-8 leading-relaxed text-pretty">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-primary">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="rounded-full bg-transparent"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full bg-transparent"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-accent" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
