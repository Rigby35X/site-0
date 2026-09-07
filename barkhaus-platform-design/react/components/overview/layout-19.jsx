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
              Comprehensive shelter management made simple
            </h2>
            <p className="mb-5 text-medium md:mb-6">
              Centralize your entire shelter workflow. Track animals, manage
              records, and coordinate team efforts seamlessly.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Real-time animal tracking and health records</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Staff scheduling and volunteer coordination tools</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Integrated medical and behavioral assessment system</p>
              </li>
            </ul>
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
