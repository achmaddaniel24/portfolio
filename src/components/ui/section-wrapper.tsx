"use client";
import { AnimatePresence } from "framer-motion";
import { LegacyRef } from "react";

export default function SectionWrapper({
  children,
  ref,
  id,
}: {
  children: React.ReactNode;
  ref: LegacyRef<HTMLElement>;
  id: string;
}) {
  return (
    <AnimatePresence>
      <section id={id} ref={ref} className="h-screen">
        {children}
      </section>
    </AnimatePresence>
  );
}
