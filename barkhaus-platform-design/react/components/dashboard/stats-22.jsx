"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { VideoIframe } from "@/components/ui/video-iframe";
import React from "react";
import { PlayCircle } from "relume-icons";

export function Stats22() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Impact</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">
            Your shelter's performance at a glance
          </h2>
          <p className="text-medium">
            Visualize your shelter's progress and celebrate every milestone
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-0 lg:grid-cols-[0.5fr_1fr]">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 md:gap-y-12 md:p-8 lg:grid-cols-1 lg:gap-x-0 lg:p-12">
            <div>
              <h1 className="mb-2 text-h1 font-bold">40%</h1>
              <h3 className="text-h6 font-bold">Adoption rate increase</h3>
            </div>
            <div>
              <h1 className="mb-2 text-h1 font-bold">60%</h1>
              <h3 className="text-h6 font-bold">Faster intake processing</h3>
            </div>
            <div>
              <h1 className="mb-2 text-h1 font-bold">75%</h1>
              <h3 className="text-h6 font-bold">
                Improved volunteer coordination
              </h3>
            </div>
          </div>
          <div className="flex flex-col">
            <Dialog>
              <DialogTrigger className="relative flex size-full w-full items-center justify-center overflow-hidden rounded-image">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
                <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                <PlayCircle className="absolute z-20 size-20 text-white" />
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
