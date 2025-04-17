import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[rgb(var(--background-start-rgb))] pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-gradient mb-4 inline-block">
              Vinícius<span className="text-white">Dev</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Desenvolvedor Full Stack especializado em criar transformações.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="#home"
                  className="hover:text-[rgb(var(--primary-color))] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-[rgb(var(--primary-color))] transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-[rgb(var(--primary-color))] transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-[rgb(var(--primary-color))] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[rgb(var(--primary-color))]"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:viniciusgomes.33mes@gmail.com"
                  className="hover:text-[rgb(var(--primary-color))] transition-colors">
                  viniciusgomes.33mes@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[rgb(var(--primary-color))]"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  href="https://github.com/ViniciusG03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[rgb(var(--primary-color))] transition-colors">
                  github.com/ViniciusG03
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[rgb(var(--primary-color))]"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  href="https://linkedin.com/in/viniciusg03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[rgb(var(--primary-color))] transition-colors">
                  linkedin.com/in/viniciusg03
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} ViniciusDev. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
