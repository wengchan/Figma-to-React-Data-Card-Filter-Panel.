import { ChevronDown } from "lucide-react";

import { SORT_LABELS, type SortOption } from "../types";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

/**
 * Sort pill (Figma `Sort`). Visually a styled pill; a transparent native
 * <select> overlay provides the real, accessible dropdown behaviour.
 */
export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="relative inline-flex items-center gap-[8px] rounded-[8px] border border-[#e5e5e5] bg-white px-[12px] py-[8px]">
      <span className="text-[13px] font-medium text-[#1a1a1a]">
        Sort: {SORT_LABELS[value]}
      </span>
      <ChevronDown className="size-[14px] text-[#6b7280]" strokeWidth={2} />
      <select
        aria-label="Sort razors"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="absolute inset-0 cursor-pointer opacity-0"
      >
        {(Object.keys(SORT_LABELS) as SortOption[]).map((key) => (
          <option key={key} value={key}>
            {SORT_LABELS[key]}
          </option>
        ))}
      </select>
    </div>
  );
}
