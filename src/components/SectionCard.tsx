import type { ReactNode } from "react";

type SectionCardProps = {
  number: number;
  title: string;
  children: ReactNode;
};

export default function SectionCard({ number, title, children }: SectionCardProps) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="mb-4 flex items-baseline gap-3">
        <span className="text-sm font-semibold text-brand tabular-nums">{number.toString().padStart(2, "0")}</span>
        <h2 className="text-lg font-semibold tracking-tight text-text">{title}</h2>
      </div>
      <div className="space-y-3 text-[15px] leading-relaxed text-muted">{children}</div>
    </section>
  );
}
