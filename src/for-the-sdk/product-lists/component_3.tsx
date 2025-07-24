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
      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending products</h2>
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="relative mt-8">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
            >
              {products?.map((product) => (
                <li key={product.id} className="inline-flex w-64 flex-col text-center lg:w-auto">
                  <div className="group relative">
                    <img
                      alt={product.images[0]?.alt}
                      src={product.images[0]?.url}
                      className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
                    />
                    <div className="mt-6">
                      <p className="text-sm text-gray-500">{product.variants[0]?.name}</p>
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <Link href={product.id}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-gray-900">{product.variants[0]?.price}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex px-4 sm:hidden">
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductList;