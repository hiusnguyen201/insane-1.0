"use client";
import { motion } from "framer-motion";
import i18n from "@/lib/i18n/config";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import Background from "@/components/layouts/Background";
import Navbar from "@/components/layouts/Navbar";
import { I18nextProvider } from "react-i18next";
import ClientOnly from "@/components/ClientOnly";
import "lenis/dist/lenis.css";

function App({ children }: { children: ReactNode }) {
  return (
    <ClientOnly>
      <I18nextProvider i18n={i18n} defaultNS={i18n.language}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <ReactLenis
            root
            options={{
              lerp: 0.1,
              duration: 1.4,
            }}
          >
            <Navbar />
            <motion.main
              className="relative w-full"
              initial={{ y: -12, filter: "blur(12px)" }}
              animate={{ y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              {children}
            </motion.main>
            <Background />
          </ReactLenis>
        </ThemeProvider>
      </I18nextProvider>
    </ClientOnly>
  );
}

export default App;
