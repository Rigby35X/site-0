"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout386() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Transform</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            Rescue operations reimagined
          </h1>
          <p className="text-medium">
            Unlock the full potential of your animal rescue with intelligent
            management solutions
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/night_shelter.svg"
                />
              </div>
              <h2 className="mb-3 text-h4 font-bold md:mb-4">
                Enhanced organization
              </h2>
              <p>Centralize and streamline all shelter administrative tasks</p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Discover"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Discover
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/night_shelter.svg"
                />
              </div>
              <h2 className="mb-3 text-h4 font-bold md:mb-4">
                Enhanced organization
              </h2>
              <p>Centralize and streamline all shelter administrative tasks</p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Discover"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Discover
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col sm:col-span-2 sm:row-span-2 lg:col-start-2 lg:row-start-1">
            <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8 lg:p-12">
              <div>
                <p className="mb-2 font-semibold">Impact</p>
                <h2 className="mb-5 text-h3 font-bold md:mb-6">
                  Improved animal care
                </h2>
                <p>
                  Provide comprehensive, personalized care tracking for every
                  animal in your shelter's network
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Start now" variant="secondary">
                  Start now
                </Button>
                <Button
                  title="Learn more"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Learn more
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
