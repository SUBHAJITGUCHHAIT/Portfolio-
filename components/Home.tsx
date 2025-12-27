"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import profilePic from "../public/soumya.jpeg";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 pb-12 md:pt-20 px-6 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-125 md:h-125 bg-purple-500/10 blur-[80px] md:blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text Content */}
        <div className="w-full md:w-3/5 text-center md:text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-purple-600 font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-[10px] md:text-sm mb-4">
              Building the Future of Web
            </h2>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[1.1] md:leading-[0.9] mb-6">
              DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-500">
                ARCHITECT
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-slate-500 dark:text-slate-400 max-w-lg mb-8 md:mb-10 leading-relaxed font-medium"
          >
            I&apos;m{" "}
            <span className="text-slate-900 dark:text-white underline decoration-purple-500/30 underline-offset-4">
              Soumyadip
            </span>
            . I craft seamless digital solutions where code meets creativity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("projects");
                if (element) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = element.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="group flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl md:rounded-2xl font-bold transition-all hover:bg-purple-600 dark:hover:bg-purple-500 dark:hover:text-white shadow-xl shadow-slate-200 dark:shadow-none text-sm md:text-base"
            >
              Explore Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-2/5 flex justify-center order-1 md:order-2"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/20 blur-2xl md:blur-3xl rounded-full -z-10 animate-pulse" />

            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-100 md:h-100 rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 p-1.5 md:p-2 bg-white dark:bg-slate-900 shadow-2xl">
              <Image
                src={profilePic}
                alt="Soumyadip"
                
                className="object-cover w-full h-full rounded-[1.8rem] md:rounded-[3rem]"
                priority
              />
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white dark:bg-slate-900 p-4 md:p-5 rounded-xl md:rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 max-w-45 md:max-w-55 hidden sm:block"
            >
              <Quote
                className="text-purple-500 mb-1 md:mb-2 rotate-180"
                size={20}
                fill="currentColor"
              />
              <p className="text-[10px] md:text-sm font-bold text-slate-800 dark:text-slate-200 leading-snug">
                &ldquo;Code is my language, and the web is my canvas.&rdquo;
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
