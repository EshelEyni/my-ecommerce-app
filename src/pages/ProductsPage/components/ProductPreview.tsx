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
    <article
      onClick={onClickPreview}
      className="
        group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md 
        transition hover:shadow-xl hover:-translate-y-1
        border border-slate-200
      "
    >
      <div className="h-48 w-full overflow-hidden">
        <img
          src={product.thumbnailUrl}
          alt={product.name}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
          {product.category}
        </p>

        <h2 className="text-lg font-bold text-slate-900 line-clamp-1">
          {product.name}
        </h2>

        <p className="text-sm text-slate-600 line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-emerald-600">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </article>
  );
};
