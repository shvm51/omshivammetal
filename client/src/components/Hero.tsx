/** Foundry Monolith style: a pinned cinematic opening in which scroll position moves a heavy aluminium ingot field. */
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { IngotScene } from "@/components/ingot/IngotScene";
gsap.registerPlugin(ScrollTrigger);
const copyStages = [
  { index: "00 / MATERIAL STUDY", title: "ENGINEERED\nIN ALUMINIUM.", body: "Precision manufacturing. Consistent quality. Industrial reliability." },
  { index: "01 / THE MATERIAL", title: "PURE MATERIAL.\nPRECISE PROCESS.", body: "A refined surface begins with disciplined control of material and method." },
  { index: "02 / THE STACK", title: "BUILT FOR\nINDUSTRY.", body: "A material form designed to move through demanding production environments." },
];
export function Hero() {
  const hero = useRef<HTMLElement>(null); const progress = useRef(0);
  useLayoutEffect(() => { if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; const root=hero.current; if(!root)return; const copy=Array.from(root.querySelectorAll<HTMLElement>("[data-hero-copy]")); const visibilityWindows=[[-0.12,0.28],[0.36,0.62],[0.70,1.12]]; const ctx=gsap.context(()=>{ gsap.to(progress,{current:1,ease:"none",scrollTrigger:{trigger:root,start:"top top",end:"bottom bottom",scrub:0.25,onUpdate:(self)=>{const value=self.progress;progress.current=value;copy.forEach((element,index)=>{const [start,end]=visibilityWindows[index];const fade=0.075;const opacity=Math.max(0,Math.min(1,(value-start)/fade,(end-value)/fade));element.style.opacity=opacity.toFixed(3);element.style.transform=`translate3d(0, ${(1-opacity)*18}px, 0)`;element.style.pointerEvents="none";});}}});},root);return()=>ctx.revert();},[]);
  const scrollToContent=()=>document.querySelector("#about")?.scrollIntoView({behavior:"smooth"});
  return <section id="top" ref={hero} className="hero-scroll" style={{ height: "330vh" }} aria-label="OM Shivam Metal introduction"><div className="hero-sticky"><IngotScene progress={progress} /><div className="hero-vignette" /><div className="hero-grain" /><div className="hero-meta hero-meta--left"><span className="status-dot" /> MATERIAL / ALUMINIUM</div><div className="hero-meta hero-meta--right">OSM — 001<br />INDUSTRIAL MATERIALS</div>{copyStages.map((stage,index)=><div className={`hero-copy hero-copy--${index}`} data-hero-copy key={stage.index}><p className="eyebrow">{stage.index}</p><h1>{stage.title.split("\n").map(line=><span key={line}>{line}</span>)}</h1><p className="hero-copy__body">{stage.body}</p></div>)}<button className="hero-scroll-cue" onClick={scrollToContent} aria-label="Scroll to company overview"><span>SCROLL TO EXPLORE</span><ArrowDown size={16} /></button><button className="hero-enquire" onClick={()=>document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"})}>Discuss a requirement <ArrowUpRight size={16} /></button></div></section>;
}
