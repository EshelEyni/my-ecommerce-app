import products from "../assets/products.json";
import type { Product } from "../types/Product";

export const getAll = (): Product[] => {
  return products;
};

export const getById = (id: string): Product | null => {
  const fetchedProduct = (products as Product[]).find(
    (product) => product.id === id
  );

  if (!fetchedProduct) return null;
  return fetchedProduct;
};
