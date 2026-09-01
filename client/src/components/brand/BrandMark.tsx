/** The supplied OSM mark is the single source of truth for all company brand placements. */
const markUrl = "/om-shivam-metal-logo.png";

export function BrandMark({ className = "" }: { className?: string }) {
  return <img className={`brand-mark ${className}`} src={markUrl} alt="OSM — Om Shivam Metal company logo" width={84} height={84} />;
}
