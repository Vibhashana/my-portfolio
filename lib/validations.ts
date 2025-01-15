import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string({ message: "Name is required." })
    .min(2, {
      message: "Name must be at least 2 characters long.",
    })
    .max(50),
  email: z.string({ message: "Email is required." }).email({
    message: "Email doesn't seem to be valid.",
  }),
  message: z
    .string({ message: "Message is required." })
    .min(5, {
      message: "Message must be at least 5 characters long.",
    })
    .max(250, {
      message: "Message shouldn't exceed 250 characters.",
    }),
});

export type FormSchema = z.infer<typeof formSchema>;
