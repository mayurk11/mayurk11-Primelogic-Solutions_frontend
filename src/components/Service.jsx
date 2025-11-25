import React from "react";
import { FaCode, FaMobileAlt, FaCloud , FaRobot } from "react-icons/fa";
import { BsLaptopFill } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { GoGraph } from "react-icons/go";

export default function ServicesSection() {
  return (
    <section  className="py-10 px-6 bg-white">
      {/* TOP HEADING */}
      <h2 className="text-4xl font-bold text-center text-[#26217A] mb-12">
        Our Services
      </h2>

      {/* 4 CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* CARD 1 */}
        <div className="bg-[#F4F5FF] shadow p-6 rounded-xl hover:shadow-xl transition text-center">
          <FaCode className="text-5xl  text-[#26217A] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[#26217A] mb-2">
            Web Development
          </h3>
          <p className="text-gray-600 ">
            Business websites, e-commerce stores, dashboards, custom web apps.
          </p>
          <p className="text-gray-600">
            <b>Tech Used:</b> PHP, Laravel, Django, HTML, CSS, JS
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#F4F5FF] shadow p-6 rounded-xl hover:shadow-xl transition text-center">
          <FaMobileAlt className="text-5xl text-[#26217A] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[#26217A] mb-2">
            App Development
          </h3>
          <p className="text-gray-600">
            Native & hybrid apps for Android & iOS.
          </p>
          <p className="text-gray-600">
            <b>Tech Used:</b> Flutter, Java, React Native
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#F4F5FF] shadow p-6 rounded-xl hover:shadow-xl transition text-center">
          <FaCloud  className="text-5xl text-[#26217A] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[#26217A] mb-2">
            SaaS Development
          </h3>
          <p className="text-gray-600">
            Strong visual branding & unique logos tailored to your company’s
            identity.
          </p>
          <p className="text-gray-600">
            <b>Tech Used:</b>  Python, Django, Node.js, Firebase
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-[#F4F5FF] shadow p-6 rounded-xl hover:shadow-xl transition text-center">
          <FaRobot className="text-5xl text-[#26217A] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[#26217A] mb-2">
            AI / ML / DL Services
          </h3>
          <p className="text-gray-600">
            AI chatbots, predictive models, NLP solutions, automation tools.
          </p>
          <p className="text-gray-600">
            <b>Tech Used:</b> TensorFlow, PyTorch, OpenCV, sklearn
          </p>
        </div>

        {/* CARD 5 */}
        <div className="bg-[#F4F5FF] shadow p-6 rounded-xl hover:shadow-xl transition text-center">
          <BsLaptopFill className="text-5xl text-[#26217A] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[#26217A] mb-2">
            Custom Software Development

          </h3>
          <p className="text-gray-600">
            CRM, ERP, inventory systems, billing software, automation systems.
          </p>
          
        </div>

        {/* CARD 6 */}
        <div className="bg-[#F4F5FF] shadow p-6 rounded-xl hover:shadow-xl transition text-center">
          <MdOutlineSecurity className="text-5xl text-[#26217A] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[#26217A] mb-2">
            Cyber Security
          </h3>
          <p className="text-gray-600">
            VAPT, web & app security audits, network hardening, penetration testing.
          </p>
        </div>

        {/* CARD 7 */}
        <div className="bg-[#F4F5FF] shadow p-6 rounded-xl hover:shadow-xl transition text-center">
          <GoGraph className="text-5xl text-[#26217A] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[#26217A] mb-2">
            IT Consulting
          </h3>
          <p className="text-gray-600">
            Technical guidance, architecture planning, deployment support.
          </p>
        </div>

        {/* CARD 8 */}
        {/* <div className="bg-[#F4F5FF] shadow p-6 rounded-xl hover:shadow-xl transition text-center">
          <FaRobot className="text-5xl text-[#26217A] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[#26217A] mb-2">
            AI / ML / DL Services
          </h3>
          <p className="text-gray-600">
            AI chatbots, predictive models, NLP solutions, automation tools.
          </p>
          <p className="text-gray-600">
            <b>Tech Used:</b> TensorFlow, PyTorch, OpenCV, sklearn
          </p>
        </div> */}

      </div>
    </section>
  );
}
