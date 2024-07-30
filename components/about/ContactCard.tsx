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

export function ContactCard() {
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submitted", event);
    handleReset();
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Connect with me</CardTitle>
        <CardDescription>Let&lsquo;s get in touch.</CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="What should I call you?" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="contact">Email / Phone</Label>
              <Input id="name" placeholder="How can I connect back?" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="contact-topic">Topic</Label>
              <Select>
                <SelectTrigger id="contact-topic">
                  <SelectValue placeholder="What is it about?" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="enquiry">Enquiry ❓</SelectItem>
                  <SelectItem value="suggestion">Suggestions 💡</SelectItem>
                  <SelectItem value="collaboration">
                    Collaboration 🤝
                  </SelectItem>
                  <SelectItem value="hire">Hire Me 👋💼</SelectItem>
                  <SelectItem value="social">Social Media 📱</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="contact-topic">Message</Label>
              <Textarea
                id="contact-message"
                placeholder="Feel free to write anything you want!"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleReset}>
          Reset
        </Button>
        <Button>Send</Button>
      </CardFooter>
    </Card>
  );
}

export default ContactCard;
