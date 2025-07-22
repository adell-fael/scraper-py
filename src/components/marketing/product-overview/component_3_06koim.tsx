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
import { Check, HelpCircle, Star, CheckCircleIcon, Shield } from "lucide-react";
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

  const reviews = { average: 4, totalCount: 1624 };

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
                "group relative flex items-center rounded-lg border border-gray-300 bg-white p-4 has-[:disabled]:border-gray-400 has-[:disabled]:bg-gray-200 has-[:disabled]:opacity-25 has-[:checked]:outline has-[:focus-visible]:outline has-[:checked]:outline-2 has-[:focus-visible]:outline-[3px] has-[:checked]:-outline-offset-2 has-[:focus-visible]:-outline-offset-1 has-[:checked]:outline-indigo-600",
                !available && "opacity-50 cursor-not-allowed",
                isSelected && "border-indigo-600"
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

              <div className={cn("flex-1")}>
                <span className="block text-base font-medium text-gray-900">
                  {value}
                </span>
              </div>
              <CheckCircleIcon
                aria-hidden="true"
                className="invisible size-5 text-indigo-600 group-has-[:checked]:visible"
              />
            </label>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
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

          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {product?.name}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">
                ${selectedVariant?.price || product?.variants[0]?.price || 0}
              </p>

              <div className="ml-4 border-l border-gray-300 pl-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <Star
                          key={rating}
                          aria-hidden="true"
                          className={cn(
                            reviews.average > rating
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "size-5 shrink-0"
                          )}
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                  </div>
                  <p className="ml-2 text-sm text-gray-500">
                    {reviews.totalCount} reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">
                {product?.description ?? "no description"}
              </p>
            </div>

            <div className="mt-6 flex items-center">
              <Check
                aria-hidden="true"
                className="size-5 shrink-0 text-green-500"
              />
              <p className="ml-2 text-sm text-gray-500">
                In stock and ready to ship
              </p>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
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

        {/* Product form */}
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            <form>
              {/* Dynamic attribute pickers */}
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

              <div className="mt-4">
                <a
                  href="#"
                  className="group inline-flex text-sm text-gray-500 hover:text-gray-700"
                >
                  <span>What size should I buy?</span>
                  <HelpCircle
                    aria-hidden="true"
                    className="ml-2 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </a>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Add to bag
                </button>
              </div>
              <div className="mt-6 text-center">
                <a href="#" className="group inline-flex text-base font-medium">
                  <Shield
                    aria-hidden="true"
                    className="mr-2 size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                  <span className="text-gray-500 hover:text-gray-700">
                    Lifetime Guarantee
                  </span>
                </a>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
