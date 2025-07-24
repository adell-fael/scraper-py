"use client";
import { FirebaseProduct, useProducts } from "@merittdev/sdk";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";

const ProductList = () => {
  const [products, setProducts] = useState<FirebaseProduct[] | null>(null);

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

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Trending products
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:gap-x-8">
          {products?.map((product) => (
            <div key={product.id} className="group relative">
              <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                <img
                  alt={product.images[0]?.alt}
                  src={product.images[0]?.url}
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <Link href={product.slug}>
                  <span className="absolute inset-0" />
                  {product.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {product.variants[0]?.name}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                ${product.variants[0]?.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
