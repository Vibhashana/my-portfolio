import ContactForm from "@/components/contact-form";
import { profile } from "@/lib/data";

const directLinks = [
  { title: "LinkedIn", action: "Connect ↗", href: profile.linkedin },
  { title: "GitHub", action: "Browse code ↗", href: profile.github },
  { title: "Resume", action: "Download PDF ↓", href: profile.resume },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-night text-on-night">
      <div className="container-page flex flex-col gap-7 pb-8 pt-[72px] md:gap-[120px] md:pb-12 md:pt-36">
        <div className="flex flex-col gap-7 lg:flex-row lg:gap-24">
          <div className="flex flex-col gap-7 lg:flex-1 lg:gap-10">
            <p className="eyebrow">06 — Let’s talk</p>
            <h2 className="font-semibold">
              <span className="block text-display-l">
                Hiring, or have something to build?
              </span>
              <span className="block font-serif text-display-l-serif font-normal italic text-accent">
                Let’s talk.
              </span>
            </h2>
            <p className="text-body-l text-on-night-muted">
              I’m open to full-time frontend roles and freelance projects. Tell
              me what you’re working on and I’ll get back to you soon.
            </p>
            <ul className="hidden md:block">
              {directLinks.map(({ title, action, href }) => (
                <li
                  key={title}
                  className="border-b border-on-night-muted first:border-t"
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-[18px]"
                  >
                    <span className="text-h3 font-semibold">{title}</span>
                    <span className="mono-label text-on-night-muted transition-[color,transform] duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-on-night">
                      {action}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-[520px] lg:shrink-0">
            <ContactForm />
          </div>
        </div>

        <footer className="flex items-center justify-between border-t border-on-night-muted pt-6 md:pt-8">
          <p className="mono-label text-on-night-muted">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="hidden font-serif text-[40px] italic leading-[0.96] tracking-[-0.015em] md:block">
            {profile.name}
          </p>
          <a
            href="#top"
            className="mono-label transition-colors duration-200 hover:text-accent"
          >
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
