"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { LocationOn } from "relume-icons";

export function Event34() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Rescue</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">Schedule</h1>
            <p className="text-medium">
              Join us for a transformative weekend of learning and connecting
              for animal rescue professionals
            </p>
          </div>
        </div>
        <Tabs defaultValue="fri-09-feb" className="flex flex-col justify-start">
          <TabsList className="mb-12 ml-[-5vw] scrollbar-none flex w-screen items-center overflow-auto pl-[5vw] md:mb-16 md:ml-0 md:w-full md:overflow-hidden md:pl-0">
            <TabsTrigger
              value="fri-09-feb"
              className="rounded-button px-4 py-2 data-[state=active]:font-medium data-[state=inactive]:border-transparent"
            >
              Fri 09 Feb
            </TabsTrigger>
            <TabsTrigger
              value="sat-10-feb"
              className="rounded-button px-4 py-2 data-[state=active]:font-medium data-[state=inactive]:border-transparent"
            >
              Sat 10 Feb
            </TabsTrigger>
            <TabsTrigger
              value="sun-11-feb"
              className="rounded-button px-4 py-2 data-[state=active]:font-medium data-[state=inactive]:border-transparent"
            >
              Sun 11 Feb
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="fri-09-feb"
            className="data-[state=active]:animate-tabs"
          >
            <div className="flex flex-col gap-y-6 md:gap-y-8">
              <Card className="grid grid-cols-1 items-center gap-8 p-6 sm:gap-4 md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:p-8">
                <div className="text-large">8:00 am</div>
                <div className="w-full md:w-36">
                  <a
                    href="#"
                    className="relative block aspect-[3/2] md:aspect-square"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 1"
                      className="absolute size-full rounded-image object-cover"
                    />
                  </a>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                  <div>
                    <h5 className="text-h5 font-bold">
                      Shelter leadership workshop
                    </h5>
                    <div>Martinez</div>
                  </div>
                  <div className="flex items-center gap-2 text-small">
                    <LocationOn className="size-6 flex-none text-scheme-text" />
                    <span>Main</span>
                  </div>
                </div>
                <Button variant="secondary" title="View details" asChild={true}>
                  <a href="#">View details</a>
                </Button>
              </Card>
              <Card className="grid grid-cols-1 items-center gap-8 p-6 sm:gap-4 md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:p-8">
                <div className="text-large">9:00 am</div>
                <div className="w-full md:w-36">
                  <a
                    href="#"
                    className="relative block aspect-[3/2] md:aspect-square"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 2"
                      className="absolute size-full rounded-image object-cover"
                    />
                  </a>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                  <div>
                    <h5 className="text-h5 font-bold">
                      Adoption strategies panel
                    </h5>
                    <div>Rodriguez</div>
                  </div>
                  <div className="flex items-center gap-2 text-small">
                    <LocationOn className="size-6 flex-none text-scheme-text" />
                    <span>Conference</span>
                  </div>
                </div>
                <Button variant="secondary" title="View details" asChild={true}>
                  <a href="#">View details</a>
                </Button>
              </Card>
              <Card className="grid grid-cols-1 items-center gap-8 p-6 sm:gap-4 md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:p-8">
                <div className="text-large">10:00 am</div>
                <div className="w-full md:w-36">
                  <a
                    href="#"
                    className="relative block aspect-[3/2] md:aspect-square"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 3"
                      className="absolute size-full rounded-image object-cover"
                    />
                  </a>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                  <div>
                    <h5 className="text-h5 font-bold">
                      Digital marketing for rescues
                    </h5>
                    <div>Chen</div>
                  </div>
                  <div className="flex items-center gap-2 text-small">
                    <LocationOn className="size-6 flex-none text-scheme-text" />
                    <span>Workshop</span>
                  </div>
                </div>
                <Button variant="secondary" title="View details" asChild={true}>
                  <a href="#">View details</a>
                </Button>
              </Card>
            </div>
          </TabsContent>
          <TabsContent
            value="sat-10-feb"
            className="data-[state=active]:animate-tabs"
          >
            <div className="flex flex-col gap-y-6 md:gap-y-8">
              <Card className="grid grid-cols-1 items-center gap-8 p-6 sm:gap-4 md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:p-8">
                <div className="text-large">8:00 am</div>
                <div className="w-full md:w-36">
                  <a
                    href="#"
                    className="relative block aspect-[3/2] md:aspect-square"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 4"
                      className="absolute size-full rounded-image object-cover"
                    />
                  </a>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                  <div>
                    <h5 className="text-h5 font-bold">
                      Volunteer recruitment tactics
                    </h5>
                    <div>Garcia</div>
                  </div>
                  <div className="flex items-center gap-2 text-small">
                    <LocationOn className="size-6 flex-none text-scheme-text" />
                    <span>Breakout</span>
                  </div>
                </div>
                <Button variant="secondary" title="View details" asChild={true}>
                  <a href="#">View details</a>
                </Button>
              </Card>
              <Card className="grid grid-cols-1 items-center gap-8 p-6 sm:gap-4 md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:p-8">
                <div className="text-large">9:00 am</div>
                <div className="w-full md:w-36">
                  <a
                    href="#"
                    className="relative block aspect-[3/2] md:aspect-square"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 5"
                      className="absolute size-full rounded-image object-cover"
                    />
                  </a>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                  <div>
                    <h5 className="text-h5 font-bold">
                      Fundraising masterclass
                    </h5>
                    <div>Williams</div>
                  </div>
                  <div className="flex items-center gap-2 text-small">
                    <LocationOn className="size-6 flex-none text-scheme-text" />
                    <span>Seminar</span>
                  </div>
                </div>
                <Button variant="secondary" title="View details" asChild={true}>
                  <a href="#">View details</a>
                </Button>
              </Card>
              <Card className="grid grid-cols-1 items-center gap-8 p-6 sm:gap-4 md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:p-8">
                <div className="text-large">10:00 am</div>
                <div className="w-full md:w-36">
                  <a
                    href="#"
                    className="relative block aspect-[3/2] md:aspect-square"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 6"
                      className="absolute size-full rounded-image object-cover"
                    />
                  </a>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                  <div>
                    <h5 className="text-h5 font-bold">
                      Animal welfare innovations
                    </h5>
                    <div>Thompson</div>
                  </div>
                  <div className="flex items-center gap-2 text-small">
                    <LocationOn className="size-6 flex-none text-scheme-text" />
                    <span>Keynote</span>
                  </div>
                </div>
                <Button variant="secondary" title="View details" asChild={true}>
                  <a href="#">View details</a>
                </Button>
              </Card>
            </div>
          </TabsContent>
          <TabsContent
            value="sun-11-feb"
            className="data-[state=active]:animate-tabs"
          >
            <div className="flex flex-col gap-y-6 md:gap-y-8">
              <Card className="grid grid-cols-1 items-center gap-8 p-6 sm:gap-4 md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:p-8">
                <div className="text-large">8:00 am</div>
                <div className="w-full md:w-36">
                  <a
                    href="#"
                    className="relative block aspect-[3/2] md:aspect-square"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 7"
                      className="absolute size-full rounded-image object-cover"
                    />
                  </a>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                  <div>
                    <h5 className="text-h5 font-bold">
                      Community engagement strategies
                    </h5>
                    <div>Lee</div>
                  </div>
                  <div className="flex items-center gap-2 text-small">
                    <LocationOn className="size-6 flex-none text-scheme-text" />
                    <span>Roundtable</span>
                  </div>
                </div>
                <Button variant="secondary" title="View details" asChild={true}>
                  <a href="#">View details</a>
                </Button>
              </Card>
              <Card className="grid grid-cols-1 items-center gap-8 p-6 sm:gap-4 md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:p-8">
                <div className="text-large">9:00 am</div>
                <div className="w-full md:w-36">
                  <a
                    href="#"
                    className="relative block aspect-[3/2] md:aspect-square"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 8"
                      className="absolute size-full rounded-image object-cover"
                    />
                  </a>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                  <div>
                    <h5 className="text-h5 font-bold">Technology in rescue</h5>
                    <div>Patel</div>
                  </div>
                  <div className="flex items-center gap-2 text-small">
                    <LocationOn className="size-6 flex-none text-scheme-text" />
                    <span>Lab</span>
                  </div>
                </div>
                <Button variant="secondary" title="View details" asChild={true}>
                  <a href="#">View details</a>
                </Button>
              </Card>
              <Card className="grid grid-cols-1 items-center gap-8 p-6 sm:gap-4 md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:p-8">
                <div className="text-large">10:00 am</div>
                <div className="w-full md:w-36">
                  <a
                    href="#"
                    className="relative block aspect-[3/2] md:aspect-square"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 9"
                      className="absolute size-full rounded-image object-cover"
                    />
                  </a>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                  <div>
                    <h5 className="text-h5 font-bold">
                      Closing networking session
                    </h5>
                    <div>Anderson</div>
                  </div>
                  <div className="flex items-center gap-2 text-small">
                    <LocationOn className="size-6 flex-none text-scheme-text" />
                    <span>Terrace</span>
                  </div>
                </div>
                <Button variant="secondary" title="View details" asChild={true}>
                  <a href="#">View details</a>
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
