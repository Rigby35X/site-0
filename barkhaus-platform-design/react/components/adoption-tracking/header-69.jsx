"use client";

import React from "react";

export function Header69() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="relative z-10 container max-w-lg text-center">
        <h1 className="mb-5 text-h1 font-bold text-white md:mb-6">
          Simplify animal adoptions
        </h1>
        <p className="text-medium text-white">
          Track every adoption journey with precision and care, transforming
          complex shelter processes into seamless connections between animals
          and their forever homes.
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder background image"
        />
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
