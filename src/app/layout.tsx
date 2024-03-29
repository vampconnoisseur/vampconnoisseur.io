import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaiditya Batra",
  description: "Portfolio of Jaiditya Batra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-black`}>
        <Navbar />
        <div className="max-w-screen-xl mx-auto md:px-12">{children}</div>
        <div className="mx-auto bg-black">
          <Footer />
        </div>
      </body>
    </html>
  );
}
