"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { DribbbleLogo, LinkedinLogo, XLogo } from "relume-icons";

export function Team5() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Team</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Our team</h2>
          <p className="text-medium">
            Passionate technologists and animal welfare advocates united
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <div className="mx-auto size-20 min-h-20 min-w-20 overflow-hidden rounded-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Emma Rodriguez</h5>
              <h6 className="text-medium">Founder CEO</h6>
            </div>
            <p>
              Rescued three dogs and built software to help others do the same
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href="#">
                <LinkedinLogo className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <XLogo className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <DribbbleLogo className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <div className="mx-auto size-20 min-h-20 min-w-20 overflow-hidden rounded-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">David Chen</h5>
              <h6 className="text-medium">CTO</h6>
            </div>
            <p>
              Engineered platforms that connect technology with compassionate
              missions
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href="#">
                <LinkedinLogo className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <XLogo className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <DribbbleLogo className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <div className="mx-auto size-20 min-h-20 min-w-20 overflow-hidden rounded-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Maria Santos</h5>
              <h6 className="text-medium">Product Lead</h6>
            </div>
            <p>
              Designed intuitive tools that simplify complex shelter management
              workflows
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href="#">
                <LinkedinLogo className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <XLogo className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <DribbbleLogo className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <div className="mx-auto size-20 min-h-20 min-w-20 overflow-hidden rounded-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Alex Thompson</h5>
              <h6 className="text-medium">Design Director</h6>
            </div>
            <p>
              Created visual experiences that tell powerful stories of animal
              rescue
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href="#">
                <LinkedinLogo className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <XLogo className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <DribbbleLogo className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <div className="mx-auto size-20 min-h-20 min-w-20 overflow-hidden rounded-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Rachel Kim</h5>
              <h6 className="text-medium">Community Manager</h6>
            </div>
            <p>
              Connects shelters nationwide and amplifies their impact through
              strategic partnerships
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href="#">
                <LinkedinLogo className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <XLogo className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <DribbbleLogo className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <div className="mx-auto size-20 min-h-20 min-w-20 overflow-hidden rounded-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Michael Garcia</h5>
              <h6 className="text-medium">Data Scientist</h6>
            </div>
            <p>
              Develops algorithms that help match animals with their perfect
              forever homes
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href="#">
                <LinkedinLogo className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <XLogo className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <DribbbleLogo className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24">
          <h4 className="mb-3 text-h4 font-bold md:mb-4">We're hiring</h4>
          <p className="text-medium">
            Join our mission to transform animal rescue technology
          </p>
          <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
            <Button title="Open positions" variant="secondary">
              Open positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
