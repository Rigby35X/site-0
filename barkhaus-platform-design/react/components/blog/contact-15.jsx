"use client";

import React from "react";
import { Call, LocationOn, Mail } from "relume-icons";

export function Contact15() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div>
          <div className="mb-12 grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:mb-20 md:grid-cols-[1fr_.75fr] md:gap-x-20 md:gap-y-16">
            <div className="max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Connect</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">Contact us</h2>
              <p className="text-medium">
                We're here to support animal rescue organizations and answer
                your questions
              </p>
            </div>
            <div className="flex flex-col">
              <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-6 py-2">
                <div className="flex flex-row">
                  <div className="mr-4 md:mb-4">
                    <Mail className="size-6 text-scheme-text" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-h6 font-bold">Email</h3>
                    <a className="underline" href="#">
                      support@barkhaus.com
                    </a>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="mr-4 md:mb-4">
                    <Call className="size-6 text-scheme-text" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-h6 font-bold">Phone</h3>
                    <a className="underline" href="#">
                      +1 (888) BARKHAUS
                    </a>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="mr-4 md:mb-4">
                    <LocationOn className="size-6 text-scheme-text" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-h6 font-bold">Office</h3>
                    <p>123 Rescue Lane, San Francisco, California 94110</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="w-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
