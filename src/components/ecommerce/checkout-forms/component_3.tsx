import { AppleIcon } from "lucide-react";
import React from "react";

const CheckoutForm: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Women's Basic Tee",
      href: "#",
      price: "$32.00",
      color: "Gray",
      size: "S",
      imageSrc:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/checkout-page-05-product-01.jpg",
      imageAlt: "Front of women's basic tee in heather gray.",
    },
    {
      id: 2,
      name: "Women's Artwork Tee",
      href: "#",
      price: "$36.00",
      color: "Peach",
      size: "S",
      imageSrc:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/checkout-page-05-product-02.jpg",
      imageAlt:
        "Front of women's artwork tee in peach color with white and red dots forming an isometric cube on the front.",
    },
    {
      id: 3,
      name: "Men's Artwork Tee",
      href: "#",
      price: "$36.00",
      color: "Forest",
      size: "L",
      imageSrc:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/checkout-page-05-product-03.jpg",
      imageAlt:
        "Front of men's artwork tee in dark green with arch-shaped gradient on front.",
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8 xl:px-2 xl:pt-14">
        <h1 className="sr-only">Checkout</h1>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="sr-only">Order summary</h2>

            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {products.map((product) => (
                  <li key={product.id} className="flex space-x-6 py-6">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="size-24 flex-none rounded-md bg-gray-100 object-cover"
                    />
                    <div className="flex-auto">
                      <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                        <div className="flex-auto space-y-1 text-sm font-medium">
                          <h3 className="text-gray-900">
                            <a href={product.href}>{product.name}</a>
                          </h3>
                          <p className="text-gray-900">{product.price}</p>
                          <p className="hidden text-gray-500 sm:block">
                            {product.color}
                          </p>
                          <p className="hidden text-gray-500 sm:block">
                            {product.size}
                          </p>
                        </div>
                        <div className="flex flex-none space-x-4">
                          <button
                            type="button"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Edit
                          </button>
                          <div className="flex border-l border-gray-300 pl-4">
                            <button
                              type="button"
                              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-gray-900">$104.00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Taxes</dt>
                <dd className="text-gray-900">$8.32</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd className="text-gray-900">$14.00</dd>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-6 text-gray-900">
                <dt className="text-base">Total</dt>
                <dd className="text-base">$126.32</dd>
              </div>
            </dl>
          </div>

          <div className="mx-auto w-full max-w-lg">
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-black py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              <span className="sr-only">Pay with Apple Pay</span>
              <AppleIcon />
            </button>

            <div className="relative mt-8">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm font-medium text-gray-500">
                  or
                </span>
              </div>
            </div>

            <form className="mt-6">
              <h2 className="text-lg font-medium text-gray-900">
                Contact information
              </h2>

              <div className="mt-6">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <div className="flex h-5 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                    />
                    <svg
                      fill="none"
                      viewBox="0 0 14 14"
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-[:checked]:opacity-100"
                      />
                      <path
                        d="M3 7H11"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                      />
                    </svg>
                  </div>
                </div>
                <label htmlFor="terms" className="text-sm text-gray-500">
                  I have read the terms and conditions and agree to the sale of
                  my personal information to the highest bidder.
                </label>
              </div>

              <button
                type="submit"
                disabled
                className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
              >
                Continue
              </button>
            </form>

            <div className="mt-10 divide-y divide-gray-200 border-b border-t border-gray-200">
              <button
                type="button"
                disabled
                className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
              >
                Payment details
              </button>
              <button
                type="button"
                disabled
                className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
              >
                Shipping address
              </button>
              <button
                type="button"
                disabled
                className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
              >
                Billing address
              </button>
              <button
                type="button"
                disabled
                className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
              >
                Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
