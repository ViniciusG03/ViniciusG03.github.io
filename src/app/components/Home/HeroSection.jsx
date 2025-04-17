"use client";
import { motion } from "framer-motion";
import Scene from "../3D/Scene";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <Scene />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl">
          <div className="mb-6">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[rgb(var(--primary-color))] font-mono mb-2">
              Olá, eu sou
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="heading text-gradient">
              Vinícius Gomes
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="subheading text-gray-300">
              Desenvolvedor Full Stack
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-gray-400 text-lg mb-8">
            Eu crio experiências digitais incríveis com foco em interfaces
            modernas. Especializado em React e Java.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md font-medium border border-[rgb(var(--primary-color))] text-[rgb(var(--primary-color))] hover:bg-[rgb(var(--primary-color))] hover:bg-opacity-10 transition-all">
              Entre em Contato
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}>
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <p className="text-sm">Scroll para baixo</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
