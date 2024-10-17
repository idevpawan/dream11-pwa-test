"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Header from "./components/Header";
import BottomBar from "./components/BottomBar";

function HOC({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <Header />
      <motion.div className="mt-32 mb-10">{children}</motion.div>
      <BottomBar />
    </AnimatePresence>
  );
}

export default HOC;
