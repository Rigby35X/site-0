"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout237() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4">Workflow</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              How Barkhaus transforms your shelter operations
            </h2>
            <p className="text-medium">
              A simple, powerful approach to managing animal rescue workflows
              with minimal disruption.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/model_training.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Onboard your team
              </h3>
              <p>Quick setup with guided implementation and training</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/import_contacts.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Import existing data
              </h3>
              <p>Seamless migration of current shelter records</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/service_toolbox.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Start saving lives
              </h3>
              <p>Immediate access to powerful management tools</p>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
            <Button variant="secondary">Start free trial</Button>
            <Button
              iconRight={<ChevronRight className="text-scheme-text" />}
              variant="link"
              size="link"
            >
              Watch demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
