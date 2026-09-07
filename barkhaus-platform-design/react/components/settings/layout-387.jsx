"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout387() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Alert</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            Notification preferences
          </h1>
          <p className="text-medium">
            Customize how and when you receive updates
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <Card className="flex flex-col sm:col-span-2 sm:row-span-2">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8 lg:p-12">
              <div>
                <p className="mb-2 font-semibold">Notify</p>
                <h2 className="mb-5 text-h3 font-bold md:mb-6">
                  Email notification settings
                </h2>
                <p>
                  Choose which email alerts you want to receive about shelter
                  activities and adoptions.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Manage" variant="secondary">
                  Manage
                </Button>
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
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/notifications.svg"
                />
              </div>
              <h2 className="mb-3 text-h4 font-bold md:mb-4">
                In-app notification preferences
              </h2>
              <p>
                Select real-time platform notifications that matter most to you.
              </p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Customize"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Customize
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/notifications.svg"
                />
              </div>
              <h2 className="mb-3 text-h4 font-bold md:mb-4">
                In-app notification preferences
              </h2>
              <p>
                Select real-time platform notifications that matter most to you.
              </p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Customize"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Customize
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
