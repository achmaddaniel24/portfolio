"use client";
import { ReactTyped } from "react-typed";
import PageWrapper from "@/components/PageWrapper";
import Button from "@/components/Button";
import Image from "next/image";
import Title from "@/components/Title";

export default function HomePage() {
  return (
    <PageWrapper>
      <div
        id="home"
        className="px-12 flex xl:w-8/12 w-full h-screen justify-center items-center flex-col md:flex-row md:mx-auto">
        <Image
          src="/me.png"
          alt="Achmad Daniel Syahputra"
          className="rounded-full object-cover"
          data-aos="fade-up"
          height={500}
          width={500}
          loading="eager"
        />
        <div className="justify-center items-center text-center md:text-start">
          <span className="text-2xl font-poppins font-semibold md:text-3xl">
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
          </span>
          <div className="mt-4">
            <h1 className="text-lg font-poppins font-regular text-neutral-600">
              {
                "I'm always excited to create innovative solutions and engaging\
              user experiences."
              }
            </h1>
          </div>
          <div className="mt-6 flex justify-center md:justify-start">
            <div className="md:mr-4">
              <Button
                text="Hire Me"
                color="bg-pink-600 hover:bg-pink-800 duration-300"
                url="mailto:achmad24daniel@gmail.com, achmad24daniel@gmail.com?subject=Saya tertarik dengan anda."
              />
            </div>
            <Button text="Download CV" url={process.env.CV_URL_DOWNLOAD} />
          </div>
        </div>
      </div>
      <div id="about" className="h-screen bg-sky-700 text-white px-16 pt-2">
        <div className="p-10">
          <Title text="About me" />
        </div>
      </div>
      <div id="skills" className="h-screen px-16">
        <div className="p-10">
          <Title text="Skills" />
        </div>
      </div>
      <div id="contact" className="h-screen bg-sky-700 text-white px-16">
        <div className="p-10">
          <Title text="Contact" />
        </div>
      </div>
    </PageWrapper>
  );
}
