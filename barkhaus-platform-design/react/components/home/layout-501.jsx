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
          <p className="mb-3 font-semibold md:mb-4">adoptions</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            simplify animal adoption process
          </h1>
          <p className="text-medium">
            Comprehensive adoption tracking that makes finding forever homes
            faster and more efficient.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <Button title="explore tracking" variant="secondary">
              explore tracking
            </Button>
            <Button
              title="watch demo"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              watch demo
            </Button>
          </div>
        </div>
        <Tabs defaultValue="tab-one">
          <TabsList className="mb-12 items-center gap-6 md:mb-16 md:justify-center">
            <TabsTrigger
              value="tab-one"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              matching
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              screening
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              follow-up
            </TabsTrigger>
          </TabsList>
          <div>
            <TabsContent
              value="tab-one"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                <div>
                  <p className="mb-3 font-semibold md:mb-4">matching</p>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    intelligent animal matching
                  </h2>
                  <p>
                    Advanced algorithms help match animals with ideal families
                    based on lifestyle, personality, and compatibility.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="learn more" variant="secondary">
                      learn more
                    </Button>
                    <Button
                      title="see how"
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      see how
                    </Button>
                  </div>
                </div>
                <div>
                  <img
                    src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/21b9405a-e295-4705-c2ba-f8475a7a1b01/2560?exp=1789257600&sig=dbb8cf68e010e7db3105e2522c8259c60584e7177db90074c6ccdb0151199dfb"
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
                  <p className="mb-3 font-semibold md:mb-4">screening</p>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    streamline adoption applications
                  </h2>
                  <p>
                    Simplify and accelerate the adoption process with digital
                    applications and comprehensive background checks.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="discover" variant="secondary">
                      discover
                    </Button>
                    <Button
                      title="view process"
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      view process
                    </Button>
                  </div>
                </div>
                <div>
                  <img
                    src="https://d1p38huyj6upaa.cloudfront.net/default-35.jpg"
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
                  <p className="mb-3 font-semibold md:mb-4">follow-up</p>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    support beyond adoption
                  </h2>
                  <p>
                    Provide ongoing support and resources to ensure successful,
                    long-term animal placements.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="explore resources" variant="secondary">
                      explore resources
                    </Button>
                    <Button
                      title="get support"
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      get support
                    </Button>
                  </div>
                </div>
                <div>
                  <img
                    src="https://d1p38huyj6upaa.cloudfront.net/default-28.jpg"
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
