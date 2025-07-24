"use client";

import { FirebaseCategory, useCategories } from "@merittdev/sdk";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

const CategoryPreview = () => {
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
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Shop by Category
          </h2>
          <a
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        {/* Dynamic Categories */}
        {categories && categories.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
            {categories.slice(0, 3).map((category, index) => (
              <div
                key={category.id}
                className={`group relative aspect-[2/1] overflow-hidden rounded-lg ${
                  index === 0
                    ? "sm:row-span-2 sm:aspect-square"
                    : "sm:aspect-auto"
                }`}
              >
                <img
                  alt={category.name}
                  src={category.cover}
                  className="absolute size-full object-cover group-hover:opacity-75"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <Link href={`/category/${category.slug}`}>
                        <span className="absolute inset-0" />
                        {category.name}
                      </Link>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 sm:hidden">
          <Link
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPreview;
