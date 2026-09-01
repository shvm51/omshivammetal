/** Foundry Monolith style: quality is articulated as a technical control system rather than a decorative collection of badges. */
// Design note: light aluminium quality section with verified certifications shown as clear proof points.
import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const points = ["Material consistency", "Dimensional consistency", "Spectrometer inspection", "Traceability", "Process control", "Reliable supply"];
const zedBadgeUrl = "/manus-storage/om-shivam-metal-msme-zed-bronze_47b830c9.png";

export function Quality() {
  return (
    <section id="quality" className="quality-section section-shell">
      <div className="quality-orbit" aria-hidden="true"><span /><span /><span /></div>
      <SectionHeading index="04" eyebrow="QUALITY / CONTROL" title={<>QUALITY IS BUILT<br />INTO EVERY INGOT.</>}>
        <p>Build your final quality statement around the controls, documentation, and inspection approach you are ready to verify.</p>
      </SectionHeading>
      <div className="quality-grid">
        {points.map((point, index) => <div className="quality-point" key={point}><span>0{index + 1}</span><Check size={17} strokeWidth={1.5} /><h3>{point}</h3></div>)}
      </div>
      <div className="quality-spec quality-certification">
        <div className="quality-certification__copy">
          <span>QUALITY CERTIFICATION</span>
          <p>MSME ZED BRONZE<br />CERTIFIED</p>
          <span>ZERO DEFECT · ZERO EFFECT</span>
        </div>
        <img className="quality-certification__badge" src={zedBadgeUrl} alt="MSME ZED Bronze Certified badge" width={300} height={300} />
      </div>
    </section>
  );
}
