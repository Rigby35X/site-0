"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export function Cta32() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container flex flex-col items-center">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Create your rescue account
            </h2>
            <p className="text-medium">
              Set up your shelter's digital platform in minutes and start making
              a difference.
            </p>
            <div className="mx-auto mt-6 w-full max-w-sm md:mt-8">
              <form className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your work email"
                />
                <Button
                  title="Sign up"
                  size="sm"
                  className="items-center justify-center px-6 py-3"
                >
                  Sign up
                </Button>
              </form>
              <p className="text-tiny">
                By signing up, you agree to our terms and commit to animal
                welfare.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="size-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
