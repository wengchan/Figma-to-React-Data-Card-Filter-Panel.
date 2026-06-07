import type { ReactNode } from "react";

interface FilterGroupProps {
  label: string;
  children: ReactNode;
}

/** Labelled filter section (Figma `Group/*`): uppercase heading + option list. */
export function FilterGroup({ label, children }: FilterGroupProps) {
  return (
    <div className="flex w-full flex-col gap-[12px]">
      <p className="text-[12px] font-semibold uppercase tracking-[0.72px] text-[#6b7280]">
        {label}
      </p>
      <div className="flex w-full flex-col gap-[12px]">{children}</div>
    </div>
  );
}
