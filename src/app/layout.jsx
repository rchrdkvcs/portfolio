import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "Richard Kovacs - Portfolio",
  description:
    "Hey There, I'm a Full-Stack Junior Developer, with a passion for building applications and websites.",
};

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className + " scroll-smooth"}>
      <body className="px-4 mci-c4f7c3b940b2fda375c61f1064b5e7f6 white-preset md:px-16 lg:px-32 xl:px-64 mt-14">
        <Image
          src="/Images/Layout.png"
          width={1920}
          height={1080}
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[1080px] mix-blend-difference -z-50"
        />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
