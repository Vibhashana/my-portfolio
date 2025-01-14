import ContactForm from "@/components/contact-form";
import SectionHeader from "@/components/section-header";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="py-10">
      <div className="container">
        <SectionHeader
          eyebrow="Let's Connect"
          title="Get in Touch"
          description="Have a project in mind? Let's collaborate to make it happen. Drop
          me a message, and I'll get back to you soon."
        />

        <p className="mt-4 text-center text-muted-foreground">
          You can directly email me at:{" "}
          <Link href="mailto:hello@sahanbandara.com">
            hello@sahanbandara.com
          </Link>
        </p>

        <div className="mt-10 flex md:justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
