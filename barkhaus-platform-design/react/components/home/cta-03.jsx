"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta3() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 scheme-4">
      <div className="relative z-10 container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-h2 font-bold text-white md:mb-6">
            contact us
          </h2>
          <p className="text-medium text-white">
            We're here to support your animal rescue mission and answer any
            questions.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="connect with our team" variant="alternate">
              connect with our team
            </Button>
            <Button
              title="Every animal deserves a voice. Reach out to Barkhaus and help us transform rescue technology. Our team stands ready to support shelters, answer questions, and drive meaningful change in animal welfare."
              variant="secondary-alt"
            >
              Every animal deserves a voice. Reach out to Barkhaus and help us
              transform rescue technology. Our team stands ready to support
              shelters, answer questions, and drive meaningful change in animal
              welfare.
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/6ced79a4-b822-4d8a-49d7-290ae825a801/2560?exp=1789257600&sig=e2c3e55dce3d82516455c4a34b5235c250437113ae59ff4f8f229fb25a5acea3"
          className="absolute inset-0 size-full object-cover"
          alt="Relume placeholder background image"
        />
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
