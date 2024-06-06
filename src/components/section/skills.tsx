"use client";
import React from "react";
import Title from "@/components/typography/title";
import SectionWrapper from "@/components/ui/section-wrapper";
import { useSection } from "@/hooks/use-section";

export default function Skills() {
  const { ref } = useSection("Skills");
  return (
    <SectionWrapper ref={ref} id="skills">
      <div className="px-12 flex w-full h-screen justify-center items-center flex-col md:flex-row md:mx-auto">
        <Title text="Skills" />
      </div>
    </SectionWrapper>
  );
}
