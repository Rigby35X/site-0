"use client";

import { Button } from "@/components/ui/button";
import React, { Fragment } from "react";
import { ChevronRight } from "relume-icons";

export function Layout356() {
  return (
    <section className="scheme-4">
      <div className="sticky top-0">
        <Fragment>
          <div className="relative -top-32 h-0" />
          <div className="relative border-t border-scheme-border bg-white pb-8 md:pb-14 lg:sticky lg:pb-0 top-0 lg:mb-32">
            <div className="px-[5%]">
              <div className="container">
                <a href="#" className="flex h-16 w-full items-center underline">
                  <span className="mr-5 text-medium font-semibold md:mr-6">
                    01
                  </span>
                  <h1 className="text-medium font-semibold">Animal intake</h1>
                </a>
                <div className="py-8 md:py-10 lg:py-12">
                  <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                    <div>
                      <p className="mb-3 font-semibold md:mb-4">Capture</p>
                      <h2 className="mb-5 text-h2 font-bold md:mb-6">
                        Precise initial documentation process
                      </h2>
                      <p className="text-medium">
                        Record every detail with precision. Medical history,
                        behavioral notes, and physical condition become part of
                        a comprehensive digital profile.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                        <Button title="Start" variant="secondary">
                          Start
                        </Button>
                        <Button
                          title="Learn"
                          variant="link"
                          size="link"
                          iconRight={
                            <ChevronRight className="text-scheme-text" />
                          }
                        >
                          Learn
                        </Button>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
                        className="h-[25rem] w-full rounded-image object-cover sm:h-[30rem] lg:h-[60vh]"
                        alt="Relume placeholder image 1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
        <Fragment>
          <div className="relative -top-32 h-0" />
          <div className="relative border-t border-scheme-border bg-white pb-8 md:pb-14 lg:sticky lg:pb-0 lg:top-16 lg:-mt-16 lg:mb-16">
            <div className="px-[5%]">
              <div className="container">
                <a href="#" className="flex h-16 w-full items-center underline">
                  <span className="mr-5 text-medium font-semibold md:mr-6">
                    02
                  </span>
                  <h1 className="text-medium font-semibold">
                    Matching process
                  </h1>
                </a>
                <div className="py-8 md:py-10 lg:py-12">
                  <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                    <div>
                      <p className="mb-3 font-semibold md:mb-4">Connect</p>
                      <h2 className="mb-5 text-h2 font-bold md:mb-6">
                        Advanced adopter compatibility screening
                      </h2>
                      <p className="text-medium">
                        Intelligent algorithms match animals with potential
                        families based on lifestyle, experience, and emotional
                        compatibility.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                        <Button title="Review" variant="secondary">
                          Review
                        </Button>
                        <Button
                          title="Discover"
                          variant="link"
                          size="link"
                          iconRight={
                            <ChevronRight className="text-scheme-text" />
                          }
                        >
                          Discover
                        </Button>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
                        className="h-[25rem] w-full rounded-image object-cover sm:h-[30rem] lg:h-[60vh]"
                        alt="Relume placeholder image 2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
        <Fragment>
          <div className="relative -top-32 h-0" />
          <div className="relative border-t border-scheme-border bg-white pb-8 md:pb-14 lg:sticky lg:pb-0 lg:top-32 lg:mb-16">
            <div className="px-[5%]">
              <div className="container">
                <a href="#" className="flex h-16 w-full items-center underline">
                  <span className="mr-5 text-medium font-semibold md:mr-6">
                    03
                  </span>
                  <h1 className="text-medium font-semibold">
                    Adoption completion
                  </h1>
                </a>
                <div className="py-8 md:py-10 lg:py-12">
                  <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                    <div>
                      <p className="mb-3 font-semibold md:mb-4">Finalize</p>
                      <h2 className="mb-5 text-h2 font-bold md:mb-6">
                        Seamless transition to forever home
                      </h2>
                      <p className="text-medium">
                        Track the final stages of adoption with detailed
                        documentation and follow-up support for both animals and
                        families.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                        <Button title="Complete" variant="secondary">
                          Complete
                        </Button>
                        <Button
                          title="Verify"
                          variant="link"
                          size="link"
                          iconRight={
                            <ChevronRight className="text-scheme-text" />
                          }
                        >
                          Verify
                        </Button>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg"
                        className="h-[25rem] w-full rounded-image object-cover sm:h-[30rem] lg:h-[60vh]"
                        alt="Relume placeholder image 3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </div>
    </section>
  );
}
