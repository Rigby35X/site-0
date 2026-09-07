"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout504() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 alternate logo-alt">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">marketing</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              amplify animal adoption
            </h1>
            <p className="text-medium">
              Powerful marketing tools designed specifically for animal shelters
              to increase visibility and adoption rates.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="explore tools" variant="secondary">
                explore tools
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
              social media
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              campaigns
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              storytelling
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-one"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <img
                  src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/2832e10e-c646-47fb-917a-07c8c6215d01/2560?exp=1789257600&sig=8c630c5cf29de1d9a93b74bce2ea2fc998131c6d1cfd93d4a006a54badd173a6"
                  className="size-full object-cover"
                  alt="Relume placeholder image 1"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">content</p>
                <h2 className="mb-5 text-h3 font-bold md:mb-6">
                  create compelling animal stories
                </h2>
                <p>
                  Generate engaging content that highlights each animal's unique
                  personality and increases adoption potential.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="learn more" variant="secondary">
                    learn more
                  </Button>
                  <Button
                    title="see examples"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    see examples
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
                  src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/3816a65b-3b89-45f2-ba25-fcbf56a30601/2560?exp=1789257600&sig=2b6ace200c80dcdbe299bb96f01fccf7cf17780fb712ca8490bf33366217d267"
                  className="size-full object-cover"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">content</p>
                <h2 className="mb-5 text-h3 font-bold md:mb-6">
                  create compelling animal stories
                </h2>
                <p>
                  Generate engaging content that highlights each animal's unique
                  personality and increases adoption potential.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="learn more" variant="secondary">
                    learn more
                  </Button>
                  <Button
                    title="see examples"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    see examples
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
                  src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/b926b28c-4bda-4ef4-a880-ca7f12d3f201/2560?exp=1789257600&sig=4f651f173988b1c2e55a24213da2a160052f35fc28e9993f6b73c0890db56240"
                  className="size-full object-cover"
                  alt="Relume placeholder image 3"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">content</p>
                <h2 className="mb-5 text-h3 font-bold md:mb-6">
                  create compelling animal stories
                </h2>
                <p>
                  Generate engaging content that highlights each animal's unique
                  personality and increases adoption potential.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="learn more" variant="secondary">
                    learn more
                  </Button>
                  <Button
                    title="see examples"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    see examples
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
