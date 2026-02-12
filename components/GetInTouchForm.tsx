"use client";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getInTouchFormSchema } from "@/lib/definitions";
import { toast } from "@/components/ui/use-toast";
import SubmitButton from "./SubmitButton";
import { contactFormAction } from "@/lib/actions";
import { useAction } from "next-safe-action/hooks";

const GetInTouchForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof getInTouchFormSchema>>({
    resolver: zodResolver(getInTouchFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { status, execute } = useAction(contactFormAction, {
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

  const onSubmit = async (values: z.infer<typeof getInTouchFormSchema>) => {
    execute(values);
  };

  return (
    <div className="w-full max-w-2xl">
      <Form {...form}>
        <form
          onClick={form.handleSubmit(onSubmit)}
          ref={formRef}
          className="space-y-3"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>
                  <FormControl>
                    <Input
                      required
                      placeholder="Enter Name"
                      className="text-black"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input
                      required
                      type="email"
                      placeholder="Enter Email"
                      className="text-black"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Type Your Message..."
                    className="resize-y text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <SubmitButton text="Contact Us" variant="outline" disabled={status} />
        </form>
      </Form>
    </div>
  );
};

export default GetInTouchForm;
