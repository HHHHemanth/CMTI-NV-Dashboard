// ./components/TempHeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Aurora from './Aurora';

import ScrambledText from './ScrambledText';
import { PlugZap, ChartArea, ToolCase } from "lucide-react";
import { useRef } from 'react';
import VariableProximity from './VariableProximity';

export default function TempHeroSection({ itemVariants }: { itemVariants: any }) {
    const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <motion.div variants={itemVariants} className="relative overflow-hidden">
        {/* Dark veil animation */}


      <div className="glass-panel p-2 rounded-2xl border border-primary/20 relative overflow-hidden">
<div className="absolute inset-x-0 top-0  pointer-events-none">
<Aurora
  colorStops={["#FF9214", "#D62000", "#9E5C00"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.8}
/>
</div>
        {/* Strong internal glow */}
        <div
  className="
    absolute inset-x-0 top-0 h-[240px] z-0
    
    rounded-t-2xl
  "
/>

{/* Content (kept on top) */}
<div className=" relative z-10">
  {/* pull the title up to overlap the plasma band */}
<div
  ref={containerRef}
  className="text-center flex justify-center mt-10"
  style={{ position: 'relative', width: '100%', height: '160px' }}
>
  <VariableProximity
    label={'Temperature Analysis'}
    style={{ fontSize: "4rem", fontWeight: 900, textAlign: "center" }}
    className={'variable-proximity-demo'}
    fromFontVariationSettings="'wght' 600, 'opsz' 9"
    toFontVariationSettings="'wght' 1200, 'opsz' 40"
    containerRef={containerRef}
    radius={100}
    falloff='linear'
  />
  </div>



          <motion.p
            className="text-lg text-white max-w-2xl justify-self-center -mt-10 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Gain real-time visibility into your temperature system with actionable insights.
          </motion.p>

          {/* Features below title */}
          <motion.div
            className="gap-3 pt-4 pb-8  px-8 content-center"
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
