"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout239() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 alternate logo-alt">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">features</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">
                one platform for animal rescue success
              </h2>
              <p className="text-medium">
                Barkhaus delivers powerful tools designed to transform shelter
                operations and connect animals with loving homes.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/47d478c3-2feb-4eb4-bc98-b6a6fd70df01/2560?exp=1789257600&sig=3e129544c1256baca488aa93527a25c6a2b21fd5a30bd9d95dac204ba01fc923"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                comprehensive management
              </h3>
              <p>
                Centralize critical shelter data and workflows in a single
                intuitive interface.
              </p>
            </div>
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/2681f967-d0f2-48db-6c66-be8b1f427901/2560?exp=1789257600&sig=5f74d79694352f838295892f5586b71c2e7ee15c7e41e1a774ebe90c502a34e2"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                seamless communication
              </h3>
              <p>
                Enable real-time collaboration across shelter teams and
                volunteers.
              </p>
            </div>
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/63be2c74-fb38-4180-f620-b525ad272f01/2560?exp=1789257600&sig=fc59333dff9f767b6f3821e8108ff1330d95e1f52621d099897190f0deb1fa39"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                actionable insights
              </h3>
              <p>
                Generate meaningful reports that drive strategic
                decision-making.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button variant="secondary">explore</Button>
            <Button
              iconRight={<ChevronRight className="text-scheme-text" />}
              variant="link"
              size="link"
            >
              demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
