"use client";

import * as React from "react";
import FadeInWhenVisible from "../animation/FadeInWhenVisible";
import ContactCard from "../about/ContactCard";
import AboutCard from "../about/AboutCard";
import SkillCard from "../skills/SkillCard";
import SkillTagCard from "../skills/SkillTagCard";

export interface ISkillsProps {}

export default function Skills(props: ISkillsProps) {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto flex flex-col justify-center overflow-hidden">
      <FadeInWhenVisible>
        <div className="flex justify-center text-5xl pt-20 py-10"> Skills </div>
      </FadeInWhenVisible>
      <hr />
      <div className="flex align-items-stretch flex-wrap lg:flex-nowrap gap-4 lg:gap-10 p-5">
        <div className="w-full lg:w-2/3">
          <FadeInWhenVisible className="h-full">
            <SkillTagCard />
          </FadeInWhenVisible>
        </div>
        <div className="w-full lg:w-1/3">
          <FadeInWhenVisible>
            <SkillCard />
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
}
