"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { sections } from "@/utils/section-name";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function NavigationBar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="sticky top-0 z-10 max-w-5xl w-full flex flex-wrap py-4 px-5">
      <div className="w-full bg-slate-100 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-16">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="flex flex-wrap">
                <h1 className="text-sky-700 text-xl md:text-3xl font-poppins font-semibold select-none">
                  Web Portfolio.
                </h1>
              </div>
              <div className="md:hidden">
                <Hamburger
                  toggled={active}
                  toggle={setActive}
                  color="#000000"
                  size={24}
                  rounded
                  label="menu"
                />
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-2 ${
                active ? "p-12 md:p-0 block" : "hidden"
              }`}>
              <ul className="h-screen md:h-auto items-center justify-center md:flex bg-slate-100">
                {sections.map((section) => (
                  <motion.li
                    key={section.hash}
                    className={`${
                      activeSection == section.name
                        ? "font-semibold underline underline-offset-8 text-sky-700"
                        : "font-medium"
                    } md:px-4 px-4 py-2 pb-6 text-xl text-black text-center font-poppins hover:text-sky-700 duration-300`}>
                    <Link
                      href={`/${section.hash}`}
                      onClick={() => {
                        setActive(!active);
                        setActiveSection(section.name);
                        setTimeOfLastClick(Date.now());
                      }}>
                      {section.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
