import { useCatalogStore } from "../store/useCatalogStore";
import { FILTER_MATERIALS, FILTER_TYPES } from "../types";
import { CheckboxRow } from "./CheckboxRow";
import { FilterGroup } from "./FilterGroup";
import { Switch } from "./Switch";

/** Left sidebar (Figma `Filter Panel`): search + material/type groups + toggle. */
export function FilterPanel() {
  const search = useCatalogStore((s) => s.search);
  const materials = useCatalogStore((s) => s.materials);
  const types = useCatalogStore((s) => s.types);
  const inStockOnly = useCatalogStore((s) => s.inStockOnly);
  const setSearch = useCatalogStore((s) => s.setSearch);
  const toggleMaterial = useCatalogStore((s) => s.toggleMaterial);
  const toggleType = useCatalogStore((s) => s.toggleType);
  const setInStockOnly = useCatalogStore((s) => s.setInStockOnly);
  const clearAll = useCatalogStore((s) => s.clearAll);

  return (
    <aside className="flex w-[280px] shrink-0 flex-col gap-[24px] rounded-[12px] border border-[#e5e5e5] bg-white p-[20px]">
      <div className="flex items-center justify-between">
        <p className="text-[16px] font-semibold text-[#1a1a1a]">Filters</p>
        <button
          type="button"
          onClick={clearAll}
          className="text-[13px] font-medium text-[#6b7280] transition-colors hover:text-[#1a1a1a]"
        >
          Clear all
        </button>
      </div>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search razors"
        className="w-full rounded-[8px] border border-[#e5e5e5] bg-[#f9f9f8] px-[12px] py-[10px] text-[14px] text-[#1a1a1a] outline-none placeholder:text-[#6b7280] focus:border-[#1a1a1a]/40"
      />

      <FilterGroup label="Material">
        {FILTER_MATERIALS.map((material) => (
          <CheckboxRow
            key={material}
            label={material}
            checked={materials.has(material)}
            onChange={() => toggleMaterial(material)}
          />
        ))}
      </FilterGroup>

      <FilterGroup label="Type">
        {FILTER_TYPES.map((type) => (
          <CheckboxRow
            key={type}
            label={type}
            checked={types.has(type)}
            onChange={() => toggleType(type)}
          />
        ))}
      </FilterGroup>

      <div className="flex items-center justify-between">
        <span className="text-[14px] text-[#1a1a1a]">In stock only</span>
        <Switch
          checked={inStockOnly}
          onChange={setInStockOnly}
          aria-label="In stock only"
        />
      </div>
    </aside>
  );
}
