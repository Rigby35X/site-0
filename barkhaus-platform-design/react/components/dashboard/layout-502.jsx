"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout502() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="md:mb-18 mx-auto mb-12 w-full max-w-lg text-center md:w-auto lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Market</p>
          <h1 className="text-h2 mb-5 font-bold md:mb-6">
            Amplify your shelter's voice
          </h1>
          <p className="text-medium">
            Leverage powerful marketing tools to increase awareness and drive
            animal adoptions.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <Button title="Launch" variant="secondary">
              Launch
            </Button>
            <Button
              title="Campaign"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Campaign
            </Button>
          </div>
        </div>
        <Tabs defaultValue="tab-one">
          <TabsList className="mb-12 items-center gap-6 md:mb-16 md:justify-center">
            <TabsTrigger
              value="tab-one"
              className="data-[state=active]:border-scheme-text rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=inactive]:border-transparent data-[state=active]:bg-transparent"
            >
              Social
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="data-[state=active]:border-scheme-text rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=inactive]:border-transparent data-[state=active]:bg-transparent"
            >
              Email
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="data-[state=active]:border-scheme-text rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=inactive]:border-transparent data-[state=active]:bg-transparent"
            >
              Web
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-one"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="rounded-image w-full object-cover"
                  alt="Relume placeholder image 1"
                />
              </div>
              <div>
                <p className="mb-3 font-semibold md:mb-4">Campaigns</p>
                <h2 className="text-h3 mb-5 font-bold md:mb-6">
                  Social media engagement tracker
                </h2>
                <p>
                  Monitor and optimize your social media presence to reach more
                  potential adopters.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Analyze" variant="secondary">
                    Analyze
                  </Button>
                  <Button
                    title="Insights"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Insights
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="rounded-image w-full object-cover"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div>
                <p className="mb-3 font-semibold md:mb-4">Campaigns</p>
                <h2 className="text-h3 mb-5 font-bold md:mb-6">
                  Social media engagement tracker
                </h2>
                <p>
                  Monitor and optimize your social media presence to reach more
                  potential adopters.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Analyze" variant="secondary">
                    Analyze
                  </Button>
                  <Button
                    title="Insights"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Insights
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="rounded-image w-full object-cover"
                  alt="Relume placeholder image 3"
                />
              </div>
              <div>
                <p className="mb-3 font-semibold md:mb-4">Campaigns</p>
                <h2 className="text-h3 mb-5 font-bold md:mb-6">
                  Social media engagement tracker
                </h2>
                <p>
                  Monitor and optimize your social media presence to reach more
                  potential adopters.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Analyze" variant="secondary">
                    Analyze
                  </Button>
                  <Button
                    title="Insights"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Insights
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
