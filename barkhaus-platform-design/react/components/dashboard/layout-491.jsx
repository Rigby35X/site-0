"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoIframe } from "@/components/ui/video-iframe";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { ChevronRight, PlayCircle } from "relume-icons";

const useActiveValue = (initialValue) => {
  const [activeValue, setActiveValue] = useState(initialValue);

  const getActiveValue = (tabValue) => {
    return {
      height: activeValue === tabValue ? "auto" : 0,
      opacity: activeValue === tabValue ? 1 : 0,
    };
  };
  return {
    setActiveValue,
    getActiveValue,
  };
};

export function Layout491() {
  const activeValueState = useActiveValue("tab-one");
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Grow</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            Marketing tools for animal rescue success
          </h1>
          <p className="text-medium">
            Amplify your shelter's reach and connect with potential adopters
            through targeted marketing strategies.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button variant="secondary">Campaigns</Button>
            <Button
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Create
            </Button>
          </div>
        </div>
        <Tabs
          defaultValue="tab-one"
          onValueChange={activeValueState.setActiveValue}
        >
          <div className="grid grid-cols-1 items-center justify-center gap-x-12 md:grid-cols-2 lg:gap-x-20">
            <TabsList className="mb-8 flex-col md:mb-0">
              <TabsTrigger
                value="tab-one"
                className="flex-col items-start justify-start rounded-none border-0 border-b px-0 py-6 text-left whitespace-normal data-[state=active]:border-scheme-border data-[state=active]:bg-transparent data-[state=inactive]:border-scheme-border data-[state=inactive]:opacity-25"
              >
                <h2 className="text-h4 font-bold">Social media reach</h2>
                <motion.div
                  initial={false}
                  animate={activeValueState.getActiveValue("tab-one")}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 md:mt-4">
                    Track engagement across multiple platforms and understand
                    which content drives adoption interest.
                  </p>
                </motion.div>
              </TabsTrigger>
              <TabsTrigger
                value="tab-two"
                className="flex-col items-start justify-start rounded-none border-0 border-b px-0 py-6 text-left whitespace-normal data-[state=active]:border-scheme-border data-[state=active]:bg-transparent data-[state=inactive]:border-scheme-border data-[state=inactive]:opacity-25"
              >
                <h2 className="text-h4 font-bold">Email outreach</h2>
                <motion.div
                  initial={false}
                  animate={activeValueState.getActiveValue("tab-two")}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 md:mt-4">
                    Design and send compelling newsletters that showcase
                    available animals and shelter stories.
                  </p>
                </motion.div>
              </TabsTrigger>
              <TabsTrigger
                value="tab-three"
                className="flex-col items-start justify-start rounded-none border-0 border-b px-0 py-6 text-left whitespace-normal data-[state=active]:border-scheme-border data-[state=active]:bg-transparent data-[state=inactive]:border-scheme-border data-[state=inactive]:opacity-25"
              >
                <h2 className="text-h4 font-bold">Adoption stories</h2>
                <motion.div
                  initial={false}
                  animate={activeValueState.getActiveValue("tab-three")}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 md:mt-4">
                    Share success stories that inspire community support and
                    potential adopters.
                  </p>
                </motion.div>
              </TabsTrigger>
            </TabsList>
            <div className="flex max-h-full w-full items-center justify-center overflow-hidden">
              <TabsContent
                value="tab-one"
                className="w-full data-[state=active]:animate-tabs"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0 }}
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 1"
                      className="rounded-image object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
              <TabsContent
                value="tab-two"
                className="w-full data-[state=active]:animate-tabs"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0 }}
                  >
                    <Dialog>
                      <DialogTrigger className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                          alt="Relume placeholder image 2"
                          className="size-full object-cover"
                        />
                        <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                        <PlayCircle className="absolute z-20 size-20 text-white" />
                      </DialogTrigger>
                      <DialogContent>
                        <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
              <TabsContent
                value="tab-three"
                className="w-full data-[state=active]:animate-tabs"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0 }}
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 3"
                      className="rounded-image object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
