"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Stats29() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Impact</p>
            <h2 className="text-h2 font-bold">
              Transforming animal rescue one shelter at a time
            </h2>
          </div>
          <div>
            <p className="text-medium">
              Our platform drives real change in animal welfare. By empowering
              shelters with intelligent technology, we help turn data into
              meaningful connections between animals and families.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="secondary">Download report</Button>
              <Button
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col justify-between p-8 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2">
            <p className="mb-8 text-[3.5rem] leading-[1.3] font-bold md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
              50%
            </p>
            <div>
              <h3 className="text-h6 font-bold">Faster adoption rates</h3>
              <p className="mt-2">
                Shelters reduce time animals spend waiting for homes
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
              75%
            </p>
            <div>
              <h3 className="text-h6 font-bold">
                Reduced administrative burden
              </h3>
              <p className="mt-2">
                Teams spend more time with animals, less on paperwork
              </p>
            </div>
          </Card>
          <Card className="order-last p-8 md:order-none">
            <p className="mb-8 text-[3.5rem] leading-[1.3] font-bold md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
              90%
            </p>
            <div>
              <h3 className="text-h6 font-bold">Improved shelter efficiency</h3>
              <p className="mt-2">
                Streamlined processes that help more animals find forever homes
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
