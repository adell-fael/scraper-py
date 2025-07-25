"use client";
import { FirebaseProduct, useProducts } from "@merittdev/sdk";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";


const ProductList = () => {
  const [products, setProducts] = useState<FirebaseProduct[] | null>(null);
  const { fetchProducts } = useProducts();

  const loadProducts = useCallback(async () => {
    try {
      const result = await fetchProducts();
      if (result.error) {
        toast.error(
          typeof result.error === "string"
            ? result.error
            : "Failed to load products"
        );
      } else {
        setProducts(result.products);
      }
    } catch (error) {
      toast.error("Failed to load products");
    }
  }, [fetchProducts]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.images[0]?.alt}
                src={product.images[0]?.url}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/${product.slug}`}>
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.variants[0]?.name}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.variants[0]?.price}
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