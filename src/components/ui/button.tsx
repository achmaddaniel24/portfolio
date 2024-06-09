"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Button(props: any) {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}>
      <Link href={props.url ?? "/"} aria-label={props.label ? props.label : ""}>
        <div
          aria-label={props.label ? props.label : ""}
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
            {props.children}
          </p>
        </div>
      </Link>
    </motion.button>
  );
}
