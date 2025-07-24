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
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Shop by Collection
        </h2>
        <p className="mt-4 text-base text-gray-500">
          Each season, we collaborate with world-class designers to create a
          collection inspired by the natural world.
        </p>

        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {categories &&
            categories.map((category) => (
              <a
                key={category.id}
                href={`#/category/${category.slug}`}
                className="group block"
              >
                <img
                  alt={category.name}
                  src={category.cover}
                  className="aspect-[3/2] w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-[5/6]"
                />
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {category.description}
                </p>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
