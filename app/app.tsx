"use client";
import i18n from "@/lib/i18n/config";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import { I18nextProvider } from "react-i18next";
import ClientOnly from "@/components/ClientOnly";
import "lenis/dist/lenis.css";

function App({ children }: { children: ReactNode }) {
  return (
    <ClientOnly>
      <I18nextProvider i18n={i18n} defaultNS="en">
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
            <main className="relative">{children}</main>
            <Background />
          </ReactLenis>
        </ThemeProvider>
      </I18nextProvider>
    </ClientOnly>
  );
}

export default App;
