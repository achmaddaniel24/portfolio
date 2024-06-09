"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";
import SectionWrapper from "@/components/ui/section-wrapper";
import { useSection } from "@/hooks/use-section";
import { motion } from "framer-motion";

export default function About() {
  const { ref } = useSection("About");
  return (
    <SectionWrapper ref={ref} id="about">
      <div className="px-12 flex w-full h-screen justify-center items-center flex-col md:flex-row md:mx-auto bg-sky-700 text-white">
        <div className="md:p-10 select-none">
          <div className="md:hidden text-center justify-center items-center content-center space-y-4 pt-8 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 125,
                duration: 0.7,
              }}
              viewport={{
                once: true,
              }}>
              <Link
                href="https://www.freepik.com/free-vector/colourful-illustration-programmer-working_5483080.htm#fromView=search&page=1&position=2&uuid=7cf50883-2c87-4923-b511-f015ba52e8ea"
                target="_blank"
                aria-label="Image by storyset on Freepik">
                <Image
                  src="/assets/developer.png"
                  alt="Image by storyset on Freepik"
                  className="rounded-full object-cover"
                  data-aos="fade-up"
                  height={500}
                  width={500}
                  loading="lazy"
                />
              </Link>
            </motion.div>
            <div>
              <motion.h1
                className="font-poppins font-semibold text-3xl"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  duration: 0.7,
                  delay: 0.2,
                }}
                viewport={{
                  once: true,
                }}>
                About me
              </motion.h1>
              <motion.p
                className="font-poppins pt-6"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  duration: 0.7,
                  delay: 0.3,
                }}
                viewport={{
                  once: true,
                }}>
                {
                  "Hi, I'm Achmad Daniel Syahputra, call me 'Daniel', from Indonesia. I'm a mobile developer and also a web developer. Started my coding journey in 2020."
                }
              </motion.p>
            </div>
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 125,
                duration: 0.7,
                delay: 0.4,
              }}
              viewport={{
                once: true,
              }}>
              <Button
                label="Next to skills page"
                color="border-2 border-white"
                url="#skills">
                NEXT
              </Button>
            </motion.div>
          </div>
          <div className="hidden md:flex justify-center items-center pt-16 content-center">
            <div>
              <motion.h1
                className="font-poppins font-semibold text-3xl"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  duration: 0.7,
                  delay: 0.2,
                }}
                viewport={{
                  once: true,
                }}>
                About me
              </motion.h1>
              <motion.p
                className="font-poppins max-w-xl pt-6"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  duration: 0.7,
                  delay: 0.3,
                }}
                viewport={{
                  once: true,
                }}>
                {
                  "Hi, I'm Achmad Daniel Syahputra, call me 'Daniel', from Indonesia. I'm a mobile developer and also a web developer. Started my coding journey in 2020."
                }
              </motion.p>
              <motion.p
                className="font-poppins max-w-xl pt-2"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  duration: 0.7,
                  delay: 0.3,
                }}
                viewport={{
                  once: true,
                }}>
                I want to be a professional in a company that offers a positive
                atmosphere to explore technology and its application for the
                greater benefit of society in the business world.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 125,
                duration: 0.7,
              }}
              viewport={{
                once: true,
              }}>
              <Link
                href="https://www.freepik.com/free-vector/colourful-illustration-programmer-working_5483080.htm#fromView=search&page=1&position=2&uuid=7cf50883-2c87-4923-b511-f015ba52e8ea"
                target="_blank"
                aria-label="Image by storyset on Freepik">
                <Image
                  src="/assets/developer.png"
                  alt="Image by storyset on Freepik"
                  className="rounded-full object-cover"
                  data-aos="fade-up"
                  height={400}
                  width={400}
                  loading="lazy"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
