import { useEffect, useState } from "react";
import { getById } from "../../services/dataService";
import { useParams } from "react-router-dom";
import type { Product } from "../../types/product";
import { ReviewList } from "./components/ReviewList";
import { GoHomeButton } from "./components/GoHomeButton";

export const ProductDetails = () => {
  const params = useParams();

  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const onLoad = async () => {
      if (!id) return setProduct(null);
      setIsLoading(true);
      const fetchedProdcut = await getById(id);
      setProduct(fetchedProdcut);
      setIsLoading(false);
    };

    onLoad();
  }, [id]);

  const isInValidProductId = id && product === null && !isLoading;
  const isValidProductId = id && product !== null && !isLoading;

  return (
    <div className="page-wrapper items-start">
      <div className="mx-auto max-w-4xl w-full rounded-2xl bg-white p-6 shadow-lg md:p-8">
        {isLoading && (
          <p className="text-lg text-slate-500 mt-2 mx-auto w-fit">
            Loading product...
          </p>
        )}

        {isInValidProductId && (
          <div className="flex flex-col items-center gap-6">
            <p className="text-lg text-slate-500 mt-2 mx-auto w-fit">
              Product not found.
            </p>

            <GoHomeButton />
          </div>
        )}

        {isValidProductId && (
          <>
            <GoHomeButton />
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="shrink-0 md:w-1/2">
                <img
                  src={product.thumbnailUrl}
                  alt={product.name}
                  className="h-full w-full rounded-xl object-cover shadow-md"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4">
                <div>
                  <p className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                    {product.category}
                  </p>
                  <h1 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                    {product.name}
                  </h1>
                </div>

                <p className="text-sm text-slate-600">
                  {product.shortDescription}
                </p>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-emerald-600">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <hr className="my-8 border-slate-200" />

            <section>
              <h2 className="mb-2 text-xl font-semibold text-slate-900">
                Description
              </h2>
              <p className="text-sm leading-relaxed text-slate-700">
                {product.longDescription}
              </p>
            </section>

            <ReviewList reviews={product.reviews} />
          </>
        )}
      </div>
    </div>
  );
};
