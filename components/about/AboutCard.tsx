import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

export function AboutCard() {
  return (
    <Card className="w-full h-full bg-transparent border-none">
      <CardHeader>
        <CardTitle>Who am I?</CardTitle>
        <CardDescription className="text-md text-gray-300 [&>p]:mt-6 [&>p]:leading-7 [&>p]:text-justify [&>p>strong]:text-gray-500 ">
          <p>
            <strong>Tech innovator</strong> and <strong>problem solver</strong>{" "}
            with a knack for turning complex challenges into elegant solutions.
            As a <strong>Senior Software Engineer</strong> and{" "}
            <strong>Team Lead</strong>, I&apos;ve boosted API speeds by{" "}
            <em>500%</em>, scaled systems <em>10x</em>, and led teams to{" "}
            <em>60% higher productivity</em>.
          </p>

          <p>
            From <strong>founding a startup</strong> recognized by India&apos;s
            Finance Minister to engineering systems that process{" "}
            <em>millions of records per minute</em>, I blend{" "}
            <strong>technical expertise</strong> with{" "}
            <strong>entrepreneurial drive</strong>. My toolkit spans{" "}
            <strong>full-stack development</strong>,{" "}
            <strong>cloud technologies</strong>, and{" "}
            <strong>performance optimization</strong>, with a proven track
            record in <strong>machine learning</strong> implementations.
          </p>

          <p>
            I&apos;m not just about code – I&apos;m about{" "}
            <strong>impact</strong>. Whether it&apos;s slashing load times,
            architecting <strong>scalable systems</strong>, or delivering{" "}
            <strong>AI-powered solutions</strong>, I create technology that
            makes a difference. With a background in{" "}
            <strong>ethical hacking</strong> and a passion for{" "}
            <strong>cutting-edge tech</strong>, I bring a unique perspective to
            every project.
          </p>

          <p>
            Ready to build something <strong>extraordinary</strong>? Let&apos;s
            connect and push the boundaries of what&apos;s possible in tech.
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}

export default AboutCard;
