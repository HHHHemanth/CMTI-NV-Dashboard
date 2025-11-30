"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Save, X, AlertCircle } from "lucide-react"
import { useCallback, useState, useEffect } from "react"

interface UserDataPanelProps {
  user: { name: string; email: string } | null
  onSave: (data: { name: string; email: string }) => void
  onClose?: () => void
}

export function UserDataPanel({ user, onSave, onClose }: UserDataPanelProps) {
  const [name, setName] = useState(user?.name || "")
  const [email, setEmail] = useState(user?.email || "")
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})
  const [isSaving, setIsSaving] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const validateForm = useCallback(() => {
    const newErrors: typeof errors = {}

    if (!name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [name, email])

  const handleSave = useCallback(() => {
    if (validateForm()) {
      setIsSaving(true)
      // Simulate save delay
      setTimeout(() => {
        onSave({ name, email })
        setIsSaving(false)
      }, 300)
    }
  }, [name, email, onSave, validateForm])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        handleSave()
      }
    },
    [handleSave],
  )

  if (!isMounted) return null

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.2 }}
      className="fixed right-0 top-16 bottom-0 w-80 glass-panel border-l rounded-none z-40 flex flex-col overflow-hidden"
      role="complementary"
      aria-label="User data panel"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">Your Profile</h2>
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close panel"
            className="p-1 hover:bg-primary/10 rounded transition-colors focus-visible-ring"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
        {/* Avatar preview */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-primary-foreground">
            {name.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* Form fields */}
        <div className="space-y-4">
          {/* Name field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                if (errors.name) setErrors({ ...errors, name: undefined })
              }}
              onKeyDown={handleKeyDown}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="w-full px-3 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus-visible-ring transition-colors"
              placeholder="Enter your name"
            />
            {errors.name && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 flex items-center gap-2 text-sm text-secondary"
                id="name-error"
                role="alert"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </motion.div>
            )}
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (errors.email) setErrors({ ...errors, email: undefined })
              }}
              onKeyDown={handleKeyDown}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="w-full px-3 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus-visible-ring transition-colors"
              placeholder="Enter your email"
            />
            {errors.email && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 flex items-center gap-2 text-sm text-secondary"
                id="email-error"
                role="alert"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Footer: Save button */}
      <div className="border-t border-border p-4 flex gap-2 bg-background/50">
        <button
          onClick={handleSave}
          disabled={isSaving}
          data-testid="user-save-btn"
          aria-label="Save changes"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible-ring"
        >
          <motion.div
            animate={isSaving ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 1, repeat: isSaving ? Number.POSITIVE_INFINITY : 0 }}
          >
            <Save className="w-4 h-4" />
          </motion.div>
          {isSaving ? "Saving..." : "Save"}
        </button>
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Cancel"
            className="px-4 py-2 rounded-lg border border-border text-foreground hover:bg-border/50 transition-colors focus-visible-ring"
          >
            Cancel
          </button>
        )}
      </div>
    </motion.aside>
  )
}
