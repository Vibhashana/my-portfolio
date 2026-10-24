import { z } from "zod";

export const intents = {
  hiring: "I’m hiring",
  project: "I have a project",
} as const;

export const formSchema = z.object({
  intent: z.enum(["hiring", "project"]),
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
    .max(1000, {
      message: "Message shouldn't exceed 1000 characters.",
    }),
});

export type FormSchema = z.infer<typeof formSchema>;
