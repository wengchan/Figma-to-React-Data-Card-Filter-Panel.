import { useCatalogStore, useVisibleRazors } from "../store/useCatalogStore";
import { SortDropdown } from "./SortDropdown";

/** Results header (Figma `Results Toolbar`): live count + sort dropdown. */
export function ResultsToolbar() {
  const sort = useCatalogStore((s) => s.sort);
  const setSort = useCatalogStore((s) => s.setSort);
  const count = useVisibleRazors().length;

  return (
    <div className="flex w-full items-center justify-between">
      <p className="text-[15px] font-semibold text-[#1a1a1a]">
        {count} razor{count === 1 ? "" : "s"}
      </p>
      <SortDropdown value={sort} onChange={setSort} />
    </div>
  );
}
