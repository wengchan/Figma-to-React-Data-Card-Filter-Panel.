import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

interface CheckboxRowProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

/** A single checkbox + label row (Figma `Option/*`). Presentational only. */
export function CheckboxRow({ label, checked, onChange }: CheckboxRowProps) {
  return (
    <label className="flex w-full cursor-pointer select-none items-center gap-[10px]">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span
        className={cn(
          "flex size-[18px] shrink-0 items-center justify-center rounded-[4px] border-[1.5px] transition-colors",
          checked ? "border-[#1a1a1a] bg-[#1a1a1a]" : "border-[#e5e5e5] bg-white",
        )}
      >
        {checked && <Check className="size-[12px] text-white" strokeWidth={3} />}
      </span>
      <span className="text-[14px] text-[#1a1a1a]">{label}</span>
    </label>
  );
}
