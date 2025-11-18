import products from "../assets/products.json";
import type { Product } from "../types/Product";

export const getAll = () => {
  return products;
};

export const getById = (id: string) => {
  return (products as Product[]).find((product) => product.id === id);
};
