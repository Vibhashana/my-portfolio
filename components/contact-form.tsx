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
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";

const MotionCard = motion.create(Card);

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

      // setTimeout(() => setSuccessOpen(false), 4000);
    }
  };

  return (
    <MotionCard
      className="relative w-full overflow-hidden pt-6 md:w-[400px]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <CardContent>
        <AnimatePresence mode="popLayout">
          {successOpen ? (
            <motion.div
              layoutId="wrapper"
              className={clsx(
                successOpen && "!blur-0",
                "flex items-center justify-center bg-card p-8 blur-lg"
              )}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="space-y-4 text-center">
                <CheckCircle2 size={60} className="mx-auto text-green-500" />
                <div className="text-xl font-semibold">Message sent!</div>
                <p className="text-muted-foreground">
                  Thank you for your message. I&apos;ll get back to you soon!
                </p>
              </div>
            </motion.div>
          ) : (
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
                          placeholder="Write your message here..."
                          className="min-h-40 resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <span>Send</span>
                  )}
                  <Send />
                </Button>
              </form>
            </Form>
          )}
        </AnimatePresence>
      </CardContent>
    </MotionCard>
  );
};

export default ContactForm;
