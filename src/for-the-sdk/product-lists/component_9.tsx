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
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products?.map((product) => (
            <a key={product.id} href="#" className="group text-sm">
              <img
                alt={product.images[0]?.alt}
                src={product.images[0]?.url}
                className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
              />
              <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
              <p className="italic text-gray-500">{product.variants[0]?.name}</p>
              <p className="mt-2 font-medium text-gray-900">${product.variants[0]?.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;