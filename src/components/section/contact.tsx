"use client";
import { useSection } from "@/hooks/use-section";
import { motion } from "framer-motion";
import { sendEmail } from "@/services/send-email";
import React from "react";
import toast from "react-hot-toast";
import Title from "@/components/typography/title";
import SectionWrapper from "@/components/ui/section-wrapper";
import SubmitButton from "@/components/ui/submit-button";

export default function Contact() {
  const { ref } = useSection("Contact");
  return (
    <SectionWrapper ref={ref} id="contact">
      <div className="px-12 flex w-full h-screen justify-center items-center flex-col md:mx-auto bg-sky-700 text-white">
        <motion.div
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
          <Title text="Contact" />
        </motion.div>
        <motion.p
          className="max-w-xl mt-2 text-center"
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
          If you have a specific question or comment, please feel free to email
          me directly at{" "}
          <a className="underline" href="mailto:achmad24daniel@gmail.com">
            achmad24daniel@gmail.com
          </a>{" "}
          or through this form.
        </motion.p>
        <motion.form
          className="mt-6 flex flex-col dark:text-black"
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
          }}
          action={async (formData) => {
            const { error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Email sent successfully!");
          }}>
          <input
            className="h-14 px-4 rounded-lg border-2 focus:border-sky-300 transition-all dark:outline-none"
            style={{ width: "400px" }}
            name="senderEmail"
            type="email"
            required
            maxLength={50}
            placeholder="Your email"
          />
          <textarea
            className="h-40 my-3 rounded-lg border-2 focus:border-sky-300 p-4 transition-all dark:outline-none"
            style={{ width: "400px" }}
            name="message"
            placeholder="Your message"
            required
            maxLength={1000}
          />
          <SubmitButton />
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
