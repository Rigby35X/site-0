"use client";

import { Badge } from "@/components/ui/badge";
import React from "react";

export function PortfolioHeader9() {
  return (
    <section className="px-[5%] scheme-3">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-6 py-16 md:grid-cols-2 md:gap-x-12 md:py-24 lg:gap-20 lg:py-28">
          <div>
            <h1 className="mb-5 text-h1 font-bold md:mb-6">
              Urban animal rescue
            </h1>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <Badge>
                <a href="#">Technology</a>
              </Badge>
              <Badge>
                <a href="#">Nonprofit</a>
              </Badge>
              <Badge>
                <a href="#">Community impact</a>
              </Badge>
            </div>
          </div>
          <div>
            <p className="text-medium">
              A digital solution designed to streamline shelter operations and
              connect animals with loving homes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
