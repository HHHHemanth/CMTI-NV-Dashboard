// ./components/LoopLogoSection.tsx
"use client";

import LogoLoop from "./LogoLoop"; // <-- use exact filename / casing
import Image from "next/image";

export default function LoopLogoSection() {
  const techLogos = [
    {
      node: (
        <Image
          src="/logos/logo1.png"
          alt="React"
          width={48}
          height={48}
          className="object-contain"
        />
      ),
      title: "logo1",
      href: "#",
    },
    {
      node: (
        <Image
          src="/logos/logo2.png"
          alt="Next.js"
          width={48}
          height={48}
          className="object-contain"
        />
      ),
      title: "logo2",
      href: "#",
    },
    {
      node: (
        <Image
          src="/logos/logo3.png"
          alt="TypeScript"
          width={48}
          height={48}
          className="object-contain"
        />
      ),
      title: "logo3",
      href: "#",
    },
    {
      node: (
        <Image
          src="/logos/logo4.png"
          alt="Tailwind CSS"
          width={48}
          height={48}
          className="object-contain"
        />
      ),
      title: "logo4",
      href: "#",
    },
        {
      node: (
        <Image
          src="/logos/logo5.png"
          alt="logo5"
          width={48}
          height={48}
          className="object-contain"
        />
      ),
      title: "logo5",
      href: "#",
    },
  ];

  return (
    <section className="w-full py-16 mt-60 mb-40">
      {/* <h2 className="text-3xl font-bold text-white mb-6">Technologies We Use</h2> */}

      <div className="relative h-[100px] overflow-hidden rounded-xl">
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={60}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#0a0a0a"
          ariaLabel="Scrolling technology logos"
        />
      </div>
    </section>
  );
}
