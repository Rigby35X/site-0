"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Stats7() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Impact</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">
            Measurable results that transform animal rescue
          </h2>
          <p className="text-medium">
            Data-driven insights reveal the true power of streamlined shelter
            management.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="border-l border-scheme-border pl-8">
            <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
              62%
            </p>
            <h3 className="text-h6 font-bold">Adoption rate increase</h3>
          </div>
          <div className="border-l border-scheme-border pl-8">
            <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
              40%
            </p>
            <h3 className="text-h6 font-bold">Administrative time saved</h3>
          </div>
          <div className="border-l border-scheme-border pl-8">
            <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
              85%
            </p>
            <h3 className="text-h6 font-bold">Volunteer engagement boost</h3>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4 md:mt-14 lg:mt-16">
          <Button variant="secondary">Explore</Button>
          <Button
            variant="link"
            size="link"
            iconRight={<ChevronRight className="text-scheme-text" />}
          >
            Details
          </Button>
        </div>
      </div>
    </section>
  );
}
