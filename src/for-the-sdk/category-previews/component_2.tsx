"use client";

import { FirebaseCategory, useCategories } from "@merittdev/sdk";
import { useCallback, useEffect, useState } from "react";

const Example = () => {
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
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {categories?.map((category) => (
              <div key={category.id} className="group relative">
                <img
                  alt={category.name}
                  src={category.cover}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={`/category/${category.slug}`}>
                    <span className="absolute inset-0" />
                    {category.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
