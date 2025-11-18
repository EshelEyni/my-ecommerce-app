import type { FC } from "react";
import type { Product } from "../../../types/Product";

type ProductPreviewProps = {
  product: Product;
};

export const ProductPreview: FC<ProductPreviewProps> = ({ product }) => {
  return (
    <article className="border-2 border-black">
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
