"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Blog56() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Resources</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              Shelter resources that save lives
            </h1>
            <p className="text-medium">
              Practical tools to empower animal rescue teams
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:gap-y-16 lg:grid-cols-2">
            <div className="grid gap-x-8 gap-y-6 md:grid-cols-[.75fr_1fr] md:gap-y-4">
              <a href="#" className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-square w-full rounded-image object-cover"
                />
              </a>
              <div className="flex h-full flex-col items-start justify-start">
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Marketing</Badge>
                  <p className="inline text-small font-semibold">5 min read</p>
                </div>
                <a className="mb-2 block" href="#">
                  <h3 className="text-h5 font-bold">
                    Crafting compelling adoption stories
                  </h3>
                </a>
                <p>
                  Learn how to create narratives that connect potential adopters
                  with rescue animals
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
            </div>
            <div className="grid gap-x-8 gap-y-6 md:grid-cols-[.75fr_1fr] md:gap-y-4">
              <a href="#" className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-square w-full rounded-image object-cover"
                />
              </a>
              <div className="flex h-full flex-col items-start justify-start">
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Operations</Badge>
                  <p className="inline text-small font-semibold">7 min read</p>
                </div>
                <a className="mb-2 block" href="#">
                  <h3 className="text-h5 font-bold">
                    Streamlining shelter management workflows
                  </h3>
                </a>
                <p>
                  Discover efficient strategies to optimize daily operations and
                  reduce administrative burden
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
            </div>
            <div className="grid gap-x-8 gap-y-6 md:grid-cols-[.75fr_1fr] md:gap-y-4">
              <a href="#" className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-square w-full rounded-image object-cover"
                />
              </a>
              <div className="flex h-full flex-col items-start justify-start">
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Fundraising</Badge>
                  <p className="inline text-small font-semibold">6 min read</p>
                </div>
                <a className="mb-2 block" href="#">
                  <h3 className="text-h5 font-bold">
                    Effective fundraising techniques for animal rescues
                  </h3>
                </a>
                <p>
                  Proven methods to secure donations and support for your rescue
                  mission
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
            </div>
            <div className="grid gap-x-8 gap-y-6 md:grid-cols-[.75fr_1fr] md:gap-y-4">
              <a href="#" className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-square w-full rounded-image object-cover"
                />
              </a>
              <div className="flex h-full flex-col items-start justify-start">
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Technology</Badge>
                  <p className="inline text-small font-semibold">4 min read</p>
                </div>
                <a className="mb-2 block" href="#">
                  <h3 className="text-h5 font-bold">
                    Leveraging technology in animal rescue
                  </h3>
                </a>
                <p>
                  Explore digital tools that can transform your shelter's impact
                  and reach
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
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Button
              title="View all"
              variant="secondary"
              className="mt-12 md:mt-18 lg:mt-20"
            >
              View all
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
