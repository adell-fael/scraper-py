"use client";

import { FirebaseCategory, useCategories } from "@merittdev/sdk";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

export default function Example() {
  const [categories, setCategories] = useState<FirebaseCategory[] | null>(null);

  const { fetchCategories } = useCategories();

  const loadCategories = useCallback(async () => {
    try {
      const result = await fetchCategories();
      if (result.error) {
        toast.error(
          typeof result.error === "string"
            ? result.error
            : "Categories Loading Failed"
        );
      } else {
        setCategories(result.categories || []);
      }
    } catch {
      toast.error("Failed to load categories");
    }
  }, [fetchCategories]);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  if (!categories) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
          <p className="text-center text-gray-500">Loading categories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-2 grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {categories?.map((category) => (
            <div
              key={category.id}
              className="relative overflow-hidden rounded-lg shadow-lg lg:h-96"
            >
              <div className="absolute inset-0">
                <img
                  src={
                    category.cover ||
                    "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-01-featured-collection.jpg"
                  }
                  alt={category.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                aria-hidden="true"
                className="relative h-48 w-full lg:h-0 lg:w-0 lg:hidden"
              />
              <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black/75 p-6 backdrop-blur backdrop-filter flex flex-col justify-between h-48 lg:h-full">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {category.name}
                  </h2>
                  <p className="mt-1 text-sm text-gray-300">
                    {category.description}
                  </p>
                </div>
                <a
                  href={`/category/${category.slug}`}
                  className="mt-4 inline-block rounded-md border border-white/25 px-4 py-3 text-base font-medium text-white hover:bg-white/10 text-center"
                >
                  View the collection
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
