import { Suspense } from "react";

import Reviews from "@/component/Review";
import Products from "@/component/Products";

export default function ProductReviews() {
  return (
    <div>
      <h1>Products Reviews</h1>
      <Suspense fallback={<p>Loading products lists.....</p>}>
        <Products />
      </Suspense>

      <Suspense fallback={<p>Loading review Lists...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
