"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout10() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Track</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              Adoption journey insights
            </h1>
            <p className="mb-6 text-medium md:mb-8">
              Monitor each adoption application with detailed tracking and
              comprehensive reporting.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/progress_activity.svg"
                  />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">Applications</h6>
                <p>
                  Follow the progress of current adoption applications in real
                  time.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/all_match.svg"
                  />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">Matches</h6>
                <p>
                  Identify potential perfect matches between animals and
                  prospective families.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Report" variant="secondary">
                Report
              </Button>
              <Button
                title="Export"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Export
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
