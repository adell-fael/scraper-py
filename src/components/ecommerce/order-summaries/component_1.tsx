import React from "react";
import { CreditCard } from "lucide-react";

const OrderSummary = () => {
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      price: "$36.00",
      color: "Charcoal",
      size: "L",
      imageSrc:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/confirmation-page-06-product-01.jpg",
      imageAlt: "Model wearing men's charcoal basic tee in large.",
    },
    {
      id: 2,
      name: "Artwork Tee — Iso Dots",
      href: "#",
      price: "$36.00",
      color: "Peach",
      size: "S",
      imageSrc:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/confirmation-page-06-product-02.jpg",
      imageAlt:
        "Model wearing women's artwork tee with isometric dots forming a cube in small.",
    },
  ];
  const trackingNumber = "51547878755545848512";
  const subtotal = "$72.00";
  const shipping = "$8.00";
  const taxes = "$6.40";
  const total = "$86.40";

  return (
    <main className="relative lg:min-h-full">
      <div className="h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
        <img
          alt="Order Confirmation"
          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/confirmation-page-06-hero.jpg"
          className="size-full object-cover"
        />
      </div>

      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
          <div className="lg:col-start-2">
            <h1 className="text-sm font-medium text-indigo-600">
              Payment successful
            </h1>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Thanks for ordering
            </p>
            <p className="mt-2 text-base text-gray-500">
              We appreciate your order, we’re currently processing it. So hang
              tight and we’ll send you confirmation very soon!
            </p>

            <dl className="mt-16 text-sm font-medium">
              <dt className="text-gray-900">Tracking number</dt>
              <dd className="mt-2 text-indigo-600">{trackingNumber}</dd>
            </dl>

            <ul
              role="list"
              className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
            >
              {products.map((product) => (
                <li key={product.id} className="flex space-x-6 py-6">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="size-24 flex-none rounded-md bg-gray-100 object-cover"
                  />
                  <div className="flex-auto space-y-1">
                    <h3 className="text-gray-900">
                      <a href={product.href}>{product.name}</a>
                    </h3>
                    <p>{product.color}</p>
                    <p>{product.size}</p>
                  </div>
                  <p className="flex-none font-medium text-gray-900">
                    {product.price}
                  </p>
                </li>
              ))}
            </ul>

            <dl className="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-gray-900">{subtotal}</dd>
              </div>

              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd className="text-gray-900">{shipping}</dd>
              </div>

              <div className="flex justify-between">
                <dt>Taxes</dt>
                <dd className="text-gray-900">{taxes}</dd>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                <dt className="text-base">Total</dt>
                <dd className="text-base">{total}</dd>
              </div>
            </dl>

            <dl className="mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600">
              <div>
                <dt className="font-medium text-gray-900">Shipping Address</dt>
                <dd className="mt-2">
                  <address className="not-italic">
                    <span className="block">Kristin Watson</span>
                    <span className="block">7363 Cynthia Pass</span>
                    <span className="block">Toronto, ON N3Y 4H8</span>
                  </address>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">
                  Payment Information
                </dt>
                <dd className="mt-2 space-y-2 sm:flex sm:space-x-4 sm:space-y-0">
                  <div className="flex-none">
                    <CreditCard className="h-6 w-auto" />
                    <p className="sr-only">Visa</p>
                  </div>
                  <div className="flex-auto">
                    <p className="text-gray-900">Ending with 4242</p>
                    <p>Expires 12 / 21</p>
                  </div>
                </dd>
              </div>
            </dl>

            <div className="mt-16 border-t border-gray-200 py-6 text-right">
              <a
                href="#"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderSummary;
