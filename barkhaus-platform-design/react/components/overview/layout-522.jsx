"use client";

import { Button } from "@/components/ui/button";
import { BackgroundCard } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout522() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Empower</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Why shelters choose Barkhaus
            </h2>
            <p className="text-medium">
              Discover the features that make animal rescue management
              effortless
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <BackgroundCard className="relative p-6 sm:col-span-2 md:p-8 lg:p-12">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-neutral-darkest/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder background image"
              />
            </div>
            <div className="relative z-10">
              <p className="mb-2 inline-block text-small font-semibold text-white">
                User-friendly
              </p>
              <h3 className="mb-5 text-h3 font-bold text-white md:mb-6">
                Intuitive interface for all skill levels
              </h3>
              <p className="text-white">
                No technical expertise required to get started
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button variant="secondary-alt">Learn more</Button>
                <Button
                  iconRight={<ChevronRight className="text-scheme-text" />}
                  variant="link-alt"
                  size="link"
                >
                  Watch demo
                </Button>
              </div>
            </div>
          </BackgroundCard>
          <BackgroundCard className="relative flex flex-col p-6 md:p-8 lg:p-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-neutral-darkest/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder background image"
              />
            </div>
            <div className="relative z-10 flex flex-1 flex-col justify-between">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-2 text-h5 font-bold text-white">
                Comprehensive tools
              </h3>
              <p className="text-white">
                All-in-one platform for shelter management
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  iconRight={<ChevronRight className="text-scheme-text" />}
                  variant="link-alt"
                  size="link"
                >
                  Watch demo
                </Button>
              </div>
            </div>
          </BackgroundCard>
          <BackgroundCard className="relative flex flex-col p-6 md:p-8 lg:p-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-neutral-darkest/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder background image"
              />
            </div>
            <div className="relative z-10 flex flex-1 flex-col justify-between">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-2 text-h5 font-bold text-white">
                Community support
              </h3>
              <p className="text-white">
                Dedicated customer success team always ready to help
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  iconRight={<ChevronRight className="text-scheme-text" />}
                  variant="link-alt"
                  size="link"
                >
                  Watch demo
                </Button>
              </div>
            </div>
          </BackgroundCard>
        </div>
      </div>
    </section>
  );
}
