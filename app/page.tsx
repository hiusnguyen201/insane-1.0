"use client";
import Container from "@/components/layouts/Container";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Social from "@/components/sections/Social";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Social />
      <About />
    </Container>
  );
}
