"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header65() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="relative z-10 container max-w-lg text-center">
        <p className="mb-3 font-semibold text-white md:mb-4">Rescue</p>
        <h1 className="mb-5 text-h1 font-bold text-white md:mb-6">
          This is for the on-the-ground everyday heroes who are tirelessly
          working to fix a broken system.
        </h1>
        <p className="text-medium text-white">
          We build technology that connects shelters, streamlines operations,
          and helps more animals find their forever homes.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <Button title="Get started" variant="alternate">
            Get started
          </Button>
          <Button title="Learn more" variant="secondary-alt">
            Learn more
          </Button>
        </div>
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
