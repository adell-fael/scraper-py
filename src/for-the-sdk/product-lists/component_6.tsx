"use client";
import {
  FirebaseProduct,
  ProductImage,
  ProductVariant,
  useProducts,
} from "@merittdev/sdk";
import { useState, useCallback, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState<FirebaseProduct[] | null>(null);

  const { fetchProducts } = useProducts();

  const loadProducts = useCallback(async () => {
    try {
      const result = await fetchProducts();
      setProducts(result.products);
    } catch (error) {
      console.error("Failed to load products", error);
    }
  }, [fetchProducts]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => (
            <a key={product.id} href="#" className="group">
              <img
                alt={product.images[0]?.alt}
                src={product.images[0]?.url}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${product.variants[0]?.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
