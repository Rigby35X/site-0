"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout386() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Connect</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            Integration settings
          </h1>
          <p className="text-medium">
            Connect with tools that enhance your rescue operations
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/stream_apps.svg"
                />
              </div>
              <h2 className="mb-3 text-h4 font-bold md:mb-4">
                Third-party applications
              </h2>
              <p>
                Seamlessly integrate external tools to streamline your workflow.
              </p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Add"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Add
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/stream_apps.svg"
                />
              </div>
              <h2 className="mb-3 text-h4 font-bold md:mb-4">
                Third-party applications
              </h2>
              <p>
                Seamlessly integrate external tools to streamline your workflow.
              </p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Add"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Add
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col sm:col-span-2 sm:row-span-2 lg:col-start-2 lg:row-start-1">
            <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8 lg:p-12">
              <div>
                <p className="mb-2 font-semibold">API</p>
                <h2 className="mb-5 text-h3 font-bold md:mb-6">
                  Customize advanced API connections for deeper platform
                  interoperability.
                </h2>
                <p>Manage</p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Connect" variant="secondary">
                  Connect
                </Button>
                <Button
                  title="Review"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Review
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
