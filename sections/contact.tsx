import ContactForm from "@/components/contact-form";
import SectionHeader from "@/components/section-header";

const Contact = () => {
  return (
    <section id="contact" className="pb-20 pt-10">
      <div className="container">
        <SectionHeader
          eyebrow="Let's Connect"
          title="Get in Touch"
          description="Have a project in mind? Let's collaborate to make it happen. Drop
          me a message, and I'll get back to you soon."
        />

        <div className="mt-10 flex md:mt-16 md:justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
