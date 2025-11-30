// ./components/ContactUs.tsx
"use client";

import FlowingMenu from "./FlowingMenu";

export default function ContactUs() {
  const contactItems = [
    {
      link: "tel:+9100000000",
      text: "Phone",               // outer label
      innerText: "+91 90000 00000",// inner flowing text
      image: "/images/callLogo.png",
    },
    {
      link: "mailto:cmtiNV@gmail.com",
      text: "Email",
      innerText: "cmtiNV@gmail.com",
      image: "/images/mailLogo.png",
    },
    {
      link: "#",
      text: "LinkedIn",
      innerText: "CMTI N&V",
      image: "/images/linkedLogo.png",
    },
  ];

  return (
    <section id="contact-us" className="w-full max-w-5xl mx-auto py-20 space-y-8">
      <div className="relative h-[300px] rounded-xl overflow-hidden backdrop-blur-md">
        <FlowingMenu items={contactItems} />
      </div>

      <div className="text-center mb-6">
        <p className="text-muted-foreground mb-10">Get in touch with the CMTI N&V team</p>
      </div>
    </section>
  );
}
