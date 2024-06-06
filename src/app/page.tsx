"use client";
import Home from "@/components/section/home";
import About from "@/components/section/about";
import Skills from "@/components/section/skills";
import Contact from "@/components/section/contact";
import Footer from "@/components/ui/footer";

export default function HomePage() {
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
