import { useEffect, useState } from "react";
import type { Product } from "../../types/Product";
import { getAll } from "../../services/dataService";

export const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const onLoad = () => {
      const fetchProdcuts = getAll();
      setProducts(fetchProdcuts);
    };

    onLoad();
  }, []);

console.log(products);


  return <div>ProductsPage</div>;
};
