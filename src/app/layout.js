import "./globals.css";

export const metadata = {
  title: "Vinícius Dev | Portfólio",
  description: "Desenvolvedor Full-Stack e especialista em back-end",
  keywords:
    "web developer, programador, desenvolvedor, 3D, animação, react, next.js, three.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
