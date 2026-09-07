"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

export function Cta46() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 alternate logo-alt">
      <div className="container">
        <Card className="grid grid-cols-1 items-start gap-6 p-8 md:items-center md:justify-between md:gap-x-12 md:gap-y-8 lg:grid-cols-[1fr_max-content] lg:gap-x-20 lg:p-12">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <h3 className="mb-3 text-h3 font-bold md:mb-4">stay connected</h3>
              <p className="text-medium">
                Get the latest insights, success stories, and rescue technology
                updates.
              </p>
            </div>
          </div>
          <div className="w-full max-w-sm">
            <form className="mb-4 grid w-full max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input id="email" type="email" placeholder="enter your email" />
              <Button
                title="sign up"
                size="sm"
                className="items-center justify-center px-6 py-3"
              >
                sign up
              </Button>
            </form>
            <p className="text-tiny">
              By signing up, you agree to our terms and receive valuable shelter
              insights.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
