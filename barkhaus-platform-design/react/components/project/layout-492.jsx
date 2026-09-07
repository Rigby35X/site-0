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

export function Layout492() {
  const activeValueState = useActiveValue("tab-one");
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Tech</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            Technology behind transforming animal rescue operations
          </h1>
          <p className="text-medium">
            Innovative software solutions built to empower animal welfare
            organizations. Cutting-edge technology meets compassionate design.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Explore" variant="secondary">
              Explore
            </Button>
            <Button
              title="Details"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Details
            </Button>
          </div>
        </div>
        <Tabs
          defaultValue="tab-one"
          onValueChange={activeValueState.setActiveValue}
        >
          <div className="grid grid-cols-1 items-center gap-x-12 md:grid-cols-2 lg:gap-x-20">
            <div className="mb-6 flex max-h-full w-full items-center justify-center overflow-hidden md:mb-0">
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
                      className="size-full rounded-image object-cover"
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
                      className="size-full rounded-image object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            </div>
            <TabsList className="relative grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:items-stretch">
              <TabsTrigger
                value="tab-one"
                className="flex-col items-start justify-start rounded-none border-0 border-b px-0 py-6 text-left whitespace-normal data-[state=active]:border-scheme-border data-[state=active]:bg-transparent data-[state=inactive]:border-scheme-border data-[state=inactive]:opacity-25"
              >
                <h2 className="text-h4 font-bold">
                  Robust platform architecture
                </h2>
                <motion.div
                  initial={false}
                  animate={activeValueState.getActiveValue("tab-one")}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 md:mt-4">
                    Engineered with scalable cloud infrastructure and secure
                    data management. Designed to handle complex shelter
                    operations with simplicity.
                  </p>
                </motion.div>
              </TabsTrigger>
              <TabsTrigger
                value="tab-two"
                className="flex-col items-start justify-start rounded-none border-0 border-b px-0 py-6 text-left whitespace-normal data-[state=active]:border-scheme-border data-[state=active]:bg-transparent data-[state=inactive]:border-scheme-border data-[state=inactive]:opacity-25"
              >
                <h2 className="text-h4 font-bold">
                  Integrated communication tools
                </h2>
                <motion.div
                  initial={false}
                  animate={activeValueState.getActiveValue("tab-two")}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 md:mt-4">
                    Seamless communication channels connecting shelter staff,
                    volunteers, and potential adopters. Real-time messaging and
                    collaboration features.
                  </p>
                </motion.div>
              </TabsTrigger>
              <TabsTrigger
                value="tab-three"
                className="flex-col items-start justify-start rounded-none border-0 border-b px-0 py-6 text-left whitespace-normal data-[state=active]:border-scheme-border data-[state=active]:bg-transparent data-[state=inactive]:border-scheme-border data-[state=inactive]:opacity-25"
              >
                <h2 className="text-h4 font-bold">Advanced data insights</h2>
                <motion.div
                  initial={false}
                  animate={activeValueState.getActiveValue("tab-three")}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 md:mt-4">
                    Powerful analytics engine providing actionable insights into
                    shelter performance. Predictive modeling to optimize
                    adoption strategies.
                  </p>
                </motion.div>
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
