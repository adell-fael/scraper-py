import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Lock } from 'lucide-react';

const CheckoutForm = () => {
  const subtotal = '$108.00';
  const discount = { code: 'CHEAPSKATE', amount: '$16.00' };
  const taxes = '$9.92';
  const shipping = '$8.00';
  const total = '$141.92';
  const products = [
    {
      id: 1,
      name: 'Mountain Mist Artwork Tee',
      href: '#',
      price: '$36.00',
      color: 'Birch',
      size: 'L',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/checkout-form-04-product-01.jpg',
      imageAlt: 'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
    },
    {
      id: 2,
      name: 'Swirls Artwork Tee',
      href: '#',
      price: '$36.00',
      color: 'Sienna',
      size: 'M',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/checkout-form-04-product-02.jpg',
      imageAlt: 'Front of dark clay color tee with black hand drawn circles on chest.',
    },
    {
      id: 3,
      name: '3D Glasses Artwork Tee',
      href: '#',
      price: '$36.00',
      color: 'Black',
      size: 'L',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/checkout-form-04-product-03.jpg',
      imageAlt: 'Front of black tee with red and green curved lines overlapping with 3d effect.',
    },
  ];

  return (
    <main className="lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
      <h1 className="sr-only">Checkout</h1>

      {/* Mobile order summary */}
      <section aria-labelledby="order-heading" className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden">
        <Disclosure as="div" className="mx-auto max-w-lg">
          <div className="flex items-center justify-between">
            <h2 id="order-heading" className="text-lg font-medium text-gray-900">Your Order</h2>
            <DisclosureButton className="group font-medium text-indigo-600 hover:text-indigo-500">
              <span className="group-[:not([data-open])]:hidden">Hide full summary</span>
              <span className="group-data-[open]:hidden">Show full summary</span>
            </DisclosureButton>
          </div>

          <DisclosurePanel>
            <ul role="list" className="divide-y divide-gray-200 border-b border-gray-200">
              {products.map((product) => (
                <li key={product.id} className="flex space-x-6 py-6">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="size-40 flex-none rounded-md bg-gray-200 object-cover"
                  />
                  <div className="flex flex-col justify-between space-y-4">
                    <div className="space-y-1 text-sm font-medium">
                      <h3 className="text-gray-900">{product.name}</h3>
                      <p className="text-gray-900">{product.price}</p>
                      <p className="text-gray-500">{product.color}</p>
                      <p className="text-gray-500">{product.size}</p>
                    </div>
                    <div className="flex space-x-4">
                      <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Edit</button>
                      <div className="flex border-l border-gray-300 pl-4">
                        <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <form className="mt-10">
              <label htmlFor="discount-code-mobile" className="block text-sm/6 font-medium text-gray-700">Discount code</label>
              <div className="mt-2 flex space-x-4">
                <input
                  id="discount-code-mobile"
                  name="discount-code-mobile"
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <button
                  type="submit"
                  className="rounded-md bg-gray-200 px-4 text-sm font-medium text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Apply
                </button>
              </div>
            </form>

            <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-gray-900">{subtotal}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="flex">
                  Discount
                  <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs tracking-wide text-gray-600">{discount.code}</span>
                </dt>
                <dd className="text-gray-900">-{discount.amount}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Taxes</dt>
                <dd className="text-gray-900">{taxes}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd className="text-gray-900">{shipping}</dd>
              </div>
            </dl>
          </DisclosurePanel>

          <p className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900">
            <span className="text-base">Total</span>
            <span className="text-base">{total}</span>
          </p>
        </Disclosure>
      </section>

      {/* Order summary */}
      <section aria-labelledby="summary-heading" className="hidden w-full max-w-md flex-col bg-gray-50 lg:flex">
        <h2 id="summary-heading" className="sr-only">Order summary</h2>

        <ul role="list" className="flex-auto divide-y divide-gray-200 overflow-y-auto px-6">
          {products.map((product) => (
            <li key={product.id} className="flex space-x-6 py-6">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="size-40 flex-none rounded-md bg-gray-200 object-cover"
              />
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-1 text-sm font-medium">
                  <h3 className="text-gray-900">{product.name}</h3>
                  <p className="text-gray-900">{product.price}</p>
                  <p className="text-gray-500">{product.color}</p>
                  <p className="text-gray-500">{product.size}</p>
                </div>
                <div className="flex space-x-4">
                  <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Edit</button>
                  <div className="flex border-l border-gray-300 pl-4">
                    <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="sticky bottom-0 flex-none border-t border-gray-200 bg-gray-50 p-6">
          <form>
            <label htmlFor="discount-code" className="block text-sm/6 font-medium text-gray-700">Discount code</label>
            <div className="mt-2 flex space-x-4">
              <input
                id="discount-code"
                name="discount-code"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <button
                type="submit"
                className="rounded-md bg-gray-200 px-4 text-sm font-medium text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Apply
              </button>
            </div>
          </form>

          <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd className="text-gray-900">{subtotal}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="flex">
                Discount
                <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs tracking-wide text-gray-600">{discount.code}</span>
              </dt>
              <dd className="text-gray-900">-{discount.amount}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Taxes</dt>
              <dd className="text-gray-900">{taxes}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Shipping</dt>
              <dd className="text-gray-900">{shipping}</dd>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
              <dt>Total</dt>
              <dd className="text-base">{total}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Checkout form */}
      <section
        aria-labelledby="payment-heading"
        className="flex-auto overflow-y-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-0"
      >
        <h2 id="payment-heading" className="sr-only">Payment and shipping details</h2>

        <div className="mx-auto max-w-lg lg:pt-16">
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-black py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            <span className="sr-only">Pay with Apple Pay</span>
            <svg fill="currentColor" viewBox="0 0 50 20" className="h-5 w-auto">
              <path d="M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z" />
            </svg>
          </button>

          <div className="relative mt-8">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm font-medium text-gray-500">or</span>
            </div>
          </div>

          <form className="mt-6">
            <div className="grid grid-cols-12 gap-x-4 gap-y-6">
              <div className="col-span-full">
                <label htmlFor="email-address" className="block text-sm/6 font-medium text-gray-700">Email address</label>
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

              <div className="col-span-full">
                <label htmlFor="name-on-card" className="block text-sm/6 font-medium text-gray-700">Name on card</label>
                <div className="mt-2">
                  <input
                    id="name-on-card"
                    name="name-on-card"
                    type="text"
                    autoComplete="cc-name"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="card-number" className="block text-sm/6 font-medium text-gray-700">Card number</label>
                <div className="mt-2">
                  <input
                    id="card-number"
                    name="card-number"
                    type="text"
                    autoComplete="cc-number"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-8 sm:col-span-9">
                <label htmlFor="expiration-date" className="block text-sm/6 font-medium text-gray-700">Expiration date (MM/YY)</label>
                <div className="mt-2">
                  <input
                    id="expiration-date"
                    name="expiration-date"
                    type="text"
                    autoComplete="cc-exp"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-4 sm:col-span-3">
                <label htmlFor="cvc" className="block text-sm/6 font-medium text-gray-700">CVC</label>
                <div className="mt-2">
                  <input
                    id="cvc"
                    name="cvc"
                    type="text"
                    autoComplete="csc"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="address" className="block text-sm/6 font-medium text-gray-700">Address</label>
                <div className="mt-2">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    autoComplete="street-address"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-full sm:col-span-4">
                <label htmlFor="city" className="block text-sm/6 font-medium text-gray-700">City</label>
                <div className="mt-2">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-full sm:col-span-4">
                <label htmlFor="region" className="block text-sm/6 font-medium text-gray-700">State / Province</label>
                <div className="mt-2">
                  <input
                    id="region"
                    name="region"
                    type="text"
                    autoComplete="address-level1"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-full sm:col-span-4">
                <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-700">Postal code</label>
                <div className="mt-2">
                  <input
                    id="postal-code"
                    name="postal-code"
                    type="text"
                    autoComplete="postal-code"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <div className="flex h-5 shrink-0 items-center">
                <div className="group grid size-4 grid-cols-1">
                  <input
                    defaultChecked
                    id="same-as-shipping"
                    name="same-as-shipping"
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
              <label htmlFor="same-as-shipping" className="text-sm font-medium text-gray-900">Billing address is the same as shipping address</label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Pay {total}
            </button>

            <p className="mt-6 flex justify-center text-sm font-medium text-gray-500">
              <Lock className="mr-1.5 size-5 text-gray-400" />
              Payment details stored in plain text
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default CheckoutForm;