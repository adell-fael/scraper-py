"use client";
import {
  FirebaseProduct,
  ProductVariant,
  ProductImage,
  useProducts,
} from "@merittdev/sdk";
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";

const ProductList = () => {
  const [products, setProducts] = useState<FirebaseProduct[] | null>(null);

  const { fetchProducts } = useProducts();

  const loadProducts = useCallback(async () => {
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
    loadProducts();
  }, [loadProducts]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products?.map((product) => (
            <a key={product.id} href="#" className="group">
              <img
                alt={product.images[0]?.alt}
                src={product.images[0]?.url}
                className="aspect-square w-full overflow-hidden rounded-lg object-cover group-hover:opacity-75 sm:aspect-[2/3]"
              />
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{product.name}</h3>
                <p>{product.variants[0]?.price}</p>
              </div>
              <p className="mt-1 text-sm italic text-gray-500">
                {product.variants[0]?.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
