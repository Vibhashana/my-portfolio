"use client";

import { useId, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { CheckCircle2, LoaderCircle } from "lucide-react";

import { Button } from "./ui/button";
import { sendMail } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { formSchema, intents, type FormSchema } from "@/lib/validations";

const fieldClass =
  "w-full rounded-[14px] border border-on-night-muted bg-night px-4 py-3.5 text-body-m text-on-night transition-colors placeholder:text-on-night-muted focus:border-on-night focus:outline-none aria-[invalid=true]:border-accent md:rounded-2xl md:px-[18px] md:py-4";

const Field = ({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1.5 md:gap-2">
    <label htmlFor={id} className="mono-label text-on-night-muted">
      {label}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="text-body-s text-accent">
        {error}
      </p>
    )}
  </div>
);

const ContactForm = () => {
  const id = useId();
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { intent: "hiring", name: "", email: "", message: "" },
  });

  const intent = useWatch({ control, name: "intent" });

  const onSubmit = async (values: FormSchema) => {
    setFailed(false);
    const response = await sendMail(values);
    if (response.success) setSent(true);
    else setFailed(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="rounded-3xl border border-on-night-muted bg-night-raised p-[22px] md:rounded-[32px] md:p-10">
        <AnimatePresence mode="wait" initial={false}>
          {sent ? (
            <motion.div
              key="sent"
              initial={{
                opacity: 0,
                transform: "translateY(8px)",
                filter: "blur(4px)",
              }}
              animate={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="flex min-h-[420px] flex-col items-center justify-center gap-4 text-center"
              role="status"
            >
              <CheckCircle2 className="size-12 text-success" aria-hidden />
              <p className="text-h3 font-semibold text-on-night">
                Message sent
              </p>
              <p className="max-w-[32ch] text-body-m text-on-night-muted">
                Thanks for reaching out — I’ll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              exit={{
                opacity: 0,
                transform: "translateY(-8px)",
                filter: "blur(4px)",
              }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col gap-3.5 md:gap-5"
            >
              <h3 className="hidden text-h3 font-semibold text-on-night md:block">
                Send a message
              </h3>

              <div
                role="radiogroup"
                aria-label="What brings you here?"
                className="relative grid grid-cols-2 gap-1 rounded-full border border-on-night-muted bg-night p-1"
              >
                {/* One pill slides between the options instead of two fading */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-y-1 left-1 w-[calc(50%-6px)] rounded-full bg-on-night transition-transform duration-300 ease-in-out motion-reduce:transition-none",
                    intent !== "hiring" && "translate-x-[calc(100%+4px)]"
                  )}
                />
                {(Object.keys(intents) as FormSchema["intent"][]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    role="radio"
                    aria-checked={intent === key}
                    onClick={() => setValue("intent", key)}
                    className={cn(
                      "relative rounded-full px-3 py-2.5 text-label font-medium transition-colors duration-300",
                      intent === key
                        ? "text-ink"
                        : "text-on-night hover:text-on-night-muted"
                    )}
                  >
                    {intents[key]}
                  </button>
                ))}
              </div>

              <Field
                label="Name"
                id={`${id}-name`}
                error={errors.name?.message}
              >
                <input
                  id={`${id}-name`}
                  autoComplete="name"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={
                    errors.name ? `${id}-name-error` : undefined
                  }
                  className={fieldClass}
                  {...register("name")}
                />
              </Field>

              <Field
                label="Email"
                id={`${id}-email`}
                error={errors.email?.message}
              >
                <input
                  id={`${id}-email`}
                  type="email"
                  autoComplete="email"
                  placeholder="Your email"
                  aria-invalid={!!errors.email}
                  aria-describedby={
                    errors.email ? `${id}-email-error` : undefined
                  }
                  className={fieldClass}
                  {...register("email")}
                />
              </Field>

              <Field
                label="Message"
                id={`${id}-message`}
                error={errors.message?.message}
              >
                <textarea
                  id={`${id}-message`}
                  rows={5}
                  placeholder={
                    intent === "hiring"
                      ? "Tell me about the role…"
                      : "Tell me about your project…"
                  }
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? `${id}-message-error` : undefined
                  }
                  className={cn(
                    fieldClass,
                    "min-h-[132px] resize-y md:min-h-[168px]"
                  )}
                  {...register("message")}
                />
              </Field>

              {failed && (
                <p role="alert" className="text-body-s text-accent">
                  Something went wrong sending your message. Please try again,
                  or reach me on LinkedIn.
                </p>
              )}

              <Button
                type="submit"
                variant="accent"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle
                      className="animate-spin [animation-duration:700ms]"
                      aria-hidden
                    />
                    Sending…
                  </>
                ) : (
                  "Send message →"
                )}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
};

export default ContactForm;
