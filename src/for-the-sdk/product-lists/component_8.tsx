"use client";
import { FirebaseProduct, useProducts } from "@merittdev/sdk";
import { StarIcon } from "@heroicons/react/20/solid";
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";
import { cn } from "@/utils";

const ProductList = () => {
  const [products, setProducts] = useState<FirebaseProduct[] | null>();

  const { fetchProducts } = useProducts();

  const loadProduct = useCallback(async () => {
    try {
      const result = await fetchProducts();
      setProducts(result.products);

      if (result.error) {
        toast.error(
          typeof result.error === "string"
            ? result.error
            : "Products Loading Failed"
        );
      }
    } catch {
      toast.error("Failed to load products");
    }
  }, [fetchProducts]);

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

  const productRating = 3.6;
  const productReviewCount = 4;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products?.map((product) => (
            <div
              key={product.id}
              className="group relative border-b border-r border-gray-200 p-4 sm:p-6"
            >
              <img
                alt={product.images[0]?.alt}
                src={product.images[0]?.url}
                className="aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
              />
              <div className="pb-4 pt-10 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.id}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">{productRating} out of 5 stars</p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={cn(
                          productRating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "size-5 shrink-0"
                        )}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {productReviewCount} reviews
                  </p>
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">
                  {product.variants[0]?.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
