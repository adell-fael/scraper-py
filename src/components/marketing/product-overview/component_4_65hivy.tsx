"use client";

import {
  cn,
  findVariantByAttributes,
  getAvailableVariantsForAttribute,
  getColorStyle,
  getUniqueAttributeValues,
  isColorAttribute,
} from "@/utils";
import { FirebaseProduct, useProducts } from "@merittdev/sdk";
import { DollarSign, Globe, Star } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";

const ProductOverview = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<FirebaseProduct | null>();

  const [selectedAttributes, setSelectedAttributes] = useState<
    Record<string, string>
  >({});
  const [selectedVariant, setSelectedVariant] = useState<
    FirebaseProduct["variants"][0] | null
  >(null);

  const { fetchProductBySlug } = useProducts();

  const loadProduct = useCallback(async () => {
    try {
      const result = await fetchProductBySlug(slug);
      setProduct(result);

      // Set initial variant selection - start with no attributes selected
      if (result?.variants && result.variants.length > 0) {
        setSelectedAttributes({});
        setSelectedVariant(null);
      }
    } catch {
      toast.error("Failed to load products");
    }
  }, [fetchProductBySlug]);

  // Update selected variant when attributes change
  useEffect(() => {
    if (product && Object.keys(selectedAttributes).length > 0) {
      const variant = findVariantByAttributes(
        product.variants,
        selectedAttributes
      );
      setSelectedVariant(variant || null);
    } else if (product && Object.keys(selectedAttributes).length === 0) {
      // If no attributes are selected, clear the selected variant
      setSelectedVariant(null);
    }
  }, [selectedAttributes, product]);

  /**
   * Load products with current filters
   */
  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

  const handleAttributeChange = (attribute: string, value: string) => {
    setSelectedAttributes((prev) => {
      // If the same value is already selected, unselect it
      if (prev[attribute] === value) {
        const newAttributes = { ...prev };
        delete newAttributes[attribute];

        return newAttributes;
      }

      // Otherwise, select the new value
      const newAttributes = {
        ...prev,
        [attribute]: value,
      };

      return newAttributes;
    });
  };

  const reviews = { href: "#", average: 4, totalCount: 117 };
  const highlights = [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ];
  const details =
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.';

  // Extract available attributes from variants
  const availableAttributes =
    product?.variants && product.variants.length > 0
      ? Object.keys(product.variants[0].attributes)
      : [];

  // Simple attribute renderer component
  const AttributeRenderer = ({
    attribute,
    values,
    selectedValue,
    onValueChange,
    isAvailable,
  }: {
    attribute: string;
    values: string[];
    selectedValue: string;
    onValueChange: (value: string) => void;
    isAvailable: (value: string) => boolean;
  }) => {
    const isColor = isColorAttribute(attribute);

    if (isColor) {
      // Color picker layout
      return (
        <div className="flex items-center gap-x-3">
          {values.map((value, idx) => {
            const available = isAvailable(value);
            const isSelected = selectedValue === value;
            return (
              <div
                key={`${attribute}-${value}-${idx}`}
                className="flex rounded-full outline -outline-offset-1 outline-black/10"
              >
                <input
                  value={value}
                  checked={isSelected}
                  onChange={(e) => onValueChange(e.target.value)}
                  name={attribute}
                  type="checkbox"
                  disabled={!available}
                  aria-label={value}
                  style={getColorStyle(value)}
                  className={cn(
                    "size-8 appearance-none rounded-full forced-color-adjust-none checked:outline checked:outline-2 checked:outline-offset-2 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px]",
                    !available && "opacity-50 cursor-not-allowed",
                    isSelected && "ring-2 ring-indigo-600 ring-offset-2"
                  )}
                />
              </div>
            );
          })}
        </div>
      );
    }

    // Default checkbox layout for all other attributes
    return (
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {values.map((value, idx) => {
          const available = isAvailable(value);
          const isSelected = selectedValue === value;
          return (
            <label
              key={`${attribute}-${value}-${idx}`}
              aria-label={value}
              className={cn(
                "group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-[:checked]:border-indigo-600 has-[:disabled]:border-gray-400 has-[:checked]:bg-indigo-600 has-[:disabled]:bg-gray-200 has-[:disabled]:opacity-25 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-indigo-600",
                !available && "opacity-50 cursor-not-allowed",
                isSelected && "border-indigo-600 bg-indigo-600"
              )}
            >
              <input
                value={value}
                checked={isSelected}
                onChange={(e) => onValueChange(e.target.value)}
                name={attribute}
                type="checkbox"
                disabled={!available}
                className="absolute inset-0 appearance-none focus:outline focus:outline-0 disabled:cursor-not-allowed"
              />
              <span
                className={cn(
                  "text-sm font-medium uppercase",
                  isSelected ? "text-white" : "text-gray-900"
                )}
              >
                {value}
              </span>
            </label>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex items-center">
                <Link
                  href={"#"}
                  className="mr-4 text-sm font-medium text-gray-900"
                >
                  products
                </Link>
                <svg
                  viewBox="0 0 6 20"
                  aria-hidden="true"
                  className="h-5 w-auto text-gray-300"
                >
                  <path
                    d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <Link
                href={"#"}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product?.name}
              </Link>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <img
            alt={product?.images[0].alt}
            src={product?.images[0].url}
            className="row-span-2 aspect-[3/4] size-full rounded-lg object-cover max-lg:hidden"
          />
          <img
            alt={product?.images[1].alt}
            src={product?.images[1].url}
            className="col-start-2 aspect-[3/2] size-full rounded-lg object-cover max-lg:hidden"
          />
          <img
            alt={product?.images[2].alt}
            src={product?.images[2].url}
            className="col-start-2 row-start-2 aspect-[3/2] size-full rounded-lg object-cover max-lg:hidden"
          />
          <img
            alt={product?.images[0].alt}
            src={product?.images[0].url}
            className="row-span-2 aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-[3/4]"
          />
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product?.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              ${selectedVariant?.price || product?.variants[0]?.price || 0}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      aria-hidden="true"
                      className={cn(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "size-5 shrink-0"
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Enhanced Dynamic attribute pickers */}
              {availableAttributes.map((attribute, idx) => {
                const attributeValues = getUniqueAttributeValues(
                  product?.variants || [],
                  attribute
                );

                return (
                  <div key={attribute + idx} className="mt-8">
                    <div className="flex items-center justify-between">
                      <h2 className="text-sm font-medium text-gray-900 capitalize">
                        {attribute}
                      </h2>
                      {attribute.toLowerCase().includes("size") && (
                        <a
                          href="#"
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          See sizing chart
                        </a>
                      )}
                    </div>

                    <fieldset
                      aria-label={`Choose a ${attribute}`}
                      className="mt-2"
                    >
                      <AttributeRenderer
                        attribute={attribute}
                        values={attributeValues}
                        selectedValue={selectedAttributes[attribute] || ""}
                        onValueChange={(value) =>
                          handleAttributeChange(attribute, value)
                        }
                        isAvailable={(value) =>
                          getAvailableVariantsForAttribute(
                            product?.variants || [],
                            attribute,
                            value,
                            selectedAttributes
                          ).length > 0
                        }
                      />
                    </fieldset>
                  </div>
                );
              })}
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {product?.description ?? "no description"}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductOverview;
