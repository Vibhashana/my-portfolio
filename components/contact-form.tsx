"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent } from "./ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { CheckCircle2, Send } from "lucide-react";
import { formSchema, type FormSchema } from "@/lib/validations";
import { sendMail } from "@/lib/actions";
import { useState } from "react";
import clsx from "clsx";

const ContactForm = () => {
  const [successOpen, setSuccessOpen] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await sendMail(values);

    if (response.success) {
      setSuccessOpen(true);
      form.reset();

      setTimeout(() => setSuccessOpen(false), 3000);
    }

    console.log(response);
  };

  return (
    <Card className="relative overflow-hidden pt-6 md:w-[350px]">
      <CardContent>
        {/* blur-lg */}
        <div
          className={clsx(
            successOpen &&
              "pointer-events-auto translate-y-0 opacity-100 blur-0",
            "pointer-events-none absolute inset-0 z-10 flex -translate-y-10 items-center justify-center bg-card p-6 opacity-0 blur-lg transition-all"
          )}
        >
          <div className="space-y-4 text-center">
            <CheckCircle2 size={50} className="mx-auto text-green-500" />
            <div className="text-lg font-semibold">Message sent!</div>
            <p className="text-muted-foreground">
              Thank you for your message. I&apos;ll get back to you soon!
            </p>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="z-10 space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Your name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-y"
                      {...field}
                    />
                  </FormControl>
                  <div className="flex justify-between gap-2">
                    <FormMessage />
                    <FormDescription className="ml-auto text-end text-xs text-muted-foreground">
                      0/250
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit">
              {form.formState.isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <span>Send</span>
              )}
              <Send />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
