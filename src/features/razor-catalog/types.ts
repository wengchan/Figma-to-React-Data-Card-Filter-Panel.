export type Material =
  | "Chrome"
  | "Gunmetal"
  | "White Chrome"
  | "Rose Gold"
  | "Stainless Steel"
  | "Matte Black";

export type RazorType = "Adjustable" | "Fixed";

export type SortOption = "featured" | "price-asc" | "price-desc" | "name";

export interface Razor {
  id: string;
  name: string;
  /** Finish shown as the card subtitle; also drives the material filter. */
  material: Material;
  type: RazorType;
  price: number;
  inStock: boolean;
}

/**
 * Materials surfaced as filter checkboxes — matches the Figma filter list exactly.
 * Some razors (Stainless Steel, Matte Black finishes) are intentionally not
 * filterable by material, so they only appear when no material filter is active.
 */
export const FILTER_MATERIALS: Material[] = [
  "Chrome",
  "Gunmetal",
  "White Chrome",
  "Rose Gold",
];

export const FILTER_TYPES: RazorType[] = ["Adjustable", "Fixed"];

export const SORT_LABELS: Record<SortOption, string> = {
  featured: "Featured",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  name: "Name",
};
