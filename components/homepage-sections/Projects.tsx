"use client";

import * as React from "react";
import FadeInWhenVisible from "../animation/FadeInWhenVisible";
import Image from "next/image";
import ContactCard from "../about/ContactCard";
import AboutCard from "../about/AboutCard";

export interface IProjectsProps {}

export default function Projects(props: IProjectsProps) {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto flex flex-col justify-center overflow-hidden">
      <FadeInWhenVisible>
        <div className="flex justify-center text-5xl pt-20 pb-10">Projects</div>
      </FadeInWhenVisible>
      <hr />
      <div className="flex align-items-stretch flex-wrap lg:flex-nowrap gap-4 lg:gap-10 p-5">
        <div className="w-full lg:w-2/3">
          <FadeInWhenVisible className="h-full">
            {/* <AboutCard /> */}
            <></>
          </FadeInWhenVisible>
        </div>
        <div className="w-full lg:w-1/3">
          <FadeInWhenVisible>
            {/* <ContactCard /> */}
            <></>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
}
