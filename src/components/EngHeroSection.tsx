// ./components/EngHeroSection.tsx
"use client";

import { motion } from "framer-motion";
import {GridScan} from './GridScan';
import TrueFocus from "./TrueFocus";
import FuzzyText from './FuzzyText';
import { PlugZap, ChartArea, ToolCase } from "lucide-react";

export default function EngHeroSection({ itemVariants }: { itemVariants: any }) {
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
            <GridScan
    sensitivity={0.55}
    lineThickness={1}
    linesColor="#0030C2"
    gridScale={0.1}
    scanColor="#8BE7FE"
    scanOpacity={0.4}
    enablePost
    bloomIntensity={0.6}
    chromaticAberration={0.002}
    noiseIntensity={0.01}
  />
        </div>

        {/* Content */}
        <div className="space-y-4 relative z-10 ">
<div className="text-center flex justify-center">
  <FuzzyText 
    fontSize="4rem"
    fontWeight={900}
    baseIntensity={0.08}
    hoverIntensity={0.2}
    enableHover={true}
  >
    Energy Analysis
  </FuzzyText>
</div>



          <motion.p
            className="text-lg text-white max-w-2xl justify-self-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Gain real-time visibility into your electrical system with actionable insights.
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
              <PlugZap className="w-4 h-4"/>
              Real-Time Electrical Monitoring
            </motion.div>

            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-primary text-sm font-medium mt-4"
              whileHover={{ scale: 1.05 }}
            >
              
              <ChartArea className="w-4 h-4"/>
              Dynamic Trend Graphs
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
