"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import React, { useState } from "react";

const useTabsState = ({ defaultTabValue, tabs }) => {
  const [activeTab, setActiveTab] = useState(defaultTabValue);

  const handleAutoAdvance = () => {
    const currentIndex = tabs.trigger.findIndex((t) => t.value === activeTab);
    const nextIndex = (currentIndex + 1) % tabs.trigger.length;
    setActiveTab(tabs.trigger[nextIndex].value);
  };

  return { activeTab, setActiveTab, handleAutoAdvance };
};

const ContentMotionWrapper = ({ children }) => {
  return (
    <motion.div
      className="mx-auto max-w-lg text-center"
      initial={{ y: "20%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-20%", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const createTriggerBarComponent = ({ activeTab, onComplete }) => {
  return ({ triggerValue }) => {
    const isActive = activeTab === triggerValue;

    return (
      <motion.div
        className="h-full bg-white"
        initial={{ width: "0%" }}
        animate={{ width: isActive ? "100%" : "0%" }}
        transition={{
          duration: isActive ? 1.5 : 0.3,
          ...(isActive
            ? {
                type: "spring",
                stiffness: 25,
                damping: 30,
              }
            : { ease: "easeInOut" }),
        }}
        onAnimationComplete={() => {
          if (isActive) {
            onComplete();
          }
        }}
      />
    );
  };
};

const useTabsState = ({ defaultTabValue, tabs }) => {
  const [activeTab, setActiveTab] = useState(defaultTabValue);

  const handleAutoAdvance = () => {
    const currentIndex = tabs.trigger.findIndex((t) => t.value === activeTab);
    const nextIndex = (currentIndex + 1) % tabs.trigger.length;
    setActiveTab(tabs.trigger[nextIndex].value);
  };

  return { activeTab, setActiveTab, handleAutoAdvance };
};

export function Header103() {
  const tabsState = useTabsState({
    defaultTabValue: "tab-one",
    tabs: {
      trigger: [
        { value: "tab-one", text: "Tab 1" },
        { value: "tab-two", text: "Tab 2" },
        { value: "tab-three", text: "Tab 3" },
        { value: "tab-four", text: "Tab 4" },
      ],
      content: [
        {
          value: "tab-one",
          heading: "Medium length hero heading goes here",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "alternate" },
            { title: "Button", variant: "secondary-alt" },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
            alt: "Relume placeholder image 1",
          },
        },
        {
          value: "tab-two",
          heading: "Medium length hero heading goes here",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "alternate" },
            { title: "Button", variant: "secondary-alt" },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
            alt: "Relume placeholder image 2",
          },
        },
        {
          value: "tab-three",
          heading: "Medium length hero heading goes here",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "alternate" },
            { title: "Button", variant: "secondary-alt" },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
            alt: "Relume placeholder image 3",
          },
        },
        {
          value: "tab-four",
          heading: "Medium length hero heading goes here",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "alternate" },
            { title: "Button", variant: "secondary-alt" },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
            alt: "Relume placeholder image 4",
          },
        },
      ],
    },
  });
  const triggerState = createTriggerBarComponent({
    activeTab: tabsState.activeTab,
    onComplete: tabsState.handleAutoAdvance,
  });
  const motionState = ContentMotionWrapper;
  const tabsState = useTabsState({
    defaultTabValue: "tab-one",
    tabs: {
      trigger: [
        { value: "tab-one", text: "Tab 1" },
        { value: "tab-two", text: "Tab 2" },
        { value: "tab-three", text: "Tab 3" },
        { value: "tab-four", text: "Tab 4" },
      ],
      content: [
        {
          value: "tab-one",
          heading: "Medium length hero heading goes here",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "alternate" },
            { title: "Button", variant: "secondary-alt" },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
            alt: "Relume placeholder image 1",
          },
        },
        {
          value: "tab-two",
          heading: "Medium length hero heading goes here",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "alternate" },
            { title: "Button", variant: "secondary-alt" },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
            alt: "Relume placeholder image 2",
          },
        },
        {
          value: "tab-three",
          heading: "Medium length hero heading goes here",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "alternate" },
            { title: "Button", variant: "secondary-alt" },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
            alt: "Relume placeholder image 3",
          },
        },
        {
          value: "tab-four",
          heading: "Medium length hero heading goes here",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "alternate" },
            { title: "Button", variant: "secondary-alt" },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
            alt: "Relume placeholder image 4",
          },
        },
      ],
    },
  });
  return (
    <section className="relative min-h-screen scheme-1">
      <Tabs
        defaultValue="tab-one"
        value={tabsState.activeTab}
        onValueChange={tabsState.setActiveTab}
      >
        <div>
          <TabsContent
            value="tab-one"
            className="relative max-h-[60rem] min-h-screen overflow-visible"
          >
            <div className="flex h-screen flex-col items-center justify-center">
              <div className="relative z-10 px-[5%] py-16 md:py-24 lg:py-28">
                <motionState>
                  <h1 className="mb-5 text-h1 font-bold text-white md:mb-6">
                    Spreadsheets Don’t Save Animals. You Do.
                  </h1>
                  <p className="text-medium text-white">
                    Meet Barkhaus. The first all-in-one software built by animal
                    lovers, made for animal rescues. Manage your animals,
                    volunteers, adoptions, donations, website, social and
                    marketing—all in one place.
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                    <Button title="Join the Waitlist" variant="alternate">
                      Join the Waitlist
                    </Button>
                    <Button title="Learn More" variant="secondary-alt">
                      Learn More
                    </Button>
                  </div>
                </motionState>
              </div>
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                <img
                  className="size-full object-cover"
                  src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/3c7c76cb-1c9f-49d7-9d84-85aacb059d01/2560?exp=1789257600&sig=f6cb5c21b1752f3dbc50e8c19fcdba78146883c7ad89f98f7b5b688d6f8f5d2e"
                  alt="Relume placeholder image 1"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="relative max-h-[60rem] min-h-screen overflow-visible"
          >
            <div className="flex h-screen flex-col items-center justify-center">
              <div className="relative z-10 px-[5%] py-16 md:py-24 lg:py-28">
                <motionState>
                  <h1 className="mb-5 text-h1 font-bold text-white md:mb-6">
                    Spreadsheets Don't Save Animals. You Do.
                  </h1>
                  <p className="text-medium text-white">
                    Barkhaus is more than software. We're a mission-driven
                    platform built by animal lovers who believe every shelter
                    animal deserves a chance at a forever home.
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                    <Button title="Join the waitlist" variant="alternate">
                      Join the waitlist
                    </Button>
                    <Button title="Learn more" variant="secondary-alt">
                      Learn more
                    </Button>
                  </div>
                </motionState>
              </div>
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                <img
                  className="size-full object-cover"
                  src="https://imagedelivery.net/RAP5LnVUMDfmG3LRL4kHtw/22b773d9-1165-4b72-af47-428211ff9b01/2560?exp=1789257600&sig=e302304cb150017eee0842f3af54afc8a9251c97d5f38846e979cbd6253eee20"
                  alt="Relume placeholder image 2"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="relative max-h-[60rem] min-h-screen overflow-visible"
          >
            <div className="flex h-screen flex-col items-center justify-center">
              <div className="relative z-10 px-[5%] py-16 md:py-24 lg:py-28">
                <motionState>
                  <h1 className="mb-5 text-h1 font-bold text-white md:mb-6">
                    Medium length hero heading goes here
                  </h1>
                  <p className="text-medium text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                    <Button title="Button" variant="alternate">
                      Button
                    </Button>
                    <Button title="Button" variant="secondary-alt">
                      Button
                    </Button>
                  </div>
                </motionState>
              </div>
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                <img
                  className="size-full object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 3"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-four"
            className="relative max-h-[60rem] min-h-screen overflow-visible"
          >
            <div className="flex h-screen flex-col items-center justify-center">
              <div className="relative z-10 px-[5%] py-16 md:py-24 lg:py-28">
                <motionState>
                  <h1 className="mb-5 text-h1 font-bold text-white md:mb-6">
                    Medium length hero heading goes here
                  </h1>
                  <p className="text-medium text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                    <Button title="Button" variant="alternate">
                      Button
                    </Button>
                    <Button title="Button" variant="secondary-alt">
                      Button
                    </Button>
                  </div>
                </motionState>
              </div>
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                <img
                  className="size-full object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 4"
                />
              </div>
            </div>
          </TabsContent>
        </div>
        <TabsList className="absolute top-auto right-0 bottom-12 left-0 z-20 mx-auto flex justify-center gap-4 px-[5vw] md:bottom-16 lg:bottom-20 lg:max-w-xl">
          <TabsTrigger
            value="tab-one"
            className="relative flex-1 border-0 bg-transparent px-4 py-4 text-center whitespace-normal text-neutral-light data-[state=active]:bg-transparent data-[state=active]:text-white sm:px-8 md:min-w-32"
          >
            <span>Tab 1</span>
            <div className="absolute inset-0 top-auto h-1 w-full bg-white/20">
              <triggerState triggerValue="tab-one" />
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="tab-two"
            className="relative flex-1 border-0 bg-transparent px-4 py-4 text-center whitespace-normal text-neutral-light data-[state=active]:bg-transparent data-[state=active]:text-white sm:px-8 md:min-w-32"
          >
            <span>Tab 2</span>
            <div className="absolute inset-0 top-auto h-1 w-full bg-white/20">
              <triggerState triggerValue="tab-two" />
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="tab-three"
            className="relative flex-1 border-0 bg-transparent px-4 py-4 text-center whitespace-normal text-neutral-light data-[state=active]:bg-transparent data-[state=active]:text-white sm:px-8 md:min-w-32"
          >
            <span>Tab 3</span>
            <div className="absolute inset-0 top-auto h-1 w-full bg-white/20">
              <triggerState triggerValue="tab-three" />
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="tab-four"
            className="relative flex-1 border-0 bg-transparent px-4 py-4 text-center whitespace-normal text-neutral-light data-[state=active]:bg-transparent data-[state=active]:text-white sm:px-8 md:min-w-32"
          >
            <span>Tab 4</span>
            <div className="absolute inset-0 top-auto h-1 w-full bg-white/20">
              <triggerState triggerValue="tab-four" />
            </div>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </section>
  );
}
