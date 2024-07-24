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
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Who am I?</CardTitle>
        <CardDescription>
          You can fill this form. Or Just Call Me!
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}

export default AboutCard;
