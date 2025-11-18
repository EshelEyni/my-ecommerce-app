import { useEffect, useState } from "react";
import { getById } from "../../services/dataService";
import { useNavigate, useParams } from "react-router-dom";
import type { Product } from "../../types/product";
import { ReviewList } from "./components/ReviewList";

export const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);

  const onGoBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const onLoad = () => {
      if (!id) return;
      const fetchedProdcut = getById(id);
      setProduct(fetchedProdcut);
    };

    onLoad();
  }, [id]);

  if (!product) {
    return (
      <div className="page-wrapper">
        <p className="text-lg text-slate-500">Loading product...</p>
      </div>
    );
  }

  const {
    name,
    price,
    shortDescription,
    thumbnailUrl,
    longDescription,
    category,
    reviews,
  } = product;

  return (
    <div className="page-wrapper">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-lg md:p-8">
        <button
          onClick={onGoBack}
          className="mb-6 inline-flex items-center gap-2rounded-lg bg-slate-200 px-4 py-2text-sm font-medium text-slate-700 transitionhover:bg-slate-300 hover:text-slate-900"
        >
          ← Go Back
        </button>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="shrink-0 md:w-1/2">
            <img
              src={thumbnailUrl}
              alt={name}
              className="h-full w-full rounded-xl object-cover shadow-md"
            />
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <div>
              <p className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                {category}
              </p>
              <h1 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                {name}
              </h1>
            </div>

            <p className="text-sm text-slate-600">{shortDescription}</p>

            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-emerald-600">
                ${price.toFixed(2)}
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
            {longDescription}
          </p>
        </section>

        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
};
