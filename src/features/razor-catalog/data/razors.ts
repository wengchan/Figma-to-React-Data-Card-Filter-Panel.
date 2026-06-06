import type { Razor } from "../types";

/**
 * Catalog data (no API — static mock).
 *
 * The first six entries are the cards shown in the Figma frame, with their
 * exact names / finishes / prices. The remaining six are added to reach the
 * "12 razors" total shown in the design, and are chosen to give every filter
 * something to match (incl. Rose Gold and out-of-stock items so the
 * "In stock only" toggle is meaningful).
 */
export const RAZORS: Razor[] = [
  // --- Shown in the Figma frame ---
  {
    id: "6s-adjustable",
    name: "Rockwell 6S Adjustable",
    material: "Stainless Steel",
    type: "Adjustable",
    price: 120,
    inStock: true,
  },
  {
    id: "6c",
    name: "Rockwell 6C",
    material: "Chrome",
    type: "Adjustable",
    price: 80,
    inStock: true,
  },
  {
    id: "t2",
    name: "Rockwell T2",
    material: "Gunmetal",
    type: "Adjustable",
    price: 50,
    inStock: true,
  },
  {
    id: "r1",
    name: "Rockwell R1",
    material: "White Chrome",
    type: "Fixed",
    price: 40,
    inStock: true,
  },
  {
    id: "model-t",
    name: "Rockwell Model T",
    material: "Matte Black",
    type: "Fixed",
    price: 150,
    inStock: true,
  },
  {
    id: "2c",
    name: "Rockwell 2C",
    material: "Chrome",
    type: "Fixed",
    price: 30,
    inStock: true,
  },

  // --- Added to reach 12 total ---
  {
    id: "6s-rose-gold",
    name: "Rockwell 6S Rose Gold",
    material: "Rose Gold",
    type: "Adjustable",
    price: 130,
    inStock: false,
  },
  {
    id: "r1-rose-gold",
    name: "Rockwell R1 Rose Gold",
    material: "Rose Gold",
    type: "Fixed",
    price: 45,
    inStock: true,
  },
  {
    id: "6c-gunmetal",
    name: "Rockwell 6C Gunmetal",
    material: "Gunmetal",
    type: "Adjustable",
    price: 85,
    inStock: false,
  },
  {
    id: "t3",
    name: "Rockwell T3",
    material: "White Chrome",
    type: "Adjustable",
    price: 60,
    inStock: true,
  },
  {
    id: "2c-gunmetal",
    name: "Rockwell 2C Gunmetal",
    material: "Gunmetal",
    type: "Fixed",
    price: 35,
    inStock: true,
  },
  {
    id: "model-s",
    name: "Rockwell Model S",
    material: "Chrome",
    type: "Fixed",
    price: 140,
    inStock: false,
  },
];
