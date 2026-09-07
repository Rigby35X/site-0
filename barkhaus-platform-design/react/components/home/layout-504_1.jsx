"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout504_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">operations</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              Streamline Shelter Management
            </h1>
            <p className="text-medium">
              Manage every aspect of your shelter with precision and ease. Track
              animals, staff, and resources in one integrated platform.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="explore" variant="secondary">
                explore
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
        </div>
        <Tabs defaultValue="tab-one" className="flex flex-col items-center">
          <TabsList className="relative mb-12 scrollbar-none flex w-screen flex-nowrap items-center gap-x-6 overflow-auto px-[5vw] md:mb-16 md:w-auto md:max-w-full md:px-0">
            <TabsTrigger
              value="tab-one"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              intake
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              tracking
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              reporting
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-one"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <img
                  src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/d27747f9-866f-48ad-7bab-be0bc0d53301/2560?exp=1789257600&sig=1e8bdfb8271125fc7364212984610382bc6678d363d9ee7ec8ed1dba2c9144f7"
                  className="size-full object-cover"
                  alt="Relume placeholder image 1"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">workflow</p>
                <h2 className="mb-5 text-h3 font-bold md:mb-6">
                  simplify complex shelter operations
                </h2>
                <p>
                  Automate administrative tasks and reduce manual data entry.
                  Focus more on animal care and less on paperwork.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
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
            </Card>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <img
                  src="https://d1p38huyj6upaa.cloudfront.net/default-43.jpg"
                  className="size-full object-cover"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">workflow</p>
                <h2 className="mb-5 text-h3 font-bold md:mb-6">
                  simplify complex shelter operations
                </h2>
                <p>
                  Automate administrative tasks and reduce manual data entry.
                  Focus more on animal care and less on paperwork.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
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
            </Card>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <img
                  src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/ee18649e-4178-4507-52d9-edfc7b03db01/2560?exp=1789257600&sig=9b565a485e3763766d705c113f6ba6b54d1354d3bef7a0bc69064953c8bff44b"
                  className="size-full object-cover"
                  alt="Relume placeholder image 3"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">workflow</p>
                <h2 className="mb-5 text-h3 font-bold md:mb-6">
                  simplify complex shelter operations
                </h2>
                <p>
                  Automate administrative tasks and reduce manual data entry.
                  Focus more on animal care and less on paperwork.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
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
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
