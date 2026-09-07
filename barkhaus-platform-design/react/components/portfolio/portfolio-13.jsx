"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Portfolio13() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Impact</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">
            Rescues we've helped succeed
          </h2>
          <p className="text-medium">
            Real stories of technology driving meaningful change in animal
            welfare.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <Card>
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-h5 font-bold">
                <a href="#">Paws of Hope Shelter</a>
              </h3>
              <p>
                Streamlined adoption process and increased community engagement
                dramatically.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Shelter management</a>
                </Badge>
                <Badge>
                  <a href="#">Adoption tracking</a>
                </Badge>
                <Badge>
                  <a href="#">Community impact</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card>
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-h5 font-bold">
                <a href="#">Urban Animal Rescue</a>
              </h3>
              <p>
                Enhanced marketing tools helped double adoption rates in six
                months.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Marketing</a>
                </Badge>
                <Badge>
                  <a href="#">Adoption growth</a>
                </Badge>
                <Badge>
                  <a href="#">Digital strategy</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card>
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-h5 font-bold">
                <a href="#">Rural Companions Network</a>
              </h3>
              <p>
                Comprehensive reporting system improved operational efficiency
                and donor communication.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Reporting</a>
                </Badge>
                <Badge>
                  <a href="#">Donor management</a>
                </Badge>
                <Badge>
                  <a href="#">Operational tools</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button title="View all projects" variant="secondary">
            View all projects
          </Button>
        </div>
      </div>
    </section>
  );
}
