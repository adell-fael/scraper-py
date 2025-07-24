import { ChevronDownIcon } from "lucide-react";
import { CheckCircleIcon, TrashIcon } from "lucide-react";

const CheckoutForm = () => {
  const products = [
    {
      id: 1,
      title: "Basic Tee",
      href: "#",
      price: "$32.00",
      color: "Black",
      size: "Large",
      imageSrc:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/checkout-page-02-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 2,
      title: "Basic Tee",
      href: "#",
      price: "$32.00",
      color: "Sienna",
      size: "Large",
      imageSrc:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/checkout-page-02-product-02.jpg",
      imageAlt: "Front of men's Basic Tee in sienna.",
    },
  ];

  const deliveryMethods = [
    {
      id: 1,
      title: "Standard",
      turnaround: "4–10 business days",
      price: "$5.00",
    },
    {
      id: 2,
      title: "Express",
      turnaround: "2–5 business days",
      price: "$16.00",
    },
  ];

  const paymentMethods = [
    { id: "credit-card", title: "Credit card" },
    { id: "paypal", title: "PayPal" },
    { id: "etransfer", title: "eTransfer" },
  ];
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>

        <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Contact information
              </h2>
              <div className="mt-4">
                <label
                  htmlFor="email-address"
                  className="block text-sm/6 font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">
                Shipping information
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                {[
                  "first-name",
                  "last-name",
                  "company",
                  "address",
                  "apartment",
                  "city",
                  "country",
                  "region",
                  "postal-code",
                  "phone",
                ].map((field, index) => (
                  <div
                    key={field}
                    className={
                      field === "company" || field === "apartment"
                        ? "sm:col-span-2"
                        : ""
                    }
                  >
                    <label
                      htmlFor={field}
                      className="block text-sm/6 font-medium text-gray-700"
                    >
                      {field
                        .replace("-", " ")
                        .replace(/\b\w/g, (char) => char.toUpperCase())}
                    </label>
                    <div className="mt-2">
                      <input
                        id={field}
                        name={field}
                        type={
                          field.includes("name") ||
                          field === "city" ||
                          field === "region" ||
                          field === "postal-code" ||
                          field === "phone"
                            ? "text"
                            : "text"
                        }
                        autoComplete={
                          field === "email-address" ? "email" : field
                        }
                        className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm/6 font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <fieldset>
                <legend className="text-lg font-medium text-gray-900">
                  Delivery method
                </legend>
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  {deliveryMethods.map((deliveryMethod) => (
                    <label
                      key={deliveryMethod.id}
                      aria-label={deliveryMethod.title}
                      aria-description={`${deliveryMethod.turnaround} for ${deliveryMethod.price}`}
                      className="group relative flex rounded-lg border border-gray-300 bg-white p-4 has-[:disabled]:border-gray-400 has-[:disabled]:bg-gray-200 has-[:disabled]:opacity-25 has-[:checked]:outline has-[:focus-visible]:outline has-[:checked]:outline-2 has-[:focus-visible]:outline-[3px] has-[:checked]:-outline-offset-2 has-[:focus-visible]:-outline-offset-1 has-[:checked]:outline-indigo-600"
                    >
                      <input
                        defaultValue={deliveryMethod.id}
                        defaultChecked={deliveryMethod === deliveryMethods[0]}
                        name="delivery-method"
                        type="radio"
                        className="absolute inset-0 appearance-none focus:outline focus:outline-0"
                      />
                      <div className="flex-1">
                        <span className="block text-sm font-medium text-gray-900">
                          {deliveryMethod.title}
                        </span>
                        <span className="mt-1 block text-sm text-gray-500">
                          {deliveryMethod.turnaround}
                        </span>
                        <span className="mt-6 block text-sm font-medium text-gray-900">
                          {deliveryMethod.price}
                        </span>
                      </div>
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="invisible size-5 text-indigo-600 group-has-[:checked]:visible"
                      />
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">Payment</h2>
              <fieldset className="mt-4">
                <legend className="sr-only">Payment type</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                  {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                    <div key={paymentMethod.id} className="flex items-center">
                      <input
                        defaultChecked={paymentMethodIdx === 0}
                        id={paymentMethod.id}
                        name="payment-type"
                        type="radio"
                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                      />
                      <label
                        htmlFor={paymentMethod.id}
                        className="ml-3 block text-sm/6 font-medium text-gray-700"
                      >
                        {paymentMethod.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>

              <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                {["card-number", "name-on-card", "expiration-date", "cvc"].map(
                  (field, index) => (
                    <div
                      key={field}
                      className={
                        field === "name-on-card"
                          ? "col-span-4"
                          : field === "expiration-date"
                          ? "col-span-3"
                          : ""
                      }
                    >
                      <label
                        htmlFor={field}
                        className="block text-sm/6 font-medium text-gray-700"
                      >
                        {field
                          .replace("-", " ")
                          .replace(/\b\w/g, (char) => char.toUpperCase())}
                      </label>
                      <div className="mt-2">
                        <input
                          id={field}
                          name={field}
                          type="text"
                          autoComplete={
                            field === "card-number"
                              ? "cc-number"
                              : field === "name-on-card"
                              ? "cc-name"
                              : field === "expiration-date"
                              ? "cc-exp"
                              : "csc"
                          }
                          className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
            <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
              <h3 className="sr-only">Items in your cart</h3>
              <ul role="list" className="divide-y divide-gray-200">
                {products.map((product) => (
                  <li key={product.id} className="flex px-4 py-6 sm:px-6">
                    <div className="shrink-0">
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="w-20 rounded-md"
                      />
                    </div>

                    <div className="ml-6 flex flex-1 flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm">
                            <a
                              href={product.href}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {product.title}
                            </a>
                          </h4>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.color}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.size}
                          </p>
                        </div>

                        <div className="ml-4 flow-root shrink-0">
                          <button
                            type="button"
                            className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Remove</span>
                            <TrashIcon aria-hidden="true" className="size-5" />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-1 items-end justify-between pt-2">
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          {product.price}
                        </p>
                        <div className="ml-4">
                          <div className="grid grid-cols-1">
                            <select
                              id="quantity"
                              name="quantity"
                              aria-label="Quantity"
                              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <option key={num} value={num}>
                                  {num}
                                </option>
                              ))}
                            </select>
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">$64.00</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Shipping</dt>
                  <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Taxes</dt>
                  <dd className="text-sm font-medium text-gray-900">$5.52</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base font-medium">Total</dt>
                  <dd className="text-base font-medium text-gray-900">
                    $75.52
                  </dd>
                </div>
              </dl>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Confirm order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
