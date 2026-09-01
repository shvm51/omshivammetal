/** Light Aluminium Sheet theme: practical enquiry delivery with transparent browser fallbacks. */
// Design note: light aluminium enquiry sheet with clear, verified product and factory information.
import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const enquiryEmail = "omshivammetal@gmail.com";

type EmailDraft = {
  mailtoHref: string;
  gmailHref: string;
};

export function Contact() {
  const [draft, setDraft] = useState<EmailDraft | null>(null);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const company = String(form.get("company") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const requirement = String(form.get("requirement") || "");
    const message = String(form.get("message") || "");
    const subject = `97% Purity Aluminium Ingot Enquiry — ${company || name}`;
    const body = [
      "New website enquiry for OM SHIVAM METAL",
      "",
      `Name: ${name}`,
      `Company: ${company || "Not provided"}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      "",
      `Requirement: ${requirement}`,
      "",
      "Message:",
      message || "Not provided",
    ].join("\n");
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const mailtoHref = `mailto:${enquiryEmail}?subject=${encodedSubject}&body=${encodedBody}`;
    const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${enquiryEmail}&su=${encodedSubject}&body=${encodedBody}`;

    setDraft({ mailtoHref, gmailHref });
    window.location.assign(mailtoHref);
  };

  return (
    <section id="contact" className="contact-section section-shell">
      <div className="contact-header">
        <p className="eyebrow">06 / CONTACT / ENQUIRY</p>
        <h2>LET’S BUILD WITH<br />ALUMINIUM.</h2>
        <p>Share your material requirement, intended application, or expected volume. You can also contact the OM SHIVAM METAL team directly using the details below.</p>
      </div>
      <div className="contact-layout">
        <form className="contact-form" onSubmit={submit}>
          <div className="contact-form__bar"><span>ENQUIRY / TECHNICAL BRIEF</span><span>DIRECT CONTACT AVAILABLE</span></div>
          <label><span>Name</span><input name="name" required placeholder="Your name" /></label>
          <label><span>Company</span><input name="company" placeholder="Company name" /></label>
          <label><span>Email</span><input name="email" type="email" required placeholder="name@company.com" /></label>
          <label><span>Phone</span><input name="phone" type="tel" placeholder="Contact number" /></label>
          <label className="contact-form__wide"><span>Requirement</span><input name="requirement" required placeholder="Material, alloy, application, or volume" /></label>
          <label className="contact-form__wide"><span>Message</span><textarea name="message" rows={4} placeholder="Add any technical, commercial, or delivery context" /></label>
          <button type="submit"><span>Compose enquiry email</span><ArrowUpRight size={17} /></button>
          {draft && (
            <div className="email-handoff" role="status" aria-live="polite">
              <p>Your email app should open with the enquiry prefilled. If it does not, use one of the prepared options below.</p>
              <div className="email-handoff__actions">
                <a href={draft.mailtoHref}>Try email app again <ArrowUpRight size={14} /></a>
                <a href={draft.gmailHref} target="_blank" rel="noreferrer">Open in Gmail <ArrowUpRight size={14} /></a>
              </div>
              <p className="email-handoff__hint">Gmail may ask the visitor to sign in. In every option, they review the message and press Send.</p>
            </div>
          )}
        </form>
        <aside className="contact-details">
          <div className="contact-details__intro"><span>DIRECT CONTACT</span><p>For product, availability, and commercial discussions, contact the OM SHIVAM METAL team directly.</p></div>
          <div><span><Phone size={14} /> MR. ALPESH AGHERA</span><a href="tel:+919879599248">+91 98795 99248</a></div>
          <div><span><Phone size={14} /> MR. JIGNESH AGHERA</span><a href="tel:+919825361850">+91 98253 61850</a></div>
          <div><span><Mail size={14} /> EMAIL</span><a href="mailto:omshivammetal@gmail.com">omshivammetal@gmail.com</a></div>
          <div className="contact-address"><span><MapPin size={14} /> FACTORY ADDRESS</span><p>Tapti Silk Mills Compound, Block No. 66, NH-8 Ektanagar, opp. Jagdamba Fibres, Pipodara, Surat, Gujarat 394110</p><a href="https://maps.app.goo.gl/weoc9s2ZtUbpDbPz6" target="_blank" rel="noreferrer">Open factory location in Google Maps <ArrowUpRight size={14} /></a></div>
          <p className="contact-details__foot">For specification requests, include the AL97 requirement, intended process, and approximate volume where available.</p>
        </aside>
      </div>
    </section>
  );
}
