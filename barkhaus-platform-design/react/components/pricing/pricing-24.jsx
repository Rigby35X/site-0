"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Check, RelumeIcon } from "relume-icons";

export function Pricing24() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Rescue</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">Pricing plans</h1>
          <p className="text-medium">
            Flexible solutions designed for shelters of all sizes
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit items-center justify-center rounded-button border border-scheme-border bg-scheme-foreground p-1 group-data-[slot=card-flat]:border-transparent">
            <TabsTrigger
              value="monthly"
              className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:bg-transparent"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:bg-transparent"
            >
              Yearly
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="flex items-start justify-between">
                  <h6 className="text-h6 font-bold">Basic plan</h6>
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
                <h6 className="hidden text-h6 font-bold">Basic plan</h6>
                <RelumeIcon className="hidden size-12 text-scheme-text" />
                <h3 className="text-h1 font-bold">$19/mo</h3>
                <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
                <p>Includes:</p>
                <div className="mt-3 grid grid-cols-1 gap-y-4 py-2 md:mt-4">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Basic animal profile management</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Limited marketing tools</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Single user access</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="mt-6 w-full md:mt-8">
                  Get started
                </Button>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="flex items-start justify-between">
                  <h6 className="text-h6 font-bold">Business plan</h6>
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
                <h6 className="hidden text-h6 font-bold">Business plan</h6>
                <RelumeIcon className="hidden size-12 text-scheme-text" />
                <h3 className="text-h1 font-bold">$29/mo</h3>
                <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
                <p>Includes:</p>
                <div className="mt-3 grid grid-cols-1 gap-y-4 py-2 md:mt-4">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Advanced animal tracking</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Multi-channel marketing</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Team collaboration tools</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Adoption performance reports</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="mt-6 w-full md:mt-8">
                  Get started
                </Button>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="flex items-start justify-between">
                  <h6 className="text-h6 font-bold">Enterprise plan</h6>
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
                <h6 className="hidden text-h6 font-bold">Enterprise plan</h6>
                <RelumeIcon className="hidden size-12 text-scheme-text" />
                <h3 className="text-h1 font-bold">$49/mo</h3>
                <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
                <p>Includes:</p>
                <div className="mt-3 grid grid-cols-1 gap-y-4 py-2 md:mt-4">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Comprehensive shelter management</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Advanced analytics dashboard</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Custom integrations</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Dedicated support team</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Unlimited user access</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="mt-6 w-full md:mt-8">
                  Get started
                </Button>
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="flex items-start justify-between">
                  <h6 className="text-h6 font-bold">Basic plan</h6>
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
                <h6 className="hidden text-h6 font-bold">Basic plan</h6>
                <RelumeIcon className="hidden size-12 text-scheme-text" />
                <h3 className="text-h1 font-bold">$180/yr</h3>
                <p className="mt-2 font-medium">Save 20%</p>
                <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
                <p>Includes:</p>
                <div className="mt-3 grid grid-cols-1 gap-y-4 py-2 md:mt-4">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Basic animal profile management</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Limited marketing tools</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Single user access</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="mt-6 w-full md:mt-8">
                  Get started
                </Button>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="flex items-start justify-between">
                  <h6 className="text-h6 font-bold">Business plan</h6>
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
                <h6 className="hidden text-h6 font-bold">Business plan</h6>
                <RelumeIcon className="hidden size-12 text-scheme-text" />
                <h3 className="text-h1 font-bold">$280/yr</h3>
                <p className="mt-2 font-medium">Save 20%</p>
                <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
                <p>Includes:</p>
                <div className="mt-3 grid grid-cols-1 gap-y-4 py-2 md:mt-4">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Advanced animal tracking</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Multi-channel marketing</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Team collaboration tools</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Adoption performance reports</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="mt-6 w-full md:mt-8">
                  Get started
                </Button>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="flex items-start justify-between">
                  <h6 className="text-h6 font-bold">Enterprise plan</h6>
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
                <h6 className="hidden text-h6 font-bold">Enterprise plan</h6>
                <RelumeIcon className="hidden size-12 text-scheme-text" />
                <h3 className="text-h1 font-bold">$480/yr</h3>
                <p className="mt-2 font-medium">Save 20%</p>
                <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
                <p>Includes:</p>
                <div className="mt-3 grid grid-cols-1 gap-y-4 py-2 md:mt-4">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Comprehensive shelter management</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Advanced analytics dashboard</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Custom integrations</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Dedicated support team</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Unlimited user access</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="mt-6 w-full md:mt-8">
                  Get started
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
