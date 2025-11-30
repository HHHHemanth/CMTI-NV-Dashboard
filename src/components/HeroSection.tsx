// ./components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import DarkVeil from "./DarkVeil";
import TrueFocus from "./TrueFocus";
import { Activity, BellElectric, ToolCase } from "lucide-react";

export default function HeroSection({ itemVariants }: { itemVariants: any }) {
  return (
    <motion.div variants={itemVariants} className="relative overflow-hidden">
      <div className="glass-panel p-12 rounded-2xl border border-primary/20 relative overflow-hidden">
        
        {/* Strong internal glow */}
        <div
          className="
            absolute inset-0 pointer-events-none
            bg-gradient-to-br
            from-primary/40 via-secondary/30 to-accent/40
            opacity-70
            blur-3xl
            rounded-2xl
            mix-blend-overlay
          "
        />

        {/* Dark veil animation */}
        <div className="absolute inset-0 pointer-events-none -z-0">
          <DarkVeil />
        </div>

        {/* Content */}
        <div className="space-y-4 relative z-10">

          <TrueFocus 
            sentence="N&V Lab Dashboard"
            manualMode={false}
            blurAmount={3}
            borderColor="white"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />

          <motion.p
            className="text-lg text-white max-w-2xl justify-self-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Personalized analytics and visualization dashboard is ready to go.
          </motion.p>

          {/* Features below title */}
          <motion.div
            className="gap-3 pt-4 content-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-primary text-sm font-medium mt-4"
              whileHover={{ scale: 1.05 }}
            >
              <Activity className="w-4 h-4" />
              Real-Time Sensor Data
            </motion.div>

            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-primary text-sm font-medium mt-4"
              whileHover={{ scale: 1.05 }}
            >
              <BellElectric className="w-4 h-4" />
              Anomaly Detection
            </motion.div>

            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-primary text-sm font-medium mt-4"
              whileHover={{ scale: 1.05 }}
            >
              <ToolCase className="w-4 h-4" />
              Predictive Maintenance
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
