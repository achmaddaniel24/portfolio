"use client";
import { motion, AnimatePresence } from "framer-motion";
export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-16">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 1 }}>
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
