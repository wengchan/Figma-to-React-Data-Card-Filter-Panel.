import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Razor } from "../types";

interface RazorCardProps {
  razor: Razor;
  selected: boolean;
  onSelect: () => void;
}

/** Product card (Figma `Card/*`): image, name, finish, price, select button. */
export function RazorCard({ razor, selected, onSelect }: RazorCardProps) {
  return (
    <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-[12px] border border-[#e5e5e5] bg-white">
      <div className="h-[150px] w-full bg-[#ececeb]" />
      <div className="flex w-full flex-col gap-[6px] p-[14px]">
        <p className="text-[15px] font-semibold text-[#1a1a1a]">{razor.name}</p>
        <p className="text-[13px] text-[#6b7280]">{razor.material}</p>
        <div className="flex w-full items-center justify-between pt-[4px]">
          <p className="text-[16px] font-semibold text-[#1a1a1a]">
            ${razor.price}
          </p>
          <button
            type="button"
            onClick={onSelect}
            aria-pressed={selected}
            className={cn(
              "flex items-center gap-[6px] rounded-[8px] border px-[12px] py-[8px] text-[13px] font-medium transition-colors",
              selected
                ? "border-transparent bg-[#1a1a1a] text-white"
                : "border-[#e5e5e5] bg-white text-[#1a1a1a] hover:bg-[#f5f5f4]",
            )}
          >
            {selected && <Check className="size-[13px]" strokeWidth={3} />}
            {selected ? "Selected" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
}
