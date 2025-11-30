"use client"

import { useCallback, useEffect, useState } from "react"

type Theme = "light" | "dark"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark")
  const [isLoaded, setIsLoaded] = useState(false)

  // Initialize theme on mount
  useEffect(() => {
    const initializeTheme = () => {
      try {
        const savedTheme = localStorage.getItem("cmti_theme") as Theme | null
        let initialTheme: Theme = savedTheme || "dark"

        // Respect system preference on first load if not saved
        if (!savedTheme && window.matchMedia && !isLoaded) {
          const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
          initialTheme = prefersDark ? "dark" : "light"
        }

        setTheme(initialTheme)
        applyTheme(initialTheme)
        setIsLoaded(true)
      } catch (error) {
        console.error("Failed to initialize theme:", error)
        setIsLoaded(true)
      }
    }

    initializeTheme()
  }, [isLoaded])

  const applyTheme = useCallback((newTheme: Theme) => {
    const html = document.documentElement
    if (newTheme === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark"
      localStorage.setItem("cmti_theme", newTheme)
      applyTheme(newTheme)
      return newTheme
    })
  }, [applyTheme])

  return {
    theme,
    toggleTheme,
    isLoaded,
  }
}
