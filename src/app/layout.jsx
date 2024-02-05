import { DarkSwitches } from "@/components/DarkSwitches";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

export const metadata = {
  title: "Richard Kovacs - Portfolio",
  description: "Richard Kovacs - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="font-mono scroll-smooth">
      <body className="mci-c4f7c3b940b2fda375c61f1064b5e7f6 white-preset dark:dark-preset lg:px-64 mt-14 dark:selection:white-preset selection:dark-preset">
        <Navigation />
        <DarkSwitches />
        {children}
        <Footer />
      </body>
    </html>
  );
}
