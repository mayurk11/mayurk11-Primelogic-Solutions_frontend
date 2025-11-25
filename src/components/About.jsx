import React from "react";
import AboutImg from "../assets/Logo.jpg"; // Replace with actual image

export default function AboutSection() {
  return (
    <section  className="py-20 px-6 bg-white">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION — TEXT LEFT, IMAGE RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Description */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#26217A] mb-4">
              Discover the Insights Behind
            </h2>

            <div className="w-32 h-1 bg-[#26217A] mb-6"></div>

            <p className="font-semibold text-gray-700 mb-4">
              PrimeLogic Solutions is a young and passionate technology company
              specializing in digital solutions like web and app development,
              SaaS platforms, AI/ML, cybersecurity, and custom software
              development.
            </p>

            <p className="text-gray-600 mb-6">
              Our team includes skilled engineers with real-world experience and
              strong problem-solving abilities.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={AboutImg}
              alt="About"
              className="w-[90%] max-w-lg drop-shadow-lg rounded-2xl"
            />
          </div>
        </div>

        {/* BOTTOM — VISION | MISSION | VALUES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          
          {/* Vision */}
          <div className="bg-[#F4F5FF] p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-[#26217A] mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become a global technology provider known for quality,
              innovation, and trust.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[#F4F5FF] p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-[#26217A] mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To deliver modern, intelligent, and affordable digital solutions
              that help businesses grow faster.
            </p>
          </div>

          {/* Values */}
          <div className="bg-[#F4F5FF] p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-[#26217A] mb-3">Our Values</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Innovation & Creativity</li>
              <li>• User-First Approach</li>
              <li>• Commitment to Quality</li>
              <li>• Transparency & Trust</li>
              <li>• Long-Term Client Success</li>
            </ul>
          </div>

        </div>
      </div>

      {/*  FULL-WIDTH SECTION BELOW (OUTSIDE max-w-7xl) */}
      <div className="mt-20 w-full bg-[#26217A] rounded-2xl text-white p-16">

        {/* HEADING */}
        <h3 className="text-4xl font-bold mb-10 text-center">
          What Makes Us Unique
        </h3>

        {/* LEFT (Paragraph) + RIGHT (Bullet Points) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">

          {/* LEFT SIDE PARAGRAPH */}
          <p className="text-gray-200 leading-relaxed text-lg">
            At PrimeLogic, we stand apart through our passion for innovation,
            our dedication to user-centered design, and our commitment to
            delivering exceptional digital solutions. Our approach blends
            creativity, cutting-edge technology, and deep market understanding
            to create experiences that truly connect, inspire, and drive results.
          </p>

          {/* RIGHT SIDE BULLET POINTS */}
          <ul className="space-y-4 text-gray-100 text-lg">
            <li>✔ Tailored solutions built specifically for your business</li>
            <li>✔ Creative design backed by strategy and research</li>
            <li>✔ Transparent communication & long-term partnerships</li>
            <li>✔ Strong focus on innovation and modern technologies</li>
          </ul>

        </div>

      </div>

    </section>
  );
}
