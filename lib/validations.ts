import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be 2 al least characters long.",
    })
    .max(50),
  email: z.string().email({
    message: "Email doesn't seem to be valid.",
  }),
  message: z
    .string()
    .min(5, {
      message: "Message must be 2 al least characters long.",
    })
    .max(250),
});

export type FormSchema = z.infer<typeof formSchema>;
