"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-scheme-text" : "bg-scheme-text/20"
    }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

export function Blog68() {
  const carouselState = useCarousel();
  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="md:mb-18 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Blog</p>
              <h2 className="text-h2 mb-3 font-bold md:mb-4">
                Latest rescue insights
              </h2>
              <p className="text-medium">
                Discover stories that drive change in animal welfare
              </p>
            </div>
          </div>
          <div className="hidden md:flex">
            <Button title="View all" variant="secondary">
              View all
            </Button>
          </div>
        </div>
        <Carousel
          setApi={carouselState.setApi}
          opts={{ loop: true, align: "start" }}
        >
          <CarouselContent className="ml-0">
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/3 md:pr-8">
              <Card>
                <a
                  href="#"
                  className="flex size-full flex-col items-center justify-start"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-[3/2] size-full object-cover"
                  />
                  <div className="px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Technology</Badge>
                      <p className="text-small inline font-semibold">
                        5 min read
                      </p>
                    </div>
                    <h2 className="text-h5 mb-2 font-bold">
                      Digital tools for modern shelters
                    </h2>
                    <p>Streamlining operations to save more animal lives</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                      className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                    >
                      Read more
                    </Button>
                  </div>
                </a>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/3 md:pr-8">
              <Card>
                <a
                  href="#"
                  className="flex size-full flex-col items-center justify-start"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-[3/2] size-full object-cover"
                  />
                  <div className="px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Adoption</Badge>
                      <p className="text-small inline font-semibold">
                        5 min read
                      </p>
                    </div>
                    <h2 className="text-h5 mb-2 font-bold">
                      Matching pets with perfect families
                    </h2>
                    <p>Innovative approaches to successful animal adoptions</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                      className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                    >
                      Read more
                    </Button>
                  </div>
                </a>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/3 md:pr-8">
              <Card>
                <a
                  href="#"
                  className="flex size-full flex-col items-center justify-start"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-[3/2] size-full object-cover"
                  />
                  <div className="px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Community</Badge>
                      <p className="text-small inline font-semibold">
                        5 min read
                      </p>
                    </div>
                    <h2 className="text-h5 mb-2 font-bold">
                      Building stronger rescue networks
                    </h2>
                    <p>
                      Collaboration strategies for animal welfare organizations
                    </p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                      className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                    >
                      Read more
                    </Button>
                  </div>
                </a>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/3 md:pr-8">
              <Card>
                <a
                  href="#"
                  className="flex size-full flex-col items-center justify-start"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-[3/2] size-full object-cover"
                  />
                  <div className="px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Training</Badge>
                      <p className="text-small inline font-semibold">
                        5 min read
                      </p>
                    </div>
                    <h2 className="text-h5 mb-2 font-bold">
                      Shelter staff development
                    </h2>
                    <p>Empowering rescue workers with essential skills</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                      className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                    >
                      Read more
                    </Button>
                  </div>
                </a>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/3 md:pr-8">
              <Card>
                <a
                  href="#"
                  className="flex size-full flex-col items-center justify-start"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-[3/2] size-full object-cover"
                  />
                  <div className="px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Impact</Badge>
                      <p className="text-small inline font-semibold">
                        5 min read
                      </p>
                    </div>
                    <h2 className="text-h5 mb-2 font-bold">
                      Measuring rescue success
                    </h2>
                    <p>Tracking meaningful outcomes in animal welfare</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                      className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                    >
                      Read more
                    </Button>
                  </div>
                </a>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/3 md:pr-8">
              <Card>
                <a
                  href="#"
                  className="flex size-full flex-col items-center justify-start"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-[3/2] size-full object-cover"
                  />
                  <div className="px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Innovation</Badge>
                      <p className="text-small inline font-semibold">
                        5 min read
                      </p>
                    </div>
                    <h2 className="text-h5 mb-2 font-bold">
                      Future of animal rescue
                    </h2>
                    <p>Emerging technologies transforming shelter management</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                      className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                    >
                      Read more
                    </Button>
                  </div>
                </a>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <div className="mt-12 flex items-center justify-between md:mt-20">
            <div className="mt-5 flex w-full items-start justify-start">
              <button
                onClick={carouselState.handleDotClick(0)}
                className={carouselState.dotClassName(0)}
              />
              <button
                onClick={carouselState.handleDotClick(1)}
                className={carouselState.dotClassName(1)}
              />
              <button
                onClick={carouselState.handleDotClick(2)}
                className={carouselState.dotClassName(2)}
              />
              <button
                onClick={carouselState.handleDotClick(3)}
                className={carouselState.dotClassName(3)}
              />
              <button
                onClick={carouselState.handleDotClick(4)}
                className={carouselState.dotClassName(4)}
              />
              <button
                onClick={carouselState.handleDotClick(5)}
                className={carouselState.dotClassName(5)}
              />
            </div>
            <div className="flex items-end justify-end gap-2 md:gap-4">
              <CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
              <CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
            </div>
          </div>
        </Carousel>
        <div className="mt-12 flex justify-end md:hidden">
          <Button title="View all" variant="secondary">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
