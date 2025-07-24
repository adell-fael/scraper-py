"use client";
import { FirebaseProduct, useProducts } from "@merittdev/sdk";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";

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

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Favorites</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
          {products?.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.images[0]?.alt}
                src={product.images[0]?.url}
                className="h-96 w-full rounded-lg object-cover group-hover:opacity-75 sm:aspect-[2/3] sm:h-auto"
              />
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                <Link href={product.slug}>
                  <span className="absolute inset-0" />
                  {product.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.variants[0]?.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all favorites
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductList;