"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout145_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container flex flex-col items-center text-center">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <div className="mb-5 inline-block md:mb-6">
              <img
                className="size-20 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/pets.svg"
              />
            </div>
            <p className="mb-3 font-semibold md:mb-4">Mission</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Transforming animal rescue through innovative technology
            </h2>
            <p className="text-medium">
              We provide shelters with powerful tools to simplify complex
              workflows. Our platform turns administrative challenges into
              opportunities for connection and adoption.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button title="Explore features" variant="secondary">
                Explore features
              </Button>
              <Button
                title="Contact us"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="aspect-video size-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
