/** Foundry Monolith style: company information appears as a sparse material declaration, avoiding unverified claims. */
// Design note: retain the light aluminium editorial layout with verifiable company information.
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="about-section section-shell">
      <SectionHeading index="01" eyebrow="THE MATERIAL / THE PARTNER" title={<>METAL, MADE<br />MEASURABLE.</>}>
        <p>OM SHIVAM METAL specializes in aluminium ingot manufacturing for industrial requirements. The company story is built around material consistency, reliable production, and clear commercial conversations.</p>
      </SectionHeading>
      <div className="about-panel">
        <div className="about-panel__image" role="img" aria-label="Cinematic aluminium ingot study" />
        <div className="about-panel__copy">
          <p className="eyebrow">A CLEAR STARTING POINT</p>
          <p className="about-quote">“A high-performance input should begin with a high-clarity conversation.”</p>
          <a href="#contact">Share your requirement <ArrowDownRight size={18} /></a>
          <dl>
            <div>
              <dt>COMPANY DESCRIPTION</dt>
              <dd>Manufacturer of 97% Purity Aluminium Ingot, grade AL97, for industrial requirements.</dd>
            </div>
            <div>
              <dt>FACTORY LOCATION</dt>
              <dd className="about-factory-location">Tapti Silk Mills Compound, Block No. 66, NH-8 Ektanagar, opp. Jagdamba Fibres, Pipodara, Surat, Gujarat 394110<a href="https://maps.app.goo.gl/weoc9s2ZtUbpDbPz6" target="_blank" rel="noreferrer">Open factory location in Google Maps <ArrowUpRight size={14} /></a></dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
