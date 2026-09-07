"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { CalendarToday, ChevronRight, LocationOn } from "relume-icons";

export function Event24() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mb-12 grid auto-cols-fr grid-cols-1 items-end gap-12 md:mb-18 md:grid-cols-[1fr_max-content] lg:mb-20 lg:gap-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Upcoming</p>
            <h1 className="mb-3 text-h2 font-bold md:mb-4">Events</h1>
            <p className="text-medium">
              Discover opportunities to learn and grow in animal rescue
              community.
            </p>
          </div>
          <Button
            variant="secondary"
            title="View all"
            className="hidden md:flex"
          >
            View all
          </Button>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-12">
          <Card className="flex flex-col items-start">
            <a href="#" className="relative block aspect-[3/2] w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full object-cover"
              />
              <Badge className="absolute top-4 right-4" variant="alternate">
                Webinar
              </Badge>
            </a>
            <div className="flex flex-col items-start p-6">
              <div className="mb-3 flex flex-wrap gap-4 text-small md:mb-4">
                <div className="flex items-center gap-2">
                  <CalendarToday className="size-6 flex-none text-scheme-text" />
                  Sat 10 Feb 2024
                </div>
                <div className="flex items-center gap-2">
                  <LocationOn className="size-6 flex-none text-scheme-text" />
                  <span>Online</span>
                </div>
              </div>
              <a href="#" className="mb-2">
                <h2 className="text-h5 font-bold">
                  Shelter Management Strategies
                </h2>
              </a>
              <p>
                Learn innovative techniques to improve shelter operations and
                increase adoption rates.
              </p>
              <Button
                title="View event"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 md:mt-6"
              >
                View event
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col items-start">
            <a href="#" className="relative block aspect-[3/2] w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full object-cover"
              />
              <Badge className="absolute top-4 right-4" variant="alternate">
                Workshop
              </Badge>
            </a>
            <div className="flex flex-col items-start p-6">
              <div className="mb-3 flex flex-wrap gap-4 text-small md:mb-4">
                <div className="flex items-center gap-2">
                  <CalendarToday className="size-6 flex-none text-scheme-text" />
                  Sun 11 Feb 2024
                </div>
                <div className="flex items-center gap-2">
                  <LocationOn className="size-6 flex-none text-scheme-text" />
                  <span>San Francisco</span>
                </div>
              </div>
              <a href="#" className="mb-2">
                <h2 className="text-h5 font-bold">
                  Rescue Marketing Essentials
                </h2>
              </a>
              <p>
                Discover powerful marketing techniques to help more animals find
                their forever homes.
              </p>
              <Button
                title="View event"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 md:mt-6"
              >
                View event
              </Button>
            </div>
          </Card>
        </div>
        <div className="mt-12 flex justify-end md:hidden">
          <Button variant="secondary" title="View all">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
