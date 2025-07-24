"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Star, X } from "lucide-react";
import { cn } from "@/utils";

const ProductQuickView = () => {
  const product = {
    name: "Zip Tote Basket",
    price: "$220",
    rating: 3.9,
    href: "#",
    description:
      "The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-04.jpg",
    imageAlt: "Back angled view with bag open and handles to the side.",
    colors: [
      {
        id: "washed-black",
        name: "Washed Black",
        classes: "bg-gray-700 checked:outline-gray-700",
      },
      {
        id: "white",
        name: "White",
        classes: "bg-white checked:outline-gray-400",
      },
      {
        id: "washed-gray",
        name: "Washed Gray",
        classes: "bg-gray-500 checked:outline-gray-500",
      },
    ],
  };

  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 hidden bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:block"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <DialogPanel
            transition
            className="flex w-full transform text-left text-base transition data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:my-8 md:max-w-2xl md:px-4 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95 lg:max-w-4xl"
          >
            <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
              >
                <span className="sr-only">Close</span>
                <X aria-hidden="true" className="size-6" />
              </button>

              <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-4 lg:col-span-5">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
                  />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                  <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                    {product.name}
                  </h2>

                  <section
                    aria-labelledby="information-heading"
                    className="mt-3"
                  >
                    <h3 id="information-heading" className="sr-only">
                      Product information
                    </h3>

                    <p className="text-2xl text-gray-900">{product.price}</p>

                    {/* Reviews */}
                    <div className="mt-3">
                      <h4 className="sr-only">Reviews</h4>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <Star
                              key={rating}
                              aria-hidden="true"
                              className={cn(
                                product.rating > rating
                                  ? "text-gray-400"
                                  : "text-gray-200",
                                "size-5 shrink-0"
                              )}
                            />
                          ))}
                        </div>
                        <p className="sr-only">
                          {product.rating} out of 5 stars
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="sr-only">Description</h4>
                      <p className="text-sm text-gray-700">
                        {product.description}
                      </p>
                    </div>
                  </section>

                  <section aria-labelledby="options-heading" className="mt-6">
                    <h3 id="options-heading" className="sr-only">
                      Product options
                    </h3>

                    <form>
                      {/* Colors */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-600">
                          Color
                        </h4>

                        <fieldset aria-label="Choose a color" className="mt-2">
                          <div className="flex items-center gap-x-3">
                            {product.colors.map((color) => (
                              <div
                                key={color.id}
                                className="flex rounded-full outline -outline-offset-1 outline-black/10"
                              >
                                <input
                                  defaultValue={color.id}
                                  defaultChecked={color === product.colors[0]}
                                  name="color"
                                  type="radio"
                                  aria-label={color.name}
                                  className={cn(
                                    color.classes,
                                    "size-8 appearance-none rounded-full forced-color-adjust-none checked:outline checked:outline-2 checked:outline-offset-2 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px]"
                                  )}
                                />
                              </div>
                            ))}
                          </div>
                        </fieldset>
                      </div>

                      <div className="mt-6">
                        <button
                          type="submit"
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                        >
                          Add to bag
                        </button>
                      </div>

                      <p className="absolute left-4 top-4 text-center sm:static sm:mt-6">
                        <a
                          href={product.href}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          View full details
                        </a>
                      </p>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductQuickView;
