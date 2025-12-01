import React from "react";
import Heroimg from "../assets/Heroimg.jpeg"; // TEMP: using your logo as placeholder image

export default function HeroSection() {
  return (
    <section  className="bg-[#ffffff] text-white py-20 px-6 pt-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <span className="inline-block bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
            BEING INNOVATIVE
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl text-black md:text-5xl font-extrabold leading-tight">
            Smart Solution<br />
            For a <span className="text-blue-500">
              Smart Tommorrow
            </span>{" "}
            <br />
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-black max-w-lg">
            PrimeLogic Solutions Building Intelligent Digital Experiences Web
            Development • App Development • SaaS • AI/ML • Cyber Security
          </p>

          {/* Button */}
          <button className="mt-8 bg-white text-[#26217A] font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-500 transition">
            Explore More
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center ">
          <img
            src={Heroimg}
            alt="Hero Illustration"
            className="w-[90%] max-w-md md:max-w-lg drop-shadow-xl rounded-4xl"
          />
        </div>
      </div>
      
    </section>
    
  );
}
