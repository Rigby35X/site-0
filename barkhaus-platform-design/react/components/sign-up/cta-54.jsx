"use client";

import { Button } from "@/components/ui/button";
import { BackgroundCard } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

export function Cta54() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <BackgroundCard className="relative container">
        <div className="relative z-10 flex flex-col items-center p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center">
            <h2 className="mb-5 text-h2 font-bold text-white md:mb-6">
              Stay updated on rescue innovations
            </h2>
            <p className="text-medium text-white">
              Get monthly insights, adoption tips, and technology updates for
              animal welfare professionals.
            </p>
          </div>
          <div className="mx-auto mt-6 max-w-sm md:mt-8">
            <form className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                variant="secondary"
              />
              <Button
                title="Subscribe"
                variant="alternate"
                size="sm"
                className="items-center justify-center px-6 py-3"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-tiny text-white">
              By subscribing, you agree to receive our nonprofit technology
              newsletter.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="size-full object-cover"
            alt="Relume placeholder background image"
          />
          <div className="absolute inset-0 bg-neutral-darkest/50" />
        </div>
      </BackgroundCard>
    </section>
  );
}
