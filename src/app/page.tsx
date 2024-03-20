"use client";
import { ReactTyped } from "react-typed";
import PageWrapper from "@/components/PageWrapper";
import Button from "@/components/Button";
import Image from "next/image";

export default function HomePage() {
  return (
    <PageWrapper>
      <div
        id="home"
        className="flex xl:w-8/12 w-full h-screen justify-center items-center flex-col md:flex-row md:mx-auto">
        <Image
          src="/me.png"
          alt="Achmad Daniel Syahputra"
          className="rounded-full object-cover"
          data-aos="fade-up"
          height={500}
          width={500}
        />
        <div className="justify-center items-center text-center md:text-start">
          <span className="text-2xl font-poppins font-semibold md:text-3xl">
            <a className="text-black">Hello, I‘m </a>
            <ReactTyped
              strings={[" Achmad Daniel", " Mobile Developer"]}
              typeSpeed={70}
              backSpeed={70}
              className="text-sky-600"
              loop
            />
          </span>
          <div className="mt-4">
            <h5 className="text-lg font-poppins font-regular">
              I‘m always excited to create innovative solutions and engaging
              user experiences.
            </h5>
          </div>
          <div className="mt-6 flex justify-center items-center">
            <div className="mr-4">
              <Button
                text="Hire Me"
                color="bg-pink-600"
                url="mailto:achmad24daniel@gmail.com, achmad24daniel@gmail.com?subject=Saya tertarik dengan anda."
              />
            </div>
            <Button text="Download CV" />
          </div>
        </div>
      </div>
      <div id="about" className="h-screen"></div>
      <div id="skills" className="h-screen"></div>
      <div id="contact" className="h-screen"></div>
    </PageWrapper>
  );
}
