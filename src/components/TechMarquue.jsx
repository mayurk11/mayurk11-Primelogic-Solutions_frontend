import React from "react";

export default function TechMarquee() {
  const items = [
    "Web Development",
    "App Development",
    "Saas Platforms",
    "AI/Ml",
    "Chatbots",
    "Mobile Apps",
    "Cyber security",
    "Custom Software",
  ];

  return (
    <div className="overflow-hidden bg-[#3F3A77] py-4">
      <div className="flex gap-16 whitespace-nowrap animate-marquee text-white text-xl font-semibold">
        {items.map((item, index) => (
          <span key={index}>{item} </span>
        ))}
        {/* duplicate items for infinite loop */}
        {items.map((item, index) => (
          <span key={index + items.length}>{item} *</span>
        ))}
      </div>
    </div>
  );
}
