"use client";

import z from "zod";
import React, { useRef } from "react";
import { Input } from "./ui/input";
import SubmitButton from "./SubmitButton";
import { subscriberEmailAction } from "@/lib/actions";
import { toast } from "./ui/use-toast";
import { useForm } from "react-hook-form";
import { newsletterEmailSchema } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useAction } from "next-safe-action/hooks";

const NewsletterEmail = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof newsletterEmailSchema>>({
    resolver: zodResolver(newsletterEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const { status, execute } = useAction(subscriberEmailAction, {
    onSuccess(data) {
      if (data.data?.success) {
        toast({
          title: "Success",
          variant: "success",
          description: data.data.message,
        });
        form.reset();
      }

      if (!data.data?.success) {
        toast({
          title: "Error",
          description: data.data?.message,
          variant: "destructive",
        });
      }
    },
    onError(error) {
      if (error.error.serverError) {
        toast({
          title: "An error occured on server",
          description: error.error.serverError,
          variant: "destructive",
        });
      }
    },
  });

  const handleSubscribe = async (
    values: z.infer<typeof newsletterEmailSchema>
  ) => {
    execute(values);
  };

  return (
    <>
      <Form {...form}>
        <form
          className="flex items-start pt-4 max-w-xl"
          ref={formRef}
          onSubmit={form.handleSubmit(handleSubscribe)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="max-w-xs w-full">
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    required
                    placeholder="Subscribe To Newsletter"
                    className="rounded-l-sm rounded-r-none text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <SubmitButton
            text="Subscribe"
            disabled={status}
            className="rounded-r-sm rounded-l-none bg-custom-purple-300/50 hover:bg-custom-purple-300 px-8"
          />
        </form>
      </Form>
    </>
  );
};

export default NewsletterEmail;
