"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout19_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Connect</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Smart adoption tracking and matching
            </h2>
            <p className="mb-5 text-medium md:mb-6">
              Simplify the adoption process with intelligent matching and
              comprehensive application management.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Intelligent adopter-animal matching algorithm</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Comprehensive application tracking and management</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Real-time status updates for adoption processes</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Start matching" variant="secondary">
                Start matching
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
