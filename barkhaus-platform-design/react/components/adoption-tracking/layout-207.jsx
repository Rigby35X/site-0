"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout207() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Integrate</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Seamless connections with your existing shelter management tools
            </h2>
            <p className="mb-5 text-medium md:mb-6">
              Eliminate manual data entry and reduce administrative overhead
              with our smart integration capabilities.
            </p>
            <div className="grid grid-cols-1 gap-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    className="size-6 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/sync.svg"
                  />
                </div>
                <p>Direct veterinary system sync</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    className="size-6 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/analytics.svg"
                  />
                </div>
                <p>Automated reporting and analytics</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    className="size-6 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/track_changes.svg"
                  />
                </div>
                <p>Simplified financial tracking</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Explore integrations" variant="secondary">
                Explore integrations
              </Button>
              <Button
                title="View compatibility"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                View compatibility
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
