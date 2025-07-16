import React from "react";
import Container from "./Container";

const Hero = () => {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Zanden Koh
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Building cool things.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
