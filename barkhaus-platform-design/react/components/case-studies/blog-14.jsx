"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Blog14() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="md:mb-18 mb-12 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Case studies</p>
            <h1 className="text-h1 mb-5 font-bold md:mb-6">
              Rescue stories that drive change
            </h1>
            <p className="text-medium">
              Discover how shelters are revolutionizing animal rescue with smart
              technology
            </p>
          </div>
        </div>
        <Tabs defaultValue="view-all" className="flex flex-col justify-center">
          <TabsList className="scrollbar-none mb-12 ml-[-5vw] flex w-screen items-center justify-start overflow-scroll pl-[5vw] md:mb-16 md:ml-0 md:w-full md:justify-center md:overflow-hidden md:pl-0">
            <TabsTrigger
              value="view-all"
              className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
            >
              View all
            </TabsTrigger>
            <TabsTrigger
              value="category-one"
              className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
            >
              Small shelters
            </TabsTrigger>
            <TabsTrigger
              value="category-two"
              className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
            >
              Large shelters
            </TabsTrigger>
            <TabsTrigger
              value="category-three"
              className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
            >
              Urban rescues
            </TabsTrigger>
            <TabsTrigger
              value="category-four"
              className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
            >
              Rural networks
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="view-all"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
              <Card className="flex size-full flex-col items-center justify-start">
                <a href="#" className="w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                  <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                    <Badge className="mr-4">Urban</Badge>
                    <p className="text-small inline font-semibold">
                      5 min read
                    </p>
                  </div>
                  <a className="mb-2 block" href="#">
                    <h2 className="text-h5 font-bold">
                      How Paws Hope increased adoptions
                    </h2>
                  </a>
                  <p>
                    Innovative marketing strategies that connected more dogs
                    with loving families
                  </p>
                  <Button
                    title="Read more"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                    className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                  >
                    Read more
                  </Button>
                </div>
              </Card>
              <Card className="flex size-full flex-col items-center justify-start">
                <a href="#" className="w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                  <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                    <Badge className="mr-4">Rural</Badge>
                    <p className="text-small inline font-semibold">
                      7 min read
                    </p>
                  </div>
                  <a className="mb-2 block" href="#">
                    <h2 className="text-h5 font-bold">
                      Rescue Ranch operational breakthrough
                    </h2>
                  </a>
                  <p>
                    Streamlining shelter management with cutting-edge technology
                    solutions
                  </p>
                  <Button
                    title="Read more"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                    className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                  >
                    Read more
                  </Button>
                </div>
              </Card>
              <Card className="flex size-full flex-col items-center justify-start">
                <a href="#" className="w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                  <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                    <Badge className="mr-4">Community</Badge>
                    <p className="text-small inline font-semibold">
                      6 min read
                    </p>
                  </div>
                  <a className="mb-2 block" href="#">
                    <h2 className="text-h5 font-bold">
                      Furry Friends Network expansion
                    </h2>
                  </a>
                  <p>
                    Scaling impact through integrated digital platforms and
                    community engagement
                  </p>
                  <Button
                    title="Read more"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                    className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                  >
                    Read more
                  </Button>
                </div>
              </Card>
              <Card className="flex size-full flex-col items-center justify-start">
                <a href="#" className="w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                  <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                    <Badge className="mr-4">Technology</Badge>
                    <p className="text-small inline font-semibold">
                      4 min read
                    </p>
                  </div>
                  <a className="mb-2 block" href="#">
                    <h2 className="text-h5 font-bold">
                      Transforming shelter data management
                    </h2>
                  </a>
                  <p>
                    Leveraging analytics to make smarter decisions and save more
                    animals
                  </p>
                  <Button
                    title="Read more"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                    className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                  >
                    Read more
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
          <TabsContent
            value="category-one"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
              <Card className="flex size-full flex-col items-center justify-start">
                <a href="#" className="w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                  <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                    <Badge className="mr-4">Community</Badge>
                    <p className="text-small inline font-semibold">
                      6 min read
                    </p>
                  </div>
                  <a className="mb-2 block" href="#">
                    <h2 className="text-h5 font-bold">
                      Furry Friends Network expansion
                    </h2>
                  </a>
                  <p>
                    Scaling impact through integrated digital platforms and
                    community engagement
                  </p>
                  <Button
                    title="Read more"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                    className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                  >
                    Read more
                  </Button>
                </div>
              </Card>
              <Card className="flex size-full flex-col items-center justify-start">
                <a href="#" className="w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                  <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                    <Badge className="mr-4">Technology</Badge>
                    <p className="text-small inline font-semibold">
                      4 min read
                    </p>
                  </div>
                  <a className="mb-2 block" href="#">
                    <h2 className="text-h5 font-bold">
                      Transforming shelter data management
                    </h2>
                  </a>
                  <p>
                    Leveraging analytics to make smarter decisions and save more
                    animals
                  </p>
                  <Button
                    title="Read more"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                    className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                  >
                    Read more
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
          <TabsContent
            value="category-two"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2" />
          </TabsContent>
          <TabsContent
            value="category-three"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2" />
          </TabsContent>
          <TabsContent
            value="category-four"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
