"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta31_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 alternate logo-alt">
      <div className="container flex flex-col items-center">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              see barkhaus in action
            </h2>
            <p className="text-medium">
              Join innovative shelters transforming animal rescue through
              intelligent technology.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button title="start now">start now</Button>
              <Button title="learn more" variant="secondary">
                learn more
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/fa4ad73f-4b65-4147-2538-4d989691c701/2560?exp=1789257600&sig=450879589a42d8a4451638c3042b1f486b7b6f522ce6b846d57ac127f2d99945"
            className="size-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
