"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout361() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="md:mb-18 mb-12 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">impact</p>
            <h2 className="text-h2 mb-5 font-bold md:mb-6">
              rescue more animals
            </h2>
            <p className="text-medium">
              Transform shelter efficiency and increase adoption rates with
              intelligent technology.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          <Card>
            <div className="flex items-center justify-center">
              <img
                src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/b77b741b-b30b-431c-c197-6057ab125901/2560?exp=1789257600&sig=cbc16ee6ba2133b938ce42532764d55b2a3267dedc0f109650dfc3b17f9a81d3"
                className="size-full object-cover"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="p-6 md:p-8 lg:p-12">
              <p className="text-small mb-2 font-semibold">operations</p>
              <h3 className="text-h3 mb-5 font-bold md:mb-6">
                streamline daily workflows
              </h3>
              <p>
                Reduce administrative burden and focus more time on animal care
                and community engagement.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="optimize" variant="secondary">
                  optimize
                </Button>
                <Button
                  title="learn"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  learn
                </Button>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-center">
              <img
                src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/1daf2d7d-607e-4f10-d9de-a4354f745c01/2560?exp=1789257600&sig=aa8b493270bc8d1afb7afc9be4b3257607d72a4a9b5e79b4d473632fed2dee95"
                className="size-full object-cover"
                alt="Relume placeholder image 2"
              />
            </div>
            <div className="p-6 md:p-8 lg:p-12">
              <p className="text-small mb-2 font-semibold">marketing</p>
              <h3 className="text-h3 mb-5 font-bold md:mb-6">
                amplify animal stories
              </h3>
              <p>
                Create compelling narratives that connect potential adopters
                with shelter animals.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="discover" variant="secondary">
                  discover
                </Button>
                <Button
                  title="view"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  view
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
