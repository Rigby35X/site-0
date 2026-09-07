"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout363() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Platform</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              How Barkhaus works
            </h2>
            <p className="text-medium">
              Seamless solutions for animal rescue organizations
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:gap-8 lg:grid-cols-2">
          <Card className="grid grid-cols-1 items-start sm:grid-cols-2">
            <div className="flex size-full items-center justify-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex h-full flex-col justify-center p-6">
              <p className="mb-2 text-small font-semibold">Manage</p>
              <h3 className="mb-2 text-h5 font-bold">
                Comprehensive shelter management tools
              </h3>
              <p>
                Track animals, manage records, and streamline daily operations
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
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
          </Card>
          <Card className="grid grid-cols-1 items-start sm:grid-cols-2">
            <div className="flex size-full items-center justify-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder image 2"
              />
            </div>
            <div className="flex h-full flex-col justify-center p-6">
              <p className="mb-2 text-small font-semibold">Market</p>
              <h3 className="mb-2 text-h5 font-bold">
                Powerful marketing and adoption tools
              </h3>
              <p>Amplify your reach and connect animals with families</p>
              <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                <Button
                  title="Discover tools"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Discover tools
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
