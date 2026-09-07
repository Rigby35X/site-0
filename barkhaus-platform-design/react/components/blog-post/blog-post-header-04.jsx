"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronLeft } from "relume-icons";

export function BlogPostHeader4() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="grid gap-x-20 gap-y-12 md:grid-cols-[.5fr_1fr]">
          <div className="mx-auto flex size-full max-w-lg flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <Button
                title="All posts"
                variant="link"
                size="link"
                iconLeft={<ChevronLeft className="text-scheme-text" />}
                className="mb-6 md:mb-8"
                asChild={true}
              >
                <a>All posts</a>
              </Button>
              <div className="mb-5 flex w-full items-center justify-start md:mb-6">
                <Badge className="mr-4">Technology</Badge>
                <p className="inline text-small font-semibold">5 min read</p>
              </div>
              <h1 className="text-h2 font-bold">
                Revolutionizing animal rescue through intelligent technology
              </h1>
              <div className="mt-6 flex size-full flex-col items-start md:mt-8">
                <div className="flex items-center sm:mb-8 md:mb-0">
                  <div className="mr-8 md:mr-10 lg:mr-12">
                    <p className="text-small">Published on 15 March 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full overflow-hidden">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="aspect-[3/2] size-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
