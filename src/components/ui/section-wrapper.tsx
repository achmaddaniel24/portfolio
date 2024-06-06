"use client";
import { AnimatePresence } from "framer-motion";
import { Ref } from "react";
export default function SectionWrapper({
  children,
  ref,
  id,
}: {
  children: React.ReactNode;
  ref: Ref<HTMLDivElement>;
  id: string;
}) {
  return (
    <AnimatePresence>
      <section id={id} ref={ref}>
        {children}
      </section>
    </AnimatePresence>
  );
}
