"use client";
import { FirebaseProduct, useProducts } from "@merittdev/sdk";
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
    } catch {
      toast.error("Failed to load products");
    }
  }, [fetchProducts]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-medium text-gray-900">Customers also viewed</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {products?.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative">
                <img
                  alt={product.images[0]?.alt}
                  src={product.images[0]?.url}
                  className="aspect-[4/3] w-full rounded-lg bg-gray-100 object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100"
                >
                  <div className="w-full rounded-md bg-white/75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                    View Product
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p>{product.variants[0]?.price}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;