"use client";

import { cn } from "@/utils";
import { Star, DollarSign, Globe } from "lucide-react";
import { useProducts, type FirebaseProduct } from "@merittdev/sdk";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import {
  findVariantByAttributes,
  getColorStyle,
  getUniqueAttributeValues,
  isColorAttribute,
  getAvailableVariantsForAttribute,
} from "@/utils";

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

  const productRating = 3.4;
  const reviewCount = 3;

  // Extract available attributes from variants
  const availableAttributes =
    product?.variants && product.variants.length > 0
      ? Object.keys(product.variants[0].attributes)
      : [];

  const policies = [
    {
      name: "International delivery",
      icon: Globe,
      description: "Get your order in 2 years",
    },
    {
      name: "Loyalty rewards",
      icon: DollarSign,
      description: "Don't look at other tees",
    },
  ];

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
      <div className="pb-16 pt-6 sm:pb-24">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
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
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">
                  {product?.name}
                </h1>
                <p className="text-xl font-medium text-gray-900">
                  ${selectedVariant?.price || product?.variants[0]?.price || 0}
                </p>
              </div>
              {/* Reviews */}
              <div className="mt-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    {productRating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                  <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <Star
                        key={rating}
                        aria-hidden="true"
                        className={cn(
                          productRating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "size-5 shrink-0"
                        )}
                      />
                    ))}
                  </div>
                  <div
                    aria-hidden="true"
                    className="ml-4 text-sm text-gray-300"
                  >
                    ·
                  </div>
                  <div className="ml-4 flex">
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      See all {reviewCount} reviews
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                {product?.images.map((image, idx) => (
                  <img
                    key={idx}
                    alt={image.alt}
                    src={image.url}
                    className={cn(
                      image.sortOrder
                        ? image.sortOrder === 1
                        : idx === 0
                        ? "lg:col-span-2 lg:row-span-2"
                        : "hidden lg:block",
                      "rounded-lg"
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              <form>
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
                  disabled={!selectedVariant}
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {selectedVariant
                    ? `Add to cart - $${selectedVariant.price}`
                    : Object.keys(selectedAttributes).length > 0
                    ? "Complete selection"
                    : "Select options"}
                </button>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>

                <div
                  dangerouslySetInnerHTML={{
                    __html: product?.description ?? "no description...",
                  }}
                  className="mt-4 space-y-4 text-sm/6 text-gray-500"
                />
              </div>

              {/* Policies */}
              <section aria-labelledby="policies-heading" className="mt-10">
                <h2 id="policies-heading" className="sr-only">
                  Our Policies
                </h2>

                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {policies.map((policy) => (
                    <div
                      key={policy.name}
                      className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                    >
                      <dt>
                        <policy.icon
                          aria-hidden="true"
                          className="mx-auto size-6 shrink-0 text-gray-400"
                        />
                        <span className="mt-4 text-sm font-medium text-gray-900">
                          {policy.name}
                        </span>
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500">
                        {policy.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
