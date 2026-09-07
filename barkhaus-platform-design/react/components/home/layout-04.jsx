"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout4() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 alternate logo-alt">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">The Problem</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              Rescues are doing incredible work, often with limited time and
              outdated tools.
            </h1>
            <p className="mb-6 text-medium md:mb-8">
              Every day, rescues juggle spreadsheets, emails, and social media
              while trying to save animals’ lives. Barkhaus brings all your
              operations into one intuitive dashboard—built specifically for
              animal rescues and shelters.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">
                  Subheading one
                </h6>
              </div>
              <div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4"></h6>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="empower" variant="secondary">
                empower
              </Button>
              <Button
                title="insights"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                insights
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/9c2ec883-c3ec-4434-daa1-1dd3476df401/2560?exp=1789257600&sig=fee055ed6b590fa9f076f34c4c6e6b3580b8f2d40db89cba65c3cfcd942e1894"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
