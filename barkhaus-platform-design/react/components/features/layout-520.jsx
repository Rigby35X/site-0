"use client";

import { Button } from "@/components/ui/button";
import { BackgroundCard } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout520() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Powerful</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Advanced features for modern shelters
            </h2>
            <p className="text-medium">
              Comprehensive tools designed to simplify your rescue operations
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <BackgroundCard className="relative p-6 md:p-8">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-neutral-darkest/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder background image"
              />
            </div>
            <div className="relative z-10">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-3 text-h4 font-bold text-white md:mb-4">
                Comprehensive reporting and analytics
              </h3>
              <p className="text-white">
                Track performance and make data-driven decisions
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  variant="link-alt"
                  size="link"
                  iconRight={<ChevronRight className="text-white" />}
                >
                  Learn more
                </Button>
              </div>
            </div>
          </BackgroundCard>
          <BackgroundCard className="relative p-6 md:p-8">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-neutral-darkest/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder background image"
              />
            </div>
            <div className="relative z-10">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-3 text-h4 font-bold text-white md:mb-4">
                Donor management system
              </h3>
              <p className="text-white">
                Streamline fundraising and track donor contributions
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  variant="link-alt"
                  size="link"
                  iconRight={<ChevronRight className="text-white" />}
                >
                  Explore
                </Button>
              </div>
            </div>
          </BackgroundCard>
          <BackgroundCard className="relative p-6 md:p-8">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-neutral-darkest/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder background image"
              />
            </div>
            <div className="relative z-10">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-3 text-h4 font-bold text-white md:mb-4">
                Seamless platform integrations
              </h3>
              <p className="text-white">
                Connect with your favorite tools and platforms
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  variant="link-alt"
                  size="link"
                  iconRight={<ChevronRight className="text-white" />}
                >
                  Connect
                </Button>
              </div>
            </div>
          </BackgroundCard>
        </div>
      </div>
    </section>
  );
}
