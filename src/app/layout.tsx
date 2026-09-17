import type { Metadata } from "next";
import { Cormorant_Garamond, Dancing_Script } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Feliz 29",
  description: "Un libro digital de cumpleaños — 9 años juntos, infinito por delante",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${dancingScript.variable} ${cormorantGaramond.variable} h-dvh antialiased`}
    >
      <body className="h-dvh overflow-hidden font-sans bg-gris-claro text-foreground">
        {children}
      </body>
    </html>
  );
}
