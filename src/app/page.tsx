"use client";
import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import Home from "@/components/section/home";
import About from "@/components/section/about";
import Skills from "@/components/section/skills";
import Contact from "@/components/section/contact";
import Footer from "@/components/ui/footer";

export default function HomePage() {
  const { activeSection, setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const skills = document.getElementById("skills");
    const contact = document.getElementById("contact");
    const sections = [home, about, skills, contact];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == "home") {
            setActiveSection("Home");
          }
          if (entry.target.id == "about") {
            setActiveSection("About");
          }
          if (entry.target.id == "skills") {
            setActiveSection("Skills");
          }
          if (entry.target.id == "contact") {
            setActiveSection("Contact");
          }
        }
      });
    }, observerOptions);

    sections?.forEach((section) => {
      section && observer.observe(section);
    });
  }, [setActiveSection]);
  return (
    <>
      <main className="flex flex-col min-h-screen bg-slate-100 text-black">
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
