/** Foundry Monolith style: footer navigation uses deliberate Lenis-driven transitions rather than abrupt page jumps. */
import { BrandMark } from "@/components/brand/BrandMark";
import { smoothScrollToTop } from "@/components/ScrollManager";

export function Footer(){
  const handleReturnToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    smoothScrollToTop();
  };
  return <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><BrandMark /><span>OM SHIVAM<br />METAL</span></div><p>Aluminium ingot manufacturing<br />for industrial requirements.</p><a href="#top" onClick={handleReturnToTop}>Back to top ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} OM SHIVAM METAL</span><span>ENGINEERED IN ALUMINIUM</span><span>OSM / 001</span></div></footer>;
}
