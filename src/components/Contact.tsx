import { Mail, ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionTitle
          eyebrow="CONTACT"
          title="Let's build something useful."
          description="You can explore my projects on GitHub or get in touch."
        />

        <div className="contact-actions">
          <a
            href="mailto:barusdrk@gmail.com"
            className="contact-card"
          >
            <Mail size={28} />

            <div>
              <span>Email</span>
              <strong>Get in touch</strong>
            </div>

            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
