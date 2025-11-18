import { useEffect, useState } from "react";
import type { Product } from "../../types/product";
import { getAll } from "../../services/dataService";
import { SearchBar } from "./components/SearchBar";
import { ProductPreview } from "./components/ProductPreview";

export const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const onLoadProdcuts = () => {
      const fetchProdcuts = getAll(searchTerm);
      setProducts(fetchProdcuts);
    };

    onLoadProdcuts();
  }, [searchTerm]);

  return (
    <section className="page-wrapper flex flex-col items-center justify-start gap-8">
      <SearchBar searchTerm={searchTerm} onChange={onChange} />

      <div className="w-3/4 flex flex-wrap gap-3.5 items-center justify-center">
        {products.map((product) => (
          <ProductPreview key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
