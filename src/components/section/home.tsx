"use client";
import Image from "next/image";
import React from "react";
import Button from "@/components/ui/button";
import SectionWrapper from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useSection } from "@/hooks/use-section";

export default function Home() {
  const { ref } = useSection("Home", 0.5);
  return (
    <SectionWrapper ref={ref} id="home">
      <div className="px-12 flex xl:w-8/12 w-full h-screen justify-center items-center flex-col md:flex-row md:mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 125,
            duration: 0.7,
          }}>
          <Image
            src="/me.png"
            alt="Achmad Daniel Syahputra"
            className="rounded-full object-cover"
            data-aos="fade-up"
            height={500}
            width={500}
            loading="eager"
          />
        </motion.div>
        <div className="justify-center items-center text-center md:text-start select-none">
          <motion.span
            className="text-2xl font-poppins font-semibold md:text-3xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}>
            <h1 className="text-black">{"Hello, I'm "}</h1>
            <ReactTyped
              strings={[
                "Achmad Daniel.",
                "Mobile Developer.",
                "Web Developer.",
              ]}
              typeSpeed={70}
              backSpeed={70}
              className="text-sky-700"
              loop
            />
          </motion.span>
          <div className="mt-4">
            <motion.p
              className="font-poppins font-regular text-neutral-600"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
                delay: 0.2,
              }}>
              {
                "I'm always excited to create innovative solutions and engaging\
              user experiences."
              }
            </motion.p>
          </div>
          <div className="mt-6 flex justify-center md:justify-start">
            <motion.div
              className="mr-1.5 md:mr-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.3,
                delay: 0.3,
              }}>
              <Button
                label="Hire Me"
                color="bg-pink-500 hover:bg-pink-600 duration-300"
                url="mailto:achmad24daniel@gmail.com, achmad24daniel@gmail.com?subject=I am interested in working with you.">
                Hire Me
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.3,
                delay: 0.3,
              }}>
              <Button label="Download CV" url={process.env.CV_URL_DOWNLOAD}>
                Download CV
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
