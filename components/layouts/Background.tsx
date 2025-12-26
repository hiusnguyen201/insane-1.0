"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const Background = () => {
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (!particlesRef.current?.length) return;

    particlesRef.current.forEach((particle) => {
      const size = Math.random() * 3 + 1;

      gsap.set(particle, {
        width: size,
        height: size,
        opacity: Math.random(),
        left: Math.random() * window.innerWidth,
        top: Math.random() * (window.innerHeight + 1),
      });

      gsap.to(particle, {
        y: window.innerHeight,
        opacity: 0,
        repeat: -1,
        ease: "none",
        x: "+=" + gsap.utils.random(-500, 500),
        duration: Math.random() * 10 + 10,
      });
    });
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {[...Array(111)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) particlesRef.current[i] = el;
          }}
          className="absolute rounded-full bg-[#212121] dark:bg-white"
        />
      ))}
    </div>
  );
};

export default Background;
