"use client";
import React from "react";
import Title from "@/components/typography/title";
import SectionWrapper from "@/components/ui/section-wrapper";
import { useSection } from "@/hooks/use-section";

export default function Contact() {
  const { ref } = useSection("Contact");
  return (
    <SectionWrapper ref={ref} id="contact">
      <div className="px-12 flex w-full h-screen justify-center items-center flex-col md:flex-row md:mx-auto bg-sky-700 text-white">
        <Title text="Contact" />
      </div>
    </SectionWrapper>
  );
}
