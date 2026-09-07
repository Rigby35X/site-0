"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout19() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Manage</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Streamline shelter operations with precision
            </h2>
            <p className="mb-5 text-medium md:mb-6">
              Barkhaus management tools transform complex administrative tasks
              into simple, efficient workflows. Our platform cuts through
              bureaucratic noise like a sharp knife.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Centralized animal records</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Automated application tracking</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Volunteer coordination simplified</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Explore" variant="secondary">
                Explore
              </Button>
              <Button
                title="Learn"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Learn
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
