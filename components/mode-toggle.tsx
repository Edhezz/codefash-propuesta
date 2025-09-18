"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { Sun, Moon } from "lucide-react"

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Mostramos un esqueleto para que el layout no salte mientras carga en el cliente.
  // Es un div vacío con el tamaño aproximado del componente final.
  if (!mounted) {
    return <div className="w-[74px] h-[32px]" />
  }

  const isDarkMode = resolvedTheme === "dark"

  return (
    <div className="flex items-center justify-center gap-2 rounded-full p-1 bg-slate-200 dark:bg-slate-800">
      {/* <Sun className="h-5 w-5 text-slate-500" /> */}
      {/* Usamos un div relativo para posicionar los iconos DENTRO del switch */}
      <div className="relative flex items-center">
        <Switch
          checked={isDarkMode}
          onCheckedChange={() => setTheme(isDarkMode ? "light" : "dark")}
          className="h-6 w-11 data-[state=checked]:bg-slate-600 data-[state=unchecked]:bg-slate-300"
        />
        {/*
          Los iconos se posicionan de forma absoluta sobre el switch.
          Usamos las clases de Tailwind y 'dark:' para mostrar uno u otro.
        */}
        <div className="absolute left-1 pointer-events-none">
          <Sun className="h-4 w-4 text-yellow-500 transition-transform duration-300 transform scale-100 dark:scale-0" />
        </div>
        <div className="absolute right-2 pointer-events-none">
          <Moon className="h-4 w-4 text-blue-400 transition-transform duration-300 transform scale-0 dark:scale-100" />
        </div>
      </div>
      {/* <Moon className="h-5 w-5 text-slate-500" /> */}
    </div>
  )
}