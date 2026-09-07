"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout237() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4">Grow</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Advanced marketing tools for animal rescues
            </h2>
            <p className="text-medium">
              Powerful digital solutions designed to amplify your rescue's
              mission and reach more potential adopters.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/search_insights.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                SEO optimization
              </h3>
              <p>Improve your online visibility and search rankings.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/analytics.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Analytics dashboard
              </h3>
              <p>
                Track campaign performance and understand audience engagement.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/reminder.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Automated reminders
              </h3>
              <p>Keep potential adopters connected and informed.</p>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
            <Button variant="secondary">Learn more</Button>
            <Button
              iconRight={<ChevronRight className="text-scheme-text" />}
              variant="link"
              size="link"
            >
              Watch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
