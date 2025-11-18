import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";

type Route = {
  path: string;
  element: React.ReactElement;
};

export const routes: Route[] = [
  {
    path: "/",
    element: <ProductsPage />,
  },
  {
    path: "product/:id",
    element: <ProductDetails />,
  },
];
