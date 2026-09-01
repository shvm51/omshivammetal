/** Light Aluminium Sheet theme: a single confirmed 97% purity AL97 aluminium ingot product. */
import { ArrowUpRight, BadgeCheck, FileText } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const al97IngotImage = "/manus-storage/om-shivam-metal-al97-ingot_ae45e663.png";

export function Products() {
  return (
    <section id="products" className="products-section section-shell">
      <SectionHeading index="03" eyebrow="PRODUCT / AL97 ALUMINIUM" title={<>ONE INGOT.<br />CLEAR SPEC.</>}>
        <p>OM SHIVAM METAL supplies one confirmed product: 97% Purity Aluminium Ingot, grade AL97. Use the enquiry route for availability and delivery discussions.</p>
      </SectionHeading>
      <div className="product-list product-list--single">
        <article className="product-card product-card--featured">
          <div className="product-object product-object--featured product-object--al97">
            <img className="product-object__reference" src={al97IngotImage} alt="97% purity AL97 aluminium ingot from Om Shivam Metal" />
            <span className="product-object__caption">AL97 / 97% PURITY / ALUMINIUM INGOT</span>
          </div>
          <div className="product-card__content">
            <p className="product-card__code">OSM / AL97 / 97</p>
            <div className="product-card__title"><span><BadgeCheck size={14} /> CONFIRMED PRODUCT</span><h3>97% Purity<br />Aluminium Ingot</h3></div>
            <dl>
              <div><dt>PURITY</dt><dd>97%</dd></div>
              <div><dt>GRADE</dt><dd>AL97</dd></div>
              <div><dt>PRODUCT FORM</dt><dd>Aluminium Ingot</dd></div>
            </dl>
            <a className="product-request" href="#contact"><FileText size={15} /><span>Request full specification</span><ArrowUpRight size={16} /></a>
          </div>
        </article>
      </div>
    </section>
  );
}
