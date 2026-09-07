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
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 scheme-4">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Journey</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Transformation timeline of urban animal rescue
            </h2>
            <p className="text-medium">
              A chronological map of how technology reshapes animal welfare and
              rescue operations.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Explore" variant="secondary">
                Explore
              </Button>
              <Button
                title="Details"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Details
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
                  <h3 className="mb-2 text-h5 font-bold">Month 1</h3>
                  <p>
                    Initial platform integration and staff training begins with
                    minimal disruption to daily operations.
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
                  <h3 className="mb-2 text-h5 font-bold">Month 2</h3>
                  <p>
                    Workflow optimization starts showing first efficiency gains
                    and simplified administrative processes.
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
                  <h3 className="mb-2 text-h5 font-bold">Month 3</h3>
                  <p>
                    Significant improvements in adoption rates and volunteer
                    engagement become measurable and substantial.
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
                  <h3 className="mb-2 text-h5 font-bold">Month 4</h3>
                  <p>
                    Marketing tools fully implemented, creating more compelling
                    animal stories and increasing adoption potential.
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
                  <h3 className="mb-2 text-h5 font-bold">Month 5</h3>
                  <p>
                    Complete system integration achieved, with shelter operating
                    at peak efficiency and effectiveness.
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
                  <h3 className="mb-2 text-h5 font-bold">Month 6</h3>
                  <p>
                    Comprehensive reporting and analytics provide deep insights
                    into shelter performance and animal welfare.
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
