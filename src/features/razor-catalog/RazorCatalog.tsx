import { FilterChip } from "./components/FilterChip";
import { FilterPanel } from "./components/FilterPanel";
import { RazorGrid } from "./components/RazorGrid";
import { ResultsToolbar } from "./components/ResultsToolbar";
import { useActiveChips, useCatalogStore } from "./store/useCatalogStore";

export function RazorCatalog() {
  const activeChips = useActiveChips();
  const removeChip = useCatalogStore((s) => s.removeChip);

  return (
    <div className="flex min-h-screen justify-center bg-[#ececec] p-[24px] font-['Inter',system-ui,sans-serif]">
      <div className="flex h-fit w-full max-w-[1120px] flex-col gap-[24px] rounded-[16px] bg-[#f5f5f4] p-[32px]">
        {/* Header */}
        <header className="flex flex-col gap-[6px]">
          <h1 className="text-[22px] font-semibold leading-[28px] text-[#1a1a1a]">
            Shop Razors
          </h1>
          <p className="text-[14px] leading-[20px] text-[#6b7280]">
            Precision-engineered safety razors. Filter to find your setting.
          </p>
        </header>

        {/* Body */}
        <div className="flex items-start gap-[32px]">
          <FilterPanel />

          <div className="flex min-w-0 flex-1 flex-col gap-[16px]">
            <ResultsToolbar />

            {activeChips.length > 0 && (
              <div className="flex w-full flex-wrap gap-[8px]">
                {activeChips.map((chip) => (
                  <FilterChip
                    key={chip.id}
                    label={chip.label}
                    onRemove={() => removeChip(chip)}
                  />
                ))}
              </div>
            )}

            <RazorGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
