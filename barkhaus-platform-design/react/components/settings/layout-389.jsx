"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout389() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Secure</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            Data privacy and security
          </h1>
          <p className="text-medium">
            Protect your organization's sensitive information
          </p>
        </div>
        <div className="grid auto-cols-fr gap-6 md:gap-8 lg:grid-cols-3">
          <Card className="grid auto-cols-fr sm:col-span-2 sm:grid-cols-2 lg:row-span-2 lg:row-start-1">
            <div className="flex size-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-bento-portrait2.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </div>
            <div className="block p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold">Privacy</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Data protection settings
                </h2>
                <p>Control how your rescue's data is stored and managed.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Configure"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Configure
                </Button>
              </div>
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <div className="mb-5 md:mb-6">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/security.svg"
                  />
                </div>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Two-factor authentication
                </h2>
                <p>
                  Add an extra layer of security to prevent unauthorized access.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Enable"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Enable
                </Button>
              </div>
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <div className="mb-5 md:mb-6">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/security.svg"
                  />
                </div>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Two-factor authentication
                </h2>
                <p>
                  Add an extra layer of security to prevent unauthorized access.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Enable"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Enable
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
