"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Ucoder",
    description:
      "A full-stack solution with Express and Vite for service-based applications.",
    tech: [
      "Express",
      "Vite",
      "MongoDB",
      "Radix UI",
      "Tailwind CSS",
      "CI/CD",
      "Docker",
    ],
    github: "",
    live: "https://www.ucoder.in",
    darkHover: "dark:hover:bg-blue-900/40 dark:hover:border-blue-500/50",
    lightHover: "hover:bg-blue-600",
  },
  {
    title: "Mini Bank",
    description:
      "A mini banking application with user authentication and transaction features.",
    tech: ["React", "Node.js", "MongoDB", "Vite", "Bootstrap"],
    github: "https://github.com/soumydip/myminiBank.github.io",
    live: "",
    darkHover: "dark:hover:bg-purple-900/40 dark:hover:border-purple-500/50",
    lightHover: "hover:bg-purple-600",
  },
  {
    title: "Weather Application",
    description:
      "Weather forecasting app with real-time updates and geolocation using OpenWeather API.",
    tech: ["TypeScript", "Next.js", "OpenWeather API"],
    github: "https://github.com/soumydip/weatherapplication",
    live: "",
    darkHover: "dark:hover:bg-emerald-900/40 dark:hover:border-emerald-500/50",
    lightHover: "hover:bg-emerald-600",
  },
  {
    title: "Ucoder Insights",
    description:
      "Lightweight analytics dashboard with full SDKs to track application traffic and errors.",
    tech: [
      "Next.js",
      "TypeScript",
      "Web Beacon API",
      "Node.js",
      "Docker",
      "DigitalOcean",
    ],
    github: "",
    live: "",
    darkHover: "dark:hover:bg-orange-900/40 dark:hover:border-orange-500/50",
    lightHover: "hover:bg-orange-600",
  },
  {
    title: "Music Hub",
    description:
      "A dedicated music platform for streaming and discovering new tracks with a modern UI.",
    tech: ["React", "CSS", "Bootstrap", "FontAwesome", "SCSS"],
    github: "",
    live: "",
    darkHover: "dark:hover:bg-pink-900/40 dark:hover:border-pink-500/50",
    lightHover: "hover:bg-pink-600",
  },
  {
    title: "Brest cencer detection",
    description:
      "An AI-powered  application for early detection of breast cancer using machine learning models.",
    tech: ["Python", "Pandas", "Numpy", "Scikit-learn", "Mathplotlib"],
    github: "",
    live: "",
    darkHover: "dark:hover:bg-indigo-900/40 dark:hover:border-indigo-500/50",
    lightHover: "hover:bg-indigo-600",
  },
  {
    title: "Crypto Market Tracker",
    description:
      "Analyzing cryptocurrency price trends and market volatility using time-series data analysis.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    github: "",
    live: "",
    darkHover: "dark:hover:bg-amber-900/40 dark:hover:border-amber-500/50",
    lightHover: "hover:bg-amber-600",
  },
  {
    title: "Climate Data Visualizer",
    description:
      "Global temperature anomaly tracking and carbon emission analysis over the last 50 years.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "",
    live: "",
    darkHover: "dark:hover:bg-emerald-900/40 dark:hover:border-emerald-500/50",
    lightHover: "hover:bg-emerald-600",
  },
  {
    title: "Student Success Predictor",
    description:
      "A machine learning model to predict student performance based on behavioral and academic data.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    github: "",
    live: "",
    darkHover: "dark:hover:bg-rose-900/40 dark:hover:border-rose-500/50",
    lightHover: "hover:bg-rose-600",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6  dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white relative group pb-3">
              Featured <span className="text-purple-600">Projects</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-1/2 bg-purple-500 rounded-full transition-all duration-500 group-hover:w-full" />
            </h2>
          </motion.div>
          <p className="mt-6 text-slate-500 dark:text-slate-400 max-w-md">
            A selection of my favorite works, built with modern web
            technologies.
          </p>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`group relative h-full flex flex-col transition-all duration-500 border border-slate-200 dark:border-slate-800  dark:bg-slate-900 overflow-hidden shadow-sm ${project.lightHover} ${project.darkHover} cursor-pointer`}
              >
                <div className="relative z-10 flex flex-col h-full p-2">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-500 dark:text-slate-400 group-hover:text-slate-100 transition-colors duration-300 min-h-15">
                      {project.description || "Project details coming soon..."}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((item, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-white/20 group-hover:text-white border-none transition-colors"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between gap-3 pt-6 border-t border-slate-200/50 dark:border-slate-800/50 mt-4 group-hover:border-white/20">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={!project.github}
                      className="flex-1 bg-transparent border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white group-hover:border-white group-hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      asChild={!!project.github}
                    >
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </a>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Github className="mr-2 h-4 w-4 inline" /> Code
                        </span>
                      )}
                    </Button>

                    <Button
                      size="sm"
                      disabled={!project.live}
                      className="flex-1 bg-purple-600/50 hover:text-white text-white  border-none group-hover:bg-white group-hover:text-slate-900 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed dark:hover:text-black  dark:hover:bg-amber-100    disabled:bg-slate-400"
                      asChild={!!project.live}
                    >
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> Live
                        </a>
                      ) : (
                        <span className="flex items-center justify-center">
                          <ExternalLink className="mr-2 h-4 w-4 inline" /> Live
                        </span>
                      )}
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
         <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-2xl mx-auto flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800"
        >
          <Info size={20} className="text-purple-500 mt-0.5 shrink-0" />

          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed italic">
            <span className="font-bold mx-2 text-slate-700 dark:text-slate-300 not-italic">
              Note:
            </span>
            Some projects and GitHub repositories do not have live demos or
            public links yet due to Private Repositories or because they are not
            currently hosted.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
