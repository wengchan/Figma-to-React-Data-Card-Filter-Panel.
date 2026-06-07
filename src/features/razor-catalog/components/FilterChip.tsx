import { X } from "lucide-react";

interface FilterChipProps {
  label: string;
  onRemove: () => void;
}

/** Removable active-filter pill (Figma `Chip/*`). The whole pill removes. */
export function FilterChip({ label, onRemove }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onRemove}
      aria-label={`Remove ${label} filter`}
      className="group flex items-center gap-[6px] rounded-full bg-[#efefee] px-[10px] py-[6px] transition-colors hover:bg-[#e6e6e4]"
    >
      <span className="text-[13px] font-medium text-[#1a1a1a]">{label}</span>
      <X
        className="size-[11px] text-[#6b7280] transition-colors group-hover:text-[#1a1a1a]"
        strokeWidth={2.5}
      />
    </button>
  );
}
