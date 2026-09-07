"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { FacebookLogo, Link, LinkedinLogo, XLogo } from "relume-icons";

export function BlogPostHeader1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mx-auto mb-12 flex w-full max-w-lg flex-col items-start justify-start md:mb-18 lg:mb-20">
          <Breadcrumb className="mb-6 flex w-full items-center md:mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Case studies</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Success</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="mb-8 text-h2 font-bold md:mb-10 lg:mb-12">
            How urban animal rescue doubled adoption rates
          </h1>
          <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-0">
            <div className="flex items-center">
              <div className="mr-4 size-14 min-h-14 min-w-14 shrink-0 overflow-hidden rounded-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar"
                  className="size-full object-cover"
                />
              </div>
              <div>
                <h6 className="font-semibold">Elena Thompson</h6>
                <div className="mt-1 flex">
                  <p className="text-small">11 Jan 2023</p>
                  <span className="mx-2">•</span>
                  <p className="text-small">5 min read</p>
                </div>
              </div>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start gap-2">
              <a
                href="#"
                className="rounded-[1.25rem] bg-scheme-foreground p-1"
              >
                <Link className="size-6 text-scheme-text" />
              </a>
              <a
                href="#"
                className="rounded-[1.25rem] bg-scheme-foreground p-1"
              >
                <LinkedinLogo className="size-6 text-scheme-text" />
              </a>
              <a
                href="#"
                className="rounded-[1.25rem] bg-scheme-foreground p-1"
              >
                <XLogo className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a
                href="#"
                className="rounded-[1.25rem] bg-scheme-foreground p-1"
              >
                <FacebookLogo className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full overflow-hidden">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="aspect-[2] size-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
