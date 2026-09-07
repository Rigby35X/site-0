"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { CalendarToday, LocationOn, Person } from "relume-icons";

export function EventItemHeader7() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container flex flex-col items-center text-center">
        <div className="mx-auto w-full max-w-lg">
          <h4 className="font-semibold">Rescue</h4>
          <h1 className="mt-3 text-h2 font-bold md:mt-4">
            Barkhaus Rescue Summit
          </h1>
          <p className="mt-5 text-medium md:mt-6">
            A groundbreaking conference for animal rescue professionals
            dedicated to innovation and impact
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-4 text-small md:mt-6">
            <div className="flex items-center gap-2">
              <div>
                <CalendarToday className="size-6 flex-none text-scheme-text" />
              </div>
              Sat 10 Feb 2024
            </div>
            <div className="flex items-center gap-2">
              <div>
                <LocationOn className="size-6 flex-none text-scheme-text" />
              </div>
              <span>San Francisco</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-6 items-center">
                <Person className="size-6 flex-none text-scheme-text" />
              </div>
              <span>Experts</span>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Save my spot">Save my spot</Button>
            <Button title="View event" variant="secondary">
              View event
            </Button>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <div className="w-full">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="aspect-video size-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
