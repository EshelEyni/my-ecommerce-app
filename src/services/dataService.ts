import products from "../assets/products.json";
import type { Product } from "../types/product";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const DELAY_MS = 2000;

export const getAll = async (searchTerm: string): Promise<Product[]> => {
  await delay(DELAY_MS);

  if (!searchTerm) return products as Product[];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return filteredProducts as Product[];
};

export const getById = async (id: string): Promise<Product | null> => {
  await delay(DELAY_MS);

  const fetchedProduct = (products as Product[]).find(
    (product) => product.id === id
  );

  return fetchedProduct ?? null;
};
