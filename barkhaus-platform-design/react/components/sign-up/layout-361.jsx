"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout361() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="md:mb-18 mb-12 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Rescue tech</p>
            <h2 className="text-h2 mb-5 font-bold md:mb-6">
              Powerful tools for animal shelters
            </h2>
            <p className="text-medium">
              Streamline your rescue operations with intelligent software.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          <Card>
            <div className="flex items-center justify-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="size-full object-cover"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="p-6 md:p-8 lg:p-12">
              <p className="text-small mb-2 font-semibold">
                Shelter management
              </p>
              <h3 className="text-h3 mb-5 font-bold md:mb-6">
                Centralize animal records and track every adoption journey
              </h3>
              <p>
                Manage intake, health records, and foster networks with
                unprecedented ease.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Learn more" variant="secondary">
                  Learn more
                </Button>
                <Button
                  title="Watch demo"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Watch demo
                </Button>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="size-full object-cover"
                alt="Relume placeholder image 2"
              />
            </div>
            <div className="p-6 md:p-8 lg:p-12">
              <p className="text-small mb-2 font-semibold">Marketing</p>
              <h3 className="text-h3 mb-5 font-bold md:mb-6">
                Amplify your rescue's impact and visibility
              </h3>
              <p>
                Create compelling stories that connect adopters with their
                future pets.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Explore tools" variant="secondary">
                  Explore tools
                </Button>
                <Button
                  title="See examples"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  See examples
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
