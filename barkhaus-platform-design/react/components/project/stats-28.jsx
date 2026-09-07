"use client";

import { Card } from "@/components/ui/card";
import React from "react";

export function Stats28() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <div>
            <h3 className="text-h3 font-bold">
              Measuring the impact of technology on animal welfare
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          <Card className="p-8">
            <p className="mb-8 text-[3.5rem] leading-[1.3] font-bold md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
              45%
            </p>
            <h3 className="text-h6 font-bold">Adoption rate increase</h3>
            <p className="mt-2">
              Significant improvement in connecting animals with permanent
              loving homes.
            </p>
          </Card>
          <Card className="p-8">
            <p className="mb-8 text-[3.5rem] leading-[1.3] font-bold md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
              60%
            </p>
            <h3 className="text-h6 font-bold">Operational efficiency boost</h3>
            <p className="mt-2">
              Reduced administrative time and streamlined shelter management
              processes.
            </p>
          </Card>
          <Card className="p-8">
            <p className="mb-8 text-[3.5rem] leading-[1.3] font-bold md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
              75%
            </p>
            <h3 className="text-h6 font-bold">Marketing reach expansion</h3>
            <p className="mt-2">
              Enhanced digital visibility and storytelling capabilities for
              rescue organizations.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
