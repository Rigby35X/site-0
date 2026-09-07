"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import { ChevronRight } from "relume-icons";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselPreviousClass = (index) => {
    return `z-30 size-12 ${index === 1 ? "hidden" : ""}`;
  };

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrentIndex(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return {
    api,
    setApi,
    carouselPreviousClass,
    currentIndex,
  };
};

export function Timeline18() {
  const useActive = useCarousel();
  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Journey</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Project development milestones
            </h2>
            <p className="text-medium">
              A comprehensive roadmap of innovation and impact. Each phase
              carefully crafted to solve critical shelter challenges.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Review" variant="secondary">
                Review
              </Button>
              <Button
                title="Timeline"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Timeline
              </Button>
            </div>
          </div>
        </div>
        <Carousel
          setApi={useActive.setApi}
          className="relative h-full overflow-hidden"
        >
          <div className="absolute left-0 z-20 h-full w-8 bg-gradient-to-r from-scheme-background to-transparent lg:w-16" />
          <div className="absolute right-0 z-20 h-full w-8 bg-gradient-to-l from-scheme-background to-transparent lg:w-16" />
          <CarouselContent className="ml-0">
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="w-full rounded-image"
                  />
                </div>
                <div className="mt-8 mb-4 flex w-full items-center">
                  <div className="h-[3px] w-full bg-scheme-text" />
                  <div className="z-20 size-3.75 flex-none rounded-full bg-scheme-text shadow-[0_0_0_8px_var(--color-scheme-background)]" />
                  <div className="h-[3px] w-full bg-scheme-text" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-h5 font-bold">Q1</h3>
                  <p>
                    Initial research and stakeholder interviews with animal
                    rescue organizations to understand core operational
                    challenges.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 2"
                    className="w-full rounded-image"
                  />
                </div>
                <div className="mt-8 mb-4 flex w-full items-center">
                  <div className="h-[3px] w-full bg-scheme-text" />
                  <div className="z-20 size-3.75 flex-none rounded-full bg-scheme-text shadow-[0_0_0_8px_var(--color-scheme-background)]" />
                  <div className="h-[3px] w-full bg-scheme-text" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-h5 font-bold">Q2</h3>
                  <p>
                    Prototype development and user experience design focusing on
                    intuitive interface and seamless functionality.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 3"
                    className="w-full rounded-image"
                  />
                </div>
                <div className="mt-8 mb-4 flex w-full items-center">
                  <div className="h-[3px] w-full bg-scheme-text" />
                  <div className="z-20 size-3.75 flex-none rounded-full bg-scheme-text shadow-[0_0_0_8px_var(--color-scheme-background)]" />
                  <div className="h-[3px] w-full bg-scheme-text" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-h5 font-bold">Q3</h3>
                  <p>
                    Beta testing with select shelters to validate platform
                    effectiveness and gather real-world performance data.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 4"
                    className="w-full rounded-image"
                  />
                </div>
                <div className="mt-8 mb-4 flex w-full items-center">
                  <div className="h-[3px] w-full bg-scheme-text" />
                  <div className="z-20 size-3.75 flex-none rounded-full bg-scheme-text shadow-[0_0_0_8px_var(--color-scheme-background)]" />
                  <div className="h-[3px] w-full bg-scheme-text" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-h5 font-bold">Q4</h3>
                  <p>
                    Full platform launch and initial implementation support for
                    participating animal rescue organizations.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 5"
                    className="w-full rounded-image"
                  />
                </div>
                <div className="mt-8 mb-4 flex w-full items-center">
                  <div className="h-[3px] w-full bg-scheme-text" />
                  <div className="z-20 size-3.75 flex-none rounded-full bg-scheme-text shadow-[0_0_0_8px_var(--color-scheme-background)]" />
                  <div className="h-[3px] w-full bg-scheme-text" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-h5 font-bold">Q5</h3>
                  <p>
                    Continuous improvement and feature enhancement based on user
                    feedback and emerging shelter management needs.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 6"
                    className="w-full rounded-image"
                  />
                </div>
                <div className="mt-8 mb-4 flex w-full items-center">
                  <div className="h-[3px] w-full bg-scheme-text" />
                  <div className="z-20 size-3.75 flex-none rounded-full bg-scheme-text shadow-[0_0_0_8px_var(--color-scheme-background)]" />
                  <div className="h-[3px] w-full bg-scheme-text" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-h5 font-bold">Q6</h3>
                  <p>
                    Expansion of platform capabilities and integration of
                    advanced machine learning adoption matching algorithms.
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious
            className={useActive.carouselPreviousClass(useActive.currentIndex)}
          />
          <CarouselNext className="z-30 size-12" />
        </Carousel>
      </div>
    </section>
  );
}
