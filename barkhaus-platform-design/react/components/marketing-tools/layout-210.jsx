"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout210() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Communicate</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Powerful email campaigns that connect
            </h2>
            <p className="mb-5 text-medium md:mb-6">
              Create targeted email campaigns that tell meaningful stories and
              drive animal adoptions
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Segmented audience targeting</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Customizable email templates</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Performance tracking analytics</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Learn more" variant="secondary">
                Learn more
              </Button>
              <Button
                title="Watch demo"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Watch demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
