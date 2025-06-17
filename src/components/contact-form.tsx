"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { TextArea } from "./ui/textarea";
import MagicButton from "./ui/magic-button";
import { Navigation } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Erro on sending message.");
      console.error(error);
    }
  };
  return (
    <div className=" mx-auto w-full rounded-none bg-bg-900 py-4 px-4 md:rounded-2xl md:px-0">
      <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col md:space-y-0">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register("name")} placeholder="Tyler" />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            {...register("email")}
            placeholder="email@exemplo.com"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="password">Message</Label>
          <TextArea
            id="message"
            {...register("message")}
            placeholder="Write your message..."
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </LabelInputContainer>

        <MagicButton
          title={isSubmitting ? "Sending..." : "Send Message"}
          icon={<Navigation />}
          position="right"
        />
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
