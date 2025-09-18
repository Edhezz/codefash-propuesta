"use client"

import type React from "react"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          form.current,
          "YOUR_PUBLIC_KEY"
        )
        .then(
          (result) => {
            console.log(result.text)
            setStatusMessage("Mensaje enviado con éxito!")
            setFormData({ name: "", email: "", company: "", message: "" })
          },
          (error) => {
            console.log(error.text)
            setStatusMessage("Hubo un error al enviar el mensaje.")
          }
        )
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    if (name === "name") {
      // Prevenir la entrada de números en el campo de nombre
      const onlyLetters = value.replace(/[0-9]/g, "")
      setFormData((prev) => ({
        ...prev,
        [name]: onlyLetters,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hola@codeflash.dev",
      link: "mailto:herreraperezedgar87@gmail.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+52 (55) 1234-5678",
      link: "tel:+525512345678",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Ciudad de México, México",
      link: "#",
    },
  ]

  return (
    <section id="contacto" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#080138] dark:invert">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Contáctanos hoy y descubre cómo podemos ayudarte a transformar tu
            idea en realidad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Envíanos un mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Empresa (opcional)</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar mensaje
                </Button>
                {statusMessage && <p className="text-center mt-4">{statusMessage}</p>}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Información de contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-[#b89b09]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">
                        {info.title}
                      </h4>
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}