import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../../constants/projects";

export default function Projects() {
  const [filter, setFilter] = useState("todos");

  const filteredProjects = projects.filter((project) => {
    if (filter === "todos") return true;
    return project.type === filter;
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="heading">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <div className="w-20 h-1 bg-[rgb(var(--primary-color))] mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Confira alguns dos meus projetos recentes, incluindo trabalhos
            pessoais e corporativos. Foco em criar experiências únicas e
            memoráveis através de animações 3D e interfaces modernas.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-[rgb(var(--background-start-rgb))] rounded-lg">
            <button
              onClick={() => setFilter("todos")}
              className={`px-4 py-2 rounded-md transition-all ${
                filter === "todos"
                  ? "bg-[rgb(var(--primary-color))] text-gray-900 font-medium"
                  : "text-gray-300 hover:text-white"
              }`}>
              Todos
            </button>
            <button
              onClick={() => setFilter("pessoal")}
              className={`px-4 py-2 rounded-md transition-all ${
                filter === "pessoal"
                  ? "bg-[rgb(var(--primary-color))] text-gray-900 font-medium"
                  : "text-gray-300 hover:text-white"
              }`}>
              Pessoais
            </button>
            <button
              onClick={() => setFilter("corporativo")}
              className={`px-4 py-2 rounded-md transition-all ${
                filter === "corporativo"
                  ? "bg-[rgb(var(--primary-color))] text-gray-900 font-medium"
                  : "text-gray-300 hover:text-white"
              }`}>
              Corporativos
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
