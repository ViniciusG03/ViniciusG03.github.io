import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Three.js", level: 80 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 75 },
  { name: "CSS/SASS", level: 85 },
  { name: "Node.js", level: 70 },
  { name: "WebGL", level: 65 },
];

export default function About() {
  return (
    <section id="about" className="section bg-[rgb(var(--background-end-rgb))]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="heading">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-[rgb(var(--primary-color))] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative">
            <div className="relative w-full h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--primary-color))] to-[rgb(var(--secondary-color))] opacity-60 z-10 rounded-lg"></div>
              <div className="absolute inset-0 p-1 z-20">
                <div className="w-full h-full bg-[rgb(var(--background-start-rgb))] rounded-lg overflow-hidden">
                  <Image
                    src="/images/profile.jpg"
                    alt="Vinícius Gonçalves"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[rgb(var(--primary-color))] rounded-lg z-0"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[rgb(var(--secondary-color))] rounded-lg z-0"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4">
              Desenvolvedor Web & Especialista em Animações 3D
            </h3>
            <p className="text-gray-300 mb-6">
              Olá! Sou Vinícius, um desenvolvedor apaixonado por criar
              experiências digitais inovadoras. Com mais de 5 anos de
              experiência em desenvolvimento web, me especializei na criação de
              interfaces modernas e interativas, com foco em animações 3D.
            </p>
            <p className="text-gray-300 mb-6">
              Minha jornada começou com HTML, CSS e JavaScript, e logo evoluiu
              para frameworks como React e Next.js. A descoberta do Three.js e
              React Three Fiber abriu um novo mundo de possibilidades para
              minhas criações, permitindo que eu desenvolvesse experiências 3D
              imersivas diretamente no navegador.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Minhas Habilidades</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-[rgb(var(--primary-color))]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[rgb(var(--primary-color))] to-[rgb(var(--secondary-color))]"
                        style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center">
                <span>Baixar CV</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
