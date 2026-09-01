/** Foundry Monolith style: one scroll manager handles both wheel smoothing and deliberate programmatic journey transitions. */
import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let activeLenis: Lenis | null = null;

export function smoothScrollToTop() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }
  if (activeLenis) {
    activeLenis.scrollTo(0, { duration: 1.05, easing: (t) => 1 - Math.pow(1 - t, 4) });
    return;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function ScrollManager(){
  useEffect(()=>{
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    const lenis=new Lenis({lerp:0.12,wheelMultiplier:0.9,smoothWheel:true});
    activeLenis=lenis;
    lenis.on("scroll",ScrollTrigger.update);
    let rafId=0;
    const raf=(time:number)=>{lenis.raf(time);rafId=requestAnimationFrame(raf);};
    rafId=requestAnimationFrame(raf);
    return()=>{cancelAnimationFrame(rafId);if(activeLenis===lenis)activeLenis=null;lenis.destroy();};
  },[]);
  return null;
}
