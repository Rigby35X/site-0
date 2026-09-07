"use client";

import React from "react";

export function Header69() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="relative z-10 container max-w-lg text-center">
        <h1 className="mb-5 text-h1 font-bold text-white md:mb-6">
          Rescue tech simplified
        </h1>
        <p className="text-medium text-white">
          Streamline your shelter's operations, boost marketing efforts, and
          connect more animals with loving homes through our comprehensive
          platform designed specifically for animal rescue organizations.
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
