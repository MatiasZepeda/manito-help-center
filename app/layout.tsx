import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Centro de Ayuda — Manito",
  description: "Encuentra respuestas a todas tus preguntas sobre Manito, el marketplace de servicios del hogar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
