"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

export default function FirstSetupForm() {
  const formSchema = z.object({
    displayName: z.string().min(3, {
      message: "Name must be at least 3 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      displayName: "",
    },
  });

  const { update, data } = useSession();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(async ({ displayName }) => {
          const updated = await update({ user: { name: displayName } });
          console.log({ data, updated });
        })}
        className="space-y-8"
      >
        <FormField
          name="displayName"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
              <FormLabel>Tell us your name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
