"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta31_2() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container flex flex-col items-center">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Ready to save more lives?
            </h2>
            <p className="text-medium">
              Start your free trial and see how Barkhaus can revolutionize your
              shelter's operations in minutes.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button title="Start free trial">Start free trial</Button>
              <Button title="Book demo" variant="secondary">
                Book demo
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="size-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
