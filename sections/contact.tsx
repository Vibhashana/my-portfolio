import ContactForm from "@/components/contact-form";

const Contact = () => {
  return (
    <section id="contact" className="py-10">
      <div className="container">
        <div className="flex justify-center">
          <p className="bg-gradient-to-r from-blue-600 to-sky-300 bg-clip-text text-sm font-semibold uppercase tracking-widest text-transparent">
            Let&apos;s Connect
          </p>
        </div>
        <h2 className="mt-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Get in Touch
        </h2>
        <p className="mx-auto mt-3 max-w-[60ch] text-center text-muted-foreground">
          Have a project in mind? Let&apos;s collaborate to make it happen. Drop
          me a message, and I&apos;ll get back to you soon.
        </p>

        <div className="mt-10 flex md:justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
