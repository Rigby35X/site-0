"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout410() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="md:mb-18 mx-auto mb-12 w-full max-w-lg text-center lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Metrics</p>
          <h1 className="text-h2 mb-5 font-bold md:mb-6">
            Your shelter's impact dashboard
          </h1>
          <p className="text-medium">
            Track your progress and celebrate every animal's journey
          </p>
        </div>
        <div className="relative grid auto-cols-fr grid-cols-1 gap-6 md:gap-0">
          <Card
            className="grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
            style={{ top: "15%" }}
          >
            <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-last">
              <p className="mb-2 font-semibold">Overview</p>
              <h2 className="text-h3 mb-5 font-bold md:mb-6">
                Animals in care this month
              </h2>
              <p>
                Monitor the number of animals currently under your shelter's
                protection. Each number represents a life waiting for a home.
              </p>
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Button variant="secondary">View</Button>
                <Button
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Details
                </Button>
              </div>
            </div>
            <div className="order-last flex flex-col items-center justify-center md:order-first">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card
            className="grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
            style={{ top: "18%" }}
          >
            <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-first">
              <p className="mb-2 font-semibold">Overview</p>
              <h2 className="text-h3 mb-5 font-bold md:mb-6">
                Animals in care this month
              </h2>
              <p>
                Monitor the number of animals currently under your shelter's
                protection. Each number represents a life waiting for a home.
              </p>
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Button variant="secondary">View</Button>
                <Button
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Details
                </Button>
              </div>
            </div>
            <div className="order-last flex flex-col items-center justify-center md:order-last">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 2"
              />
            </div>
          </Card>
          <Card
            className="grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
            style={{ top: "21%" }}
          >
            <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-last">
              <p className="mb-2 font-semibold">Overview</p>
              <h2 className="text-h3 mb-5 font-bold md:mb-6">
                Animals in care this month
              </h2>
              <p>
                Monitor the number of animals currently under your shelter's
                protection. Each number represents a life waiting for a home.
              </p>
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Button variant="secondary">View</Button>
                <Button
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Details
                </Button>
              </div>
            </div>
            <div className="order-last flex flex-col items-center justify-center md:order-first">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 3"
              />
            </div>
          </Card>
          <Card
            className="grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
            style={{ top: "24%" }}
          >
            <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-first">
              <p className="mb-2 font-semibold">Overview</p>
              <h2 className="text-h3 mb-5 font-bold md:mb-6">
                Animals in care this month
              </h2>
              <p>
                Monitor the number of animals currently under your shelter's
                protection. Each number represents a life waiting for a home.
              </p>
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Button variant="secondary">View</Button>
                <Button
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Details
                </Button>
              </div>
            </div>
            <div className="order-last flex flex-col items-center justify-center md:order-last">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 4"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
