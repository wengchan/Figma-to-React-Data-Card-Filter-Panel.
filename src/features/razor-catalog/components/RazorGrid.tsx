import { useCatalogStore, useVisibleRazors } from "../store/useCatalogStore";
import { RazorCard } from "./RazorCard";

/** 2-column results grid (Figma `Grid`) with an empty state. */
export function RazorGrid() {
  const selectedRazorId = useCatalogStore((s) => s.selectedRazorId);
  const selectRazor = useCatalogStore((s) => s.selectRazor);
  const razors = useVisibleRazors();

  if (razors.length === 0) {
    return (
      <div className="w-full rounded-[12px] border border-dashed border-[#e5e5e5] bg-white py-[48px] text-center text-[14px] text-[#6b7280]">
        No razors match your filters.
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-2 gap-[16px]">
      {razors.map((razor) => (
        <RazorCard
          key={razor.id}
          razor={razor}
          selected={selectedRazorId === razor.id}
          onSelect={() => selectRazor(razor.id)}
        />
      ))}
    </div>
  );
}
