"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
        py-28 px-6
        bg-linear-to-b
        from-slate-50 via-slate-100/60 to-slate-50
        dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950
        transition-colors duration-300
      "
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight relative group inline-block pb-3">
              About
              <span className="text-purple-600 dark:text-purple-500 mx-2">
                Me
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-1/2 bg-purple-500 rounded-full transition-all duration-500 group-hover:w-full" />
            </h2>
          </motion.div>

          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            I build modern backend systems that balance performance, simplicity and
            long-term maintainability.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
  I started my journey into full-stack development with a curiosity about how
  digital systems work. Over time, that curiosity turned into a strong focus on
  building high-performance applications using
  <span className="font-medium mx-2 text-purple-600 dark:text-purple-500">
    Java
  </span>
  ,
  <span className="font-medium mx-2 text-purple-600 dark:text-purple-500">
    Python
  </span>
  , and modern frameworks.
</p>

<p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
  I am especially interested in core computer science concepts like
  <span className="font-medium mx-2 text-purple-600 dark:text-purple-500">
    Networking
  </span>
  ,
  <span className="font-medium mx-2 text-purple-600 dark:text-purple-500">
    Operating Systems
  </span>
  ,
  <span className="font-medium mx-2 text-purple-600 dark:text-purple-500">
    DBMS
  </span>
  , and
  <span className="font-medium mx-2 text-purple-600 dark:text-purple-500">
    Data Structures & Algorithms
  </span>
  , which help me understand how applications work internally.
</p>

<p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
  On the backend, I enjoy building applications using
  <span className="font-medium mx-2 text-purple-600 dark:text-purple-500">
    Spring Boot
  </span>
  ,
  <span className="font-medium mx-2 text-purple-600 dark:text-purple-500">
    Servlets
  </span>
  ,
  <span className="font-medium mx-2 text-purple-600 dark:text-purple-500">
    JDBC
  </span>
  , and
  <span className="font-medium mx-2 text-purple-600 dark:text-purple-500">
    JSP
  </span>
  , while applying concepts like
  <span className="font-medium mx-2 text-purple-600 dark:text-purple-500">
    Multithreading
  </span>
  for better performance and scalability.
</p>

<div
  className="
    rounded-xl
    border border-slate-200/60 dark:border-slate-800
    bg-gray-300/50 dark:bg-slate-900/50
    backdrop-blur-md
    px-6 py-5
  "
>
  <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed">
    “Coming together is a beginning, keeping together is progres, Working together is Success.”
  </p>
</div>

<p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
  Beyond coding, I enjoy strengthening my fundamentals through platforms like
  <span className="font-medium mx-2 text-purple-600 dark:text-purple-500">
    NPTEL
  </span>
  , practicing DSA regularly, and exploring how AI can improve everyday web
  products. Continuous learning keeps my skills sharp and future-ready.
</p>

        </motion.div>
      </div>
    </section>
  );
}
