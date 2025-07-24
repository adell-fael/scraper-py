"use client";

import { FirebaseCategory, useCategories } from "@merittdev/sdk";
import { useCallback, useEffect, useState } from "react";

export default function Example() {
  const [categories, setCategories] = useState<FirebaseCategory[] | null>(null);

  const { fetchCategories } = useCategories();

  const loadCategories = useCallback(async () => {
    try {
      const result = await fetchCategories();
      if (result.error) {
        throw new Error(result.error);
      } else {
        setCategories(result.categories || []);
      }
    } catch {
      console.error("Failed to load categories");
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
    <>
      <div className="grid min-h-full grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
        {categories &&
          categories.map((category, index) => (
            <div key={category.id} className="relative flex">
              <img
                alt={category.name}
                src={category.cover}
                className="absolute inset-0 size-full object-cover"
              />
              <div className="relative flex w-full flex-col items-start justify-end bg-black/40 p-8 sm:p-12">
                <h2 className="text-lg font-medium text-white/75">
                  {category.name}
                </h2>
                <p className="mt-1 text-2xl font-medium text-white">
                  {category.description}
                </p>
                <a
                  href="#"
                  className="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
                >
                  Shop now
                </a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
