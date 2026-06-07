import { cn } from "@/lib/utils";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  "aria-label"?: string;
}

/** Toggle switch (Figma `Toggle/In stock`): 38×22 track, 18px knob. */
export function Switch({ checked, onChange, ...props }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative h-[22px] w-[38px] shrink-0 rounded-full transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a]/30",
        checked ? "bg-[#1a1a1a]" : "bg-[#d4d4d4]",
      )}
      {...props}
    >
      <span
        className={cn(
          "absolute top-1/2 size-[18px] -translate-y-1/2 rounded-full bg-white shadow-sm transition-all",
          checked ? "left-[18px]" : "left-[2px]",
        )}
      />
    </button>
  );
}
