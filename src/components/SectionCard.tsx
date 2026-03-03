import { ReactNode } from "react";

type SectionCardProps = {
  icon: string;
  title: string;
  children: ReactNode;
};

export default function SectionCard({
  icon,
  title,
  children,
}: SectionCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xl leading-none">{icon}</span>
        <h2 className="font-semibold text-slate-800 text-base tracking-tight">
          {title}
        </h2>
      </div>
      <div className="text-sm text-slate-600 leading-relaxed">
        <>{children}</>
      </div>
    </div>
  );
}
