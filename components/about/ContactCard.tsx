"user client";

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

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { LoadingSpinner } from "../ui/loading-spinner";
import { sendMailContactEmail } from "./contactActions";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  // contact: yup
  //   .mixed()
  //   .test("is-valid-contact", "Invalid email or phone", (val) => {
  //     const emailRegex =
  //       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //     // const phoneRegex = /^\d{10}$/;
  //     // return emailRegex.test(val as string) || phoneRegex.test(val as string);
  //     return emailRegex.test(val as string);
  //   })
  //   .required("Contact is required"),
  contact: yup.string().email().required("Contact is required"),
  message: yup.string().required("Message is required"),
  topic: yup.string().required("Topic is required"),
});

export function ContactCard() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState("");

  const onSubmit = handleSubmit(async (data) => {
    console.log("data", data);
    try {
      setIsLoading(true);
      const result = await sendMailContactEmail({
        name: data.name,
        topic: data.topic,
        email: data.contact,
        message: data.message,
      });
      console.log("result", result);
    } catch (error) {
      setIsLoading(false);
      setIsError("An error occured, please try again later.");
      console.log(error);
    }
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Connect with me</CardTitle>
        <CardDescription>Let&lsquo;s get in touch.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="What should I call you?"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="contact">Email</Label>
              <Input
                id="contact"
                placeholder="How can I connect back?"
                {...register("contact")}
              />
              {errors.contact && (
                <p className="text-red-500">{errors.contact.message}</p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="topic">Topic</Label>
              <Select
                name="topic"
                onValueChange={(value) => {
                  console.log(value);
                  setValue("topic", value);
                }}
              >
                <SelectTrigger>
                  <SelectValue
                    id="topic"
                    placeholder="What is it about?"
                    {...register("topic")}
                  />
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
              {errors.topic && (
                <p className="text-red-500">{errors.topic.message}</p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="contact-topic">Message</Label>
              <Textarea
                id="contact-message"
                placeholder="Feel free to write anything you want!"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
          </div>
          <CardFooter className="pt-2 px-0 flex justify-between">
            <Button variant="outline">Reset</Button>
            <Button type="submit">Send</Button>
          </CardFooter>
        </form>
      </CardContent>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogTitle>Thank you!</DialogTitle>
          <DialogDescription className="pt-2 text-center">
            <div className="flex justify-center w-full p-2">
              <LoadingSpinner borderColor="#fff" borderTopColor="#eee" />
            </div>
            Your message has been sent. I&lsquo;ll get back to you as soon as
            possible.
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

export default ContactCard;
