import * as React from "react";

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "../ui/hover-card";
import { technologies } from "./technologies";

export interface ISkillTagCardProps {}

export default function SkillTagCard(props: ISkillTagCardProps) {
  // style the div to have four columns
  return (
    <div className="grid grid-cols-4 gap-4">
      {technologies.map((technology) => (
        <HoverCard key={technology.name}>
          <HoverCardTrigger>
            <technology.icon size={60} />
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex justify-between space-x-4">
              <div>
                <technology.icon size={30} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold pb-4">
                  {technology.name}
                </h4>
                <p className="text-sm">{technology.description}</p>
                {/* <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div> */}
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
