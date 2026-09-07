"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export function Contact30() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4">
      <div className="container">
        <div className="mb-12 flex max-w-lg flex-col justify-start md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Reach</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Locations</h2>
          <p className="text-medium">
            Our global presence supports animal welfare organizations worldwide.
          </p>
        </div>
        <Tabs
          defaultValue="tab-1"
          orientation="vertical"
          className="relative grid auto-cols-fr grid-cols-1 gap-12 md:grid-cols-[.5fr_1fr] md:gap-y-16 lg:gap-x-20 lg:gap-y-16"
        >
          <TabsList className="relative grid h-full auto-cols-fr grid-cols-1 gap-x-4">
            <TabsTrigger
              value="tab-1"
              className="items-start justify-start rounded-none border-0 border-l py-5 pr-0 pl-8 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent"
            >
              <div className="text-left">
                <h3 className="mb-3 text-h5 font-bold md:mb-4">
                  San Francisco
                </h3>
                <p className="inline-block whitespace-normal">
                  Headquarters where innovation meets compassion for animal
                  rescue.
                </p>
                <div className="mt-5 font-semibold md:mt-6">
                  <p>Primary location</p>
                </div>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="tab-2"
              className="items-start justify-start rounded-none border-0 border-l py-5 pr-0 pl-8 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent"
            >
              <div className="text-left">
                <h3 className="mb-3 text-h5 font-bold md:mb-4">New York</h3>
                <p className="inline-block whitespace-normal">
                  Expanding our mission to support shelters across the
                  Northeast.
                </p>
                <div className="mt-5 font-semibold md:mt-6">
                  <p>Regional hub</p>
                </div>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="tab-3"
              className="items-start justify-start rounded-none border-0 border-l py-5 pr-0 pl-8 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent"
            >
              <div className="text-left">
                <h3 className="mb-3 text-h5 font-bold md:mb-4">Remote</h3>
                <p className="inline-block whitespace-normal">
                  Distributed team connecting technology with animal welfare
                  globally.
                </p>
                <div className="mt-5 font-semibold md:mt-6">
                  <p>Everywhere</p>
                </div>
              </div>
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-1"
            className="data-[state=active]:animate-tabs"
          >
            <div className="size-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="aspect-3/2 size-full rounded-image object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-2"
            className="data-[state=active]:animate-tabs"
          >
            <div className="size-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 2"
                className="aspect-3/2 size-full rounded-image object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-3"
            className="data-[state=active]:animate-tabs"
          >
            <div className="size-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 3"
                className="aspect-3/2 size-full rounded-image object-cover"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
