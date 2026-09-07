"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout388() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Impact</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            Transform rescue marketing
          </h1>
          <p className="text-medium">
            Empower your shelter with tools that drive meaningful connections
            and successful adoptions.
          </p>
        </div>
        <div className="grid auto-cols-fr gap-6 md:gap-8">
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <div className="mb-5 md:mb-6">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/visibility.svg"
                  />
                </div>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Increase visibility
                </h2>
                <p>
                  Reach more potential adopters through strategic digital
                  marketing.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Explore"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Explore
                </Button>
              </div>
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <div className="mb-5 md:mb-6">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/visibility.svg"
                  />
                </div>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Increase visibility
                </h2>
                <p>
                  Reach more potential adopters through strategic digital
                  marketing.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Explore"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Explore
                </Button>
              </div>
            </div>
          </Card>
          <Card className="grid auto-cols-fr sm:col-span-2 sm:row-span-2 sm:grid-cols-2 lg:col-start-2 lg:row-start-1">
            <div className="block p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold">Proven</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Streamline marketing efforts
                </h2>
                <p>
                  Save time and resources with intuitive, integrated marketing
                  solutions.
                </p>
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
            </div>
            <div className="flex size-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-bento-portrait2.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
