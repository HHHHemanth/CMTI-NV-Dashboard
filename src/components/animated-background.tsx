"use client"

import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Large primary gradient orb - slow movement */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-primary via-primary/50 to-transparent"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 50, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          top: "-10%",
          left: "-10%",
        }}
      />

      {/* Secondary gradient orb - medium speed */}
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-25 bg-gradient-to-br from-secondary via-secondary/50 to-transparent"
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 100, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          top: "20%",
          right: "-5%",
        }}
      />

      {/* Accent gradient orb - fast movement */}
      <motion.div
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-accent via-accent/50 to-transparent"
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -100, 50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 4,
        }}
        style={{
          bottom: "10%",
          left: "10%",
        }}
      />

      {/* Additional bright accent orb */}
      <motion.div
        className="absolute w-64 h-64 rounded-full blur-2xl opacity-15 bg-gradient-to-br from-cyan-500 via-blue-500/30 to-transparent"
        animate={{
          x: [0, 120, -40, 0],
          y: [0, -80, 100, 0],
        }}
        transition={{
          duration: 28,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          bottom: "-5%",
          right: "5%",
        }}
      />

      {/* Grid pattern overlay */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/0 via-background/50 to-background/80 pointer-events-none" />
    </div>
  )
}
