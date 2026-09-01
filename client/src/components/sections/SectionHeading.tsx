import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
};

export function SectionHeading({ index, eyebrow, title, children }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <div className="section-index">
        <i aria-hidden="true" />
        {index}
      </div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <div className="section-heading__body">{children}</div>
      </div>
    </header>
  );
}
