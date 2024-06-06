"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Button(props: any) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.8,
        borderRadius: "100%",
      }}>
      <Link href={props.url ?? ""} aria-label={props.text}>
        <div
          aria-label={props.text}
          className={`rounded-xl mr-2 hover:drop-shadow ${
            props.color ??
            "bg-sky-700 md:bg-gray-300 hover:bg-sky-700 duration-300"
          }`}>
          <p
            className={`px-6 py-3 font-poppins font-medium text-center hover:drop-shadow ${
              props.color
                ? "text-white"
                : "text-white md:text-neutral-700 hover:text-white duration-300"
            }`}>
            {props.text ?? ""}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
