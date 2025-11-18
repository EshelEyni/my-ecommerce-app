import products from "../assets/products.json";
import type { Product } from "../types/product";

export const getAll = (searchTerm: string): Product[] => {
  if (!searchTerm) return products as Product[];
  const filteredProducts = products.filter((product) =>
    product.name.includes(searchTerm)
  );
  return filteredProducts as Product[];
};

export const getById = (id: string): Product | null => {
  const fetchedProduct = (products as Product[]).find(
    (product) => product.id === id
  );

  if (!fetchedProduct) return null;
  return fetchedProduct;
};
