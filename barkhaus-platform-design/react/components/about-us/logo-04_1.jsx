"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Logo4_1() {
  return (
    <section className="px-[5%] py-12 md:py-16 lg:py-20 scheme-4">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Partners transforming animal rescue together
            </h2>
            <p className="text-medium">
              Collaborative network of shelters and organizations driving
              meaningful change
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Explore partners" variant="secondary">
                Explore partners
              </Button>
              <Button
                title="Connect"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Connect
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex w-full items-start justify-center justify-self-center rounded-card bg-scheme-foreground px-4 pt-3.5 pb-4 md:p-3.5">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                alt="Relume placeholder image"
                className="max-h-12 md:max-h-14"
              />
            </div>
            <div className="flex w-full items-start justify-center justify-self-center rounded-card bg-scheme-foreground px-4 pt-3.5 pb-4 md:p-3.5">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                alt="Relume placeholder image"
                className="max-h-12 md:max-h-14"
              />
            </div>
            <div className="flex w-full items-start justify-center justify-self-center rounded-card bg-scheme-foreground px-4 pt-3.5 pb-4 md:p-3.5">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                alt="Relume placeholder image"
                className="max-h-12 md:max-h-14"
              />
            </div>
            <div className="flex w-full items-start justify-center justify-self-center rounded-card bg-scheme-foreground px-4 pt-3.5 pb-4 md:p-3.5">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                alt="Relume placeholder image"
                className="max-h-12 md:max-h-14"
              />
            </div>
            <div className="flex w-full items-start justify-center justify-self-center rounded-card bg-scheme-foreground px-4 pt-3.5 pb-4 md:p-3.5">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                alt="Relume placeholder image"
                className="max-h-12 md:max-h-14"
              />
            </div>
            <div className="flex w-full items-start justify-center justify-self-center rounded-card bg-scheme-foreground px-4 pt-3.5 pb-4 md:p-3.5">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                alt="Relume placeholder image"
                className="max-h-12 md:max-h-14"
              />
            </div>
            <div className="flex w-full items-start justify-center justify-self-center rounded-card bg-scheme-foreground px-4 pt-3.5 pb-4 md:p-3.5">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                alt="Relume placeholder image"
                className="max-h-12 md:max-h-14"
              />
            </div>
            <div className="flex w-full items-start justify-center justify-self-center rounded-card bg-scheme-foreground px-4 pt-3.5 pb-4 md:p-3.5">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                alt="Relume placeholder image"
                className="max-h-12 md:max-h-14"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
