"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { Fragment } from "react";
import { ChevronRight } from "relume-icons";

export function Stats53() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Impact</p>
            <h2 className="text-h2 font-bold">
              Measure your shelter's life-changing work
            </h2>
          </div>
          <div>
            <p className="text-medium">
              Visualize your shelter's impact through comprehensive metrics that
              tell the story of lives transformed.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Analyze" variant="secondary">
                Analyze
              </Button>
              <Button
                title="Download"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Download
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Fragment>
            <Card className="flex flex-col justify-center p-8 text-center first:flex first:flex-col first:md:col-span-2 first:md:row-span-1 first:lg:col-span-1 first:lg:row-span-2 [&:nth-last-child(2)]:order-last [&:nth-last-child(2)]:md:order-none">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                40%
              </p>
              <h3 className="text-h6 font-bold">Adoption rate increase</h3>
            </Card>
          </Fragment>
          <Fragment>
            <div>
              <img
                className="aspect-[3/2] size-full rounded-image object-cover"
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
                alt="Relume placeholder image"
              />
            </div>
          </Fragment>
          <Fragment>
            <Card className="flex flex-col justify-center p-8 text-center first:flex first:flex-col first:md:col-span-2 first:md:row-span-1 first:lg:col-span-1 first:lg:row-span-2 [&:nth-last-child(2)]:order-last [&:nth-last-child(2)]:md:order-none">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                40%
              </p>
              <h3 className="text-h6 font-bold">Adoption rate increase</h3>
            </Card>
          </Fragment>
          <Fragment>
            <Card className="flex flex-col justify-center p-8 text-center first:flex first:flex-col first:md:col-span-2 first:md:row-span-1 first:lg:col-span-1 first:lg:row-span-2 [&:nth-last-child(2)]:order-last [&:nth-last-child(2)]:md:order-none">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                40%
              </p>
              <h3 className="text-h6 font-bold">Adoption rate increase</h3>
            </Card>
          </Fragment>
          <Fragment>
            <div>
              <img
                className="aspect-[3/2] size-full rounded-image object-cover"
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
                alt="Relume placeholder image"
              />
            </div>
          </Fragment>
        </div>
      </div>
    </section>
  );
}
