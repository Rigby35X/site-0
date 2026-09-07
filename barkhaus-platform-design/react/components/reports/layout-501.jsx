"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout501() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 md:w-auto lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Features</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            Reports built for rescue heroes
          </h1>
          <p className="text-medium">
            Powerful tools designed to simplify complex data and drive
            meaningful change in animal welfare.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <Button title="View all features" variant="secondary">
              View all features
            </Button>
            <Button
              title="Watch overview"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Watch overview
            </Button>
          </div>
        </div>
        <Tabs defaultValue="tab-one">
          <TabsList className="mb-12 items-center gap-6 md:mb-16 md:justify-center">
            <TabsTrigger
              value="tab-one"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Real-time data
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Easy sharing
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Deep analytics
            </TabsTrigger>
          </TabsList>
          <div>
            <TabsContent
              value="tab-one"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Speed</p>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Instant data processing
                  </h2>
                  <p>
                    Get live updates and real-time insights without waiting for
                    manual calculations or complex spreadsheets.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Explore speed" variant="secondary">
                      Explore speed
                    </Button>
                    <Button
                      title="See performance"
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      See performance
                    </Button>
                  </div>
                </div>
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full rounded-image object-cover"
                    alt="Relume placeholder image 1"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-two"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Collaboration</p>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Seamless team reporting
                  </h2>
                  <p>
                    Share reports instantly across your team. Ensure everyone
                    has access to the latest insights and metrics.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="View sharing" variant="secondary">
                      View sharing
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
                    alt="Relume placeholder image 2"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-three"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Insights</p>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Advanced analytical tools
                  </h2>
                  <p>
                    Dive deep into your data with advanced filtering, trend
                    analysis, and predictive modeling capabilities.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Explore analytics" variant="secondary">
                      Explore analytics
                    </Button>
                    <Button
                      title="See capabilities"
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      See capabilities
                    </Button>
                  </div>
                </div>
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full rounded-image object-cover"
                    alt="Relume placeholder image 3"
                  />
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
