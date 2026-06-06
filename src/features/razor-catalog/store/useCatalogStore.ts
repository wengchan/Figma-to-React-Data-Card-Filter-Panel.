import { useMemo } from "react";
import { create } from "zustand";

import { RAZORS } from "../data/razors";
import {
  getActiveChips,
  getVisibleRazors,
  type ActiveChip,
} from "../lib/selectors";
import type { Material, RazorType, SortOption } from "../types";

interface CatalogState {
  // --- real component state ---
  search: string;
  materials: Set<Material>;
  types: Set<RazorType>;
  inStockOnly: boolean;
  sort: SortOption;
  selectedRazorId: string | null;

  // --- actions ---
  setSearch: (value: string) => void;
  toggleMaterial: (material: Material) => void;
  toggleType: (type: RazorType) => void;
  setInStockOnly: (value: boolean) => void;
  setSort: (sort: SortOption) => void;
  /** Toggles selection — clicking the selected razor again clears it. */
  selectRazor: (id: string) => void;
  /** Removes the filter behind a chip's "✕". */
  removeChip: (chip: ActiveChip) => void;
  /** "Clear all" — resets filters + search + in-stock (keeps sort & selection). */
  clearAll: () => void;
}

/** Immutably toggles a value's membership in a Set (Zustand needs a new ref). */
function toggleInSet<T>(source: Set<T>, value: T): Set<T> {
  const next = new Set(source);
  if (next.has(value)) {
    next.delete(value);
  } else {
    next.add(value);
  }
  return next;
}

export const useCatalogStore = create<CatalogState>((set) => ({
  search: "",
  materials: new Set<Material>(),
  types: new Set<RazorType>(),
  inStockOnly: false,
  sort: "featured",
  selectedRazorId: null,

  setSearch: (value) => set({ search: value }),
  toggleMaterial: (material) =>
    set((s) => ({ materials: toggleInSet(s.materials, material) })),
  toggleType: (type) => set((s) => ({ types: toggleInSet(s.types, type) })),
  setInStockOnly: (value) => set({ inStockOnly: value }),
  setSort: (sort) => set({ sort }),
  selectRazor: (id) =>
    set((s) => ({ selectedRazorId: s.selectedRazorId === id ? null : id })),
  removeChip: (chip) =>
    set((s) => {
      switch (chip.kind) {
        case "material":
          return { materials: toggleInSet(s.materials, chip.value as Material) };
        case "type":
          return { types: toggleInSet(s.types, chip.value as RazorType) };
        case "inStock":
          return { inStockOnly: false };
        default:
          return {};
      }
    }),
  clearAll: () =>
    set({
      search: "",
      materials: new Set<Material>(),
      types: new Set<RazorType>(),
      inStockOnly: false,
    }),
}));

/** Derived: the filtered + sorted razors for the current filter state. */
export function useVisibleRazors() {
  const search = useCatalogStore((s) => s.search);
  const materials = useCatalogStore((s) => s.materials);
  const types = useCatalogStore((s) => s.types);
  const inStockOnly = useCatalogStore((s) => s.inStockOnly);
  const sort = useCatalogStore((s) => s.sort);

  return useMemo(
    () => getVisibleRazors(RAZORS, { search, materials, types, inStockOnly, sort }),
    [search, materials, types, inStockOnly, sort],
  );
}

/** Derived: the removable active-filter chips. */
export function useActiveChips() {
  const materials = useCatalogStore((s) => s.materials);
  const types = useCatalogStore((s) => s.types);
  const inStockOnly = useCatalogStore((s) => s.inStockOnly);

  return useMemo(
    () => getActiveChips({ materials, types, inStockOnly }),
    [materials, types, inStockOnly],
  );
}
