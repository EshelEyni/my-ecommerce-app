import type { FC } from "react";
import type { Product } from "../../../types/Product";
import { useNavigate } from "react-router-dom";

type ProductPreviewProps = {
  product: Product;
};

export const ProductPreview: FC<ProductPreviewProps> = ({ product }) => {
  const navigate = useNavigate();

  const onClickPreview = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <article className="border-2 border-black cursor-pointer" onClick={onClickPreview}>
      <img src={product.thumbnailUrl} alt={`${product.name} thumbnail`} />
      <div className="p-4">
        <h3>{`id: ${product.id}`}</h3>
        <h2>{product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.shortDescription}</p>
      </div>
    </article>
  );
};
