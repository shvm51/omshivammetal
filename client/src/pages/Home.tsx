/** Foundry Monolith style: this page sequences one material story from ingot sculpture to industrial enquiry. */
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/sections/About";
import { Manufacturing } from "@/components/sections/Manufacturing";
import { Products } from "@/components/sections/Products";
import { Quality } from "@/components/sections/Quality";
import { Applications } from "@/components/sections/Applications";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return <div className="site-shell"><Navbar /><main><Hero /><About /><Manufacturing /><Products /><Quality /><Applications /><Contact /></main><Footer /></div>;
}
