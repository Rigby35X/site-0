"use client";

import { Card } from "@/components/ui/card";
import React from "react";

export function Stats30() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-h3 font-bold">
              Marketing tools that drive real results for animal rescues
            </h3>
          </div>
          <div>
            <p className="text-medium">
              Data-driven insights help shelters connect more animals with
              loving homes. Our platform turns marketing challenges into
              opportunities for meaningful impact.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col justify-between p-8 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2">
            <p className="mb-8 text-[3.5rem] leading-[1.3] font-bold md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
              40%
            </p>
            <div>
              <h3 className="text-h6 font-bold">Increased adoption rates</h3>
              <p className="mt-2">
                Shelters see significant growth in successful animal placements.
              </p>
            </div>
          </Card>
          <img
            className="aspect-[3/2] size-full rounded-image object-cover"
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            alt="Relume placeholder image"
          />
          <Card className="p-8">
            <p className="mb-8 text-[3.5rem] leading-[1.3] font-bold md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
              55%
            </p>
            <div>
              <h3 className="text-h6 font-bold">Enhanced online engagement</h3>
              <p className="mt-2">
                More potential adopters discovering and connecting with shelter
                animals.
              </p>
            </div>
          </Card>
          <Card className="order-last p-8 md:order-none">
            <p className="mb-8 text-[3.5rem] leading-[1.3] font-bold md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
              65%
            </p>
            <div>
              <h3 className="text-h6 font-bold">Efficient marketing</h3>
              <p className="mt-2">
                Reduced time and resources spent on traditional marketing
                methods.
              </p>
            </div>
          </Card>
          <img
            className="aspect-[3/2] size-full rounded-image object-cover"
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
