// ./components/CaseStudy.tsx
"use client";

import React from "react";
import CardSwap, { Card } from "./CardSwap";
import Image from "next/image";
import Link from "next/link";
import BlurText from "./BlurText";
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
type Case = {
  id: number;
  title: string;
  subtitle?: string;
  image: string; // public path, e.g. /images/case-1.jpg
  href?: string;
  summary?: string;
};

const CASES: Case[] = [
  {
    id: 1,
    title: "Power Optimization — Plant A",
    subtitle: "3-phase analytics & anomaly detection",
    image: "/images/case1img.png",
    href: "/case/power-plant-a",
    summary:
      "Deployed adaptive sampling and real-time alerts to reduce downtime and improve power factor — 12% energy savings.",
  },
  {
    id: 2,
    title: "Thermal Management — Data Center",
    subtitle: "Radiometric monitoring & alerting",
    image: "/images/case2img.png",
    href: "/case/data-center",
    summary:
      "Integrated thermal sensors and predictive thresholds to avoid hotspots and maintain SLA temperatures.",
  },
  {
    id: 3,
    title: "Vibration Analytics — Manufacturing",
    subtitle: "Continuous vibration signature analysis",
    image: "/images/case3img.png",
    href: "/case/vibration-analytics",
    summary:
      "Early fault detection reduced unplanned maintenance by 38% and extended bearing life across the line.",
  },
];

export default function CaseStudy() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12" aria-labelledby="case-study-heading">

      {/* 🔥 FLEX ROW ON LARGE SCREENS */}
      <div className="lg:flex lg:items-start lg:justify-between gap-10">

        {/* LEFT SIDE → Title */}
        <div className="mb-8 lg:mb-0 lg:w-auto mt-40">
<BlurText
  text="Case Studies"
  delay={300}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-5xl mb-10 font-bold mt-20"
/>

          <p className="text-muted-foreground mt-1">
            Real deployments that show how
          </p>
          <p className="text-muted-foreground mt-0.5">
            our monitoring platform improves uptime and reduces cost.
          </p>
        </div>

        {/* RIGHT SIDE → CardSwap */}
        <div className="lg:flex-grow">
          <div style={{ height: 520, position: "relative" }}>
            <CardSwap
              cardDistance={70}
              verticalDistance={80}
              delay={4200}
              pauseOnHover={true}
            >
              {CASES.map((c) => (
                <Card key={c.id} customClass="w-[420px] h-[420px]">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-card">
                    
                    <div className="relative w-full h-[220px]">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 420px"
                        className="object-cover"
                      />
                    </div>

                    <div className="p-4 text-left">
                      <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                      {c.subtitle && (
                        <div className="text-xs text-muted-foreground mt-1">{c.subtitle}</div>
                      )}
                      <p className="text-sm text-muted-foreground mt-3 line-clamp-4">
                        {c.summary}
                      </p>


                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}

