"use client"

import { useState, useCallback } from "react"

export interface Notification {
  id: string
  message: string
  type: "success" | "error" | "info" | "warning"
  timestamp: number
}

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = useCallback((message: string, type: "success" | "error" | "info" | "warning" = "info") => {
    const id = Date.now().toString()
    const notification: Notification = {
      id,
      message,
      type,
      timestamp: Date.now(),
    }
    setNotifications((prev) => [...prev, notification])

    // Auto-remove after 5 seconds
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id))
    }, 5000)

    return id
  }, [])

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }, [])

  return {
    notifications,
    addNotification,
    removeNotification,
  }
}
