import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {

  // ✅ Hooks MUST be inside component
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");

  // ✅ handleSubmit MUST also be inside component

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = { name, email, phone, service, description };

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message);

    // ⭐ RESET FORM AFTER SUBMISSION
    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setDescription("");

    // OPTIONAL — Scroll back to top
    // window.scrollTo(0, 0);

  } catch (error) {
    console.error("Error:", error);
    alert("Failed to submit form");
  }
};




  return (
    <section className="pt-20 px-5 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT SIDE — Contact Info */}
        <div>
          <p className="text-orange-500 font-semibold mb-2 tracking-wide">
            LET’S WORK TOGETHER
          </p>

          <h2 className="text-4xl font-bold text-[#26217A] mb-6">
            We’d love to talk about your project.
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Your next big idea starts with a single message. PrimeLogic
            Solutions is here to guide, build, and innovate with you. Let’s
            create something extraordinary.
          </p>

          {/* Contact Details */}
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#26217A]" />
              primelogicinfo@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#26217A]" />
              +91 9767055912
            </p>

            <p className="flex items-center gap-3">
              <FaLinkedin className="text-[#26217A]" />
              <a href="https://www.linkedin.com/company/primelogicinfo/">Linkedin</a>
            </p>

            <p className="flex items-center gap-3">🏢 Virtual Office / Remote</p>
          </div>
        </div>

        {/* RIGHT SIDE — Contact Form */}
        <div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-[#26217A] rounded-xl p-3 focus:ring-2 focus:ring-[#26217A] outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-[#26217A] rounded-xl p-3 focus:ring-2 focus:ring-[#26217A] outline-none"
            />

            <input
              type="tel"
              placeholder="Your Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full border border-[#26217A] rounded-xl p-3 focus:ring-2 focus:ring-[#26217A] outline-none"
            />

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className="w-full border border-[#26217A] rounded-xl p-3 text-gray-600 focus:ring-2 focus:ring-[#26217A] outline-none"
            >
              <option>Select Service Required</option>
              <option>Web Development</option>
              <option>App Development</option>
              <option>SaaS Platforms</option>
              <option>AI/ML & Chatbots</option>
              <option>Cyber Security</option>
              <option>Custom Software</option>
            </select>

            <textarea
              rows="5"
              placeholder="Your Project Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full border border-[#26217A] rounded-xl p-3 focus:ring-2 focus:ring-[#26217A] outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#26217A] text-white py-3 rounded-full font-semibold hover:bg-[#1f1a61] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER BAR */}
      <div className="w-screen bg-[#26217A] py-6 mt-20 relative left-1/2 right-1/2 -mx-[50vw]">
        <p className="text-center text-gray-200 text-sm">
          © 2025 <span className="font-semibold">PrimeLogic Solutions</span> — Built with Innovation & Intelligence
        </p>
      </div>
    </section>
  );
}
