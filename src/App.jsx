import { Element } from "react-scroll";
import "./App.css";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import TechMarquee from "./components/TechMarquue";
import AboutSection from "./components/About";
import ServicesSection from "./components/Service";
import ContactSection from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Element name="home">
        <HeroSection />
      </Element>

      <Element name="tech">
        <TechMarquee />
      </Element>

      <Element name="about">
        <AboutSection />
      </Element>

      <Element name="services">
        <ServicesSection />
      </Element>

      <Element name="contact">
        <ContactSection />
      </Element>
    </>
  );
}

export default App;
