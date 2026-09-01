/** Foundry Monolith style: a minimal header that transitions from cinematic transparency to grounded graphite. */
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand/BrandMark";

const links = [["About", "#about"], ["Manufacturing", "#manufacturing"], ["Products", "#products"], ["Quality", "#quality"], ["Applications", "#applications"]];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const goTo = (target: string) => { setOpen(false); document.querySelector(target)?.scrollIntoView({ behavior: "smooth" }); };
  return <header className={`site-nav ${scrolled ? "site-nav--solid" : ""}`}>
    <a className="nav-brand" href="#top" aria-label="OM Shivam Metal home"><BrandMark /><span>OM SHIVAM<br />METAL</span></a>
    <nav className="nav-links" aria-label="Primary navigation">{links.map(([label, href]) => <button key={href} onClick={() => goTo(href)}>{label}</button>)}</nav>
    <button className="nav-enquire" onClick={() => goTo("#contact")}>Enquire <ArrowUpRight size={15} /></button>
    <button className="nav-menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
    {open && <div className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href], index) => <button key={href} onClick={() => goTo(href)}><span>0{index + 1}</span>{label}<ArrowUpRight size={17} /></button>)}<button className="mobile-nav__contact" onClick={() => goTo("#contact")}>Discuss a requirement</button></div>}
  </header>;
}
