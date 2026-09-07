"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoIframe } from "@/components/ui/video-iframe";
import React from "react";
import { PlayCircle } from "relume-icons";

export function Layout219() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4">
      <div className="container">
        <Tabs
          defaultValue="tab-one"
          className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20"
        >
          <div className="order-last flex items-center justify-center overflow-hidden md:order-first">
            <TabsContent
              value="tab-one"
              className="data-[state=active]:animate-tabs"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="size-full rounded-image object-cover"
              />
            </TabsContent>
            <TabsContent
              value="tab-two"
              className="data-[state=active]:animate-tabs"
            >
              <Dialog>
                <DialogTrigger asChild={true}>
                  <button className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                      alt="Relume placeholder image 2"
                      className="size-full overflow-hidden object-cover"
                    />
                    <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                    <PlayCircle className="absolute z-20 size-20 text-white" />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
                </DialogContent>
              </Dialog>
            </TabsContent>
            <TabsContent
              value="tab-three"
              className="data-[state=active]:animate-tabs"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 3"
                className="size-full rounded-image object-cover"
              />
            </TabsContent>
          </div>
          <TabsList className="order-first flex-col gap-x-8 md:order-last">
            <TabsTrigger
              value="tab-one"
              className="flex-col items-start justify-start rounded-none border-0 border-l py-4 pr-0 pl-6 text-left whitespace-normal data-[state=active]:bg-transparent md:pl-8"
            >
              <h3 className="mb-3 text-h4 font-bold md:mb-4">
                Increased operational efficiency
              </h3>
              <p>
                Reduce administrative time by automating complex tracking
                processes. Focus more on animal care and less on paperwork.
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="flex-col items-start justify-start rounded-none border-0 border-l py-4 pr-0 pl-6 text-left whitespace-normal data-[state=active]:bg-transparent md:pl-8"
            >
              <h3 className="mb-3 text-h4 font-bold md:mb-4">
                Enhanced data accuracy
              </h3>
              <p>
                Eliminate human error with digital tracking. Every detail is
                captured precisely, creating reliable animal records.
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="flex-col items-start justify-start rounded-none border-0 border-l py-4 pr-0 pl-6 text-left whitespace-normal data-[state=active]:bg-transparent md:pl-8"
            >
              <h3 className="mb-3 text-h4 font-bold md:mb-4">
                Improved adoption success
              </h3>
              <p>
                Better matching algorithms lead to higher adoption rates and
                more successful, long-term animal placements.
              </p>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}
