"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent } from "./ui/card";
import {
  Form,
  FormControl,
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
    <Card className="relative overflow-hidden pt-6 md:w-[400px]">
      <CardContent>
        <div
          className={clsx(
            successOpen &&
              "pointer-events-auto translate-y-0 opacity-100 !blur-0",
            "pointer-events-none absolute inset-0 z-10 flex -translate-y-10 items-center justify-center bg-card p-8 opacity-0 blur-lg transition-all duration-200"
          )}
        >
          <div className="space-y-4 text-center">
            <CheckCircle2 size={60} className="mx-auto text-green-500" />
            <div className="text-xl font-semibold">Message sent!</div>
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
                      <Input
                        placeholder="John"
                        autoComplete="name"
                        {...field}
                      />
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
                    <Input
                      placeholder="example@email.com"
                      autoComplete="email"
                      type="email"
                      {...field}
                    />
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
                      className="min-h-40 resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
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
