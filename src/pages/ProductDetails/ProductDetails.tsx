import { useEffect, useState } from "react";
import type { Product } from "../../types/Product";
import { getById } from "../../services/dataService";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);

  console.log(product);

  useEffect(() => {
    const onLoad = () => {
      if (!id) return;
      const fetchedProdcut = getById(id);
      setProduct(fetchedProdcut);
    };

    onLoad();
  }, [id]);

  return <div>ProductDetails</div>;
};
