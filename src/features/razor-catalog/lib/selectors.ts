import type { Material, Razor, RazorType, SortOption } from "../types";

export interface FilterState {
  search: string;
  materials: Set<Material>;
  types: Set<RazorType>;
  inStockOnly: boolean;
  sort: SortOption;
}

/**
 * Pure derivation: applies search + material + type + in-stock filters, then sorts.
 * "featured" preserves the catalog's natural order.
 */
export function getVisibleRazors(razors: Razor[], f: FilterState): Razor[] {
  const query = f.search.trim().toLowerCase();

  const filtered = razors.filter((r) => {
    if (query && !`${r.name} ${r.material}`.toLowerCase().includes(query)) {
      return false;
    }
    if (f.materials.size > 0 && !f.materials.has(r.material)) return false;
    if (f.types.size > 0 && !f.types.has(r.type)) return false;
    if (f.inStockOnly && !r.inStock) return false;
    return true;
  });

  switch (f.sort) {
    case "price-asc":
      return [...filtered].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...filtered].sort((a, b) => b.price - a.price);
    case "name":
      return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    case "featured":
    default:
      return filtered;
  }
}

export type ChipKind = "material" | "type" | "inStock";

export interface ActiveChip {
  /** Stable key for React lists. */
  id: string;
  label: string;
  kind: ChipKind;
  /** The filter value to remove (omitted for the singleton in-stock chip). */
  value?: string;
}

/** Builds the removable filter chips shown above the grid, in panel order. */
export function getActiveChips(
  f: Pick<FilterState, "materials" | "types" | "inStockOnly">,
): ActiveChip[] {
  const chips: ActiveChip[] = [];
  f.materials.forEach((m) =>
    chips.push({ id: `material:${m}`, label: m, kind: "material", value: m }),
  );
  f.types.forEach((t) =>
    chips.push({ id: `type:${t}`, label: t, kind: "type", value: t }),
  );
  if (f.inStockOnly) {
    chips.push({ id: "inStock", label: "In stock", kind: "inStock" });
  }
  return chips;
}
