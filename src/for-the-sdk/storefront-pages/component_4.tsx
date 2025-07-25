"use client";

import { FC, Fragment, useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { Menu, ChevronDown, HelpCircle, ShoppingBag, X } from "lucide-react";
import { useCategories, FirebaseProduct, useProducts } from "@merittdev/sdk";
import { toast } from "sonner";
import Link from "next/link";

const StorefrontPage: FC = () => {
  const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];
  const navigation = {
    categories: [
      {
        name: "Women",
        featured: [
          {
            name: "New Arrivals",
            href: "#",
            imageSrc:
              "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
          },
          {
            name: "Basic Tees",
            href: "#",
            imageSrc:
              "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg",
            imageAlt:
              "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
          },
          {
            name: "Accessories",
            href: "#",
            imageSrc:
              "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-03.jpg",
            imageAlt:
              "Model wearing minimalist watch with black wristband and white watch face.",
          },
          {
            name: "Carry",
            href: "#",
            imageSrc:
              "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-04.jpg",
            imageAlt:
              "Model opening tan leather long wallet with credit card pockets and cash pouch.",
          },
        ],
      },
      {
        name: "Men",
        featured: [
          {
            name: "New Arrivals",
            href: "#",
            imageSrc:
              "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
            imageAlt:
              "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
          },
          {
            name: "Basic Tees",
            href: "#",
            imageSrc:
              "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
            imageAlt: "Model wearing light heather gray t-shirt.",
          },
          {
            name: "Accessories",
            href: "#",
            imageSrc:
              "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-03.jpg",
            imageAlt:
              "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
          },
          {
            name: "Carry",
            href: "#",
            imageSrc:
              "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-04.jpg",
            imageAlt:
              "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
          },
        ],
      },
    ],
    pages: [
      { name: "Company", href: "#" },
      { name: "Stores", href: "#" },
    ],
  };

  const perks = [
    {
      name: "Free returns",
      imageUrl:
        "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-returns-light.svg",
      description:
        "Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.",
    },
    {
      name: "Same day delivery",
      imageUrl:
        "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-calendar-light.svg",
      description:
        "We offer a delivery service that has never been done before. Checkout today and receive your products within hours.",
    },
    {
      name: "All year discount",
      imageUrl:
        "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-gift-card-light.svg",
      description:
        'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
    },
    {
      name: "For the planet",
      imageUrl:
        "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-planet-light.svg",
      description:
        "We’ve pledged 1% of sales to the preservation and restoration of the natural environment.",
    },
  ];

  const footerNavigation = {
    products: [
      { name: "Bags", href: "#" },
      { name: "Tees", href: "#" },
      { name: "Objects", href: "#" },
      { name: "Home Goods", href: "#" },
      { name: "Accessories", href: "#" },
    ],
    company: [
      { name: "Who we are", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Press", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Privacy", href: "#" },
    ],
    customerService: [
      { name: "Contact", href: "#" },
      { name: "Shipping", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Warranty", href: "#" },
      { name: "Secure Payments", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Find a store", href: "#" },
    ],
  };

  const [open, setOpen] = useState(false);

  const { categories } = useCategories();
  const [products, setProducts] = useState<FirebaseProduct[] | null>(null);
  const { fetchProducts } = useProducts();

  const loadProducts = useCallback(async () => {
    try {
      const result = await fetchProducts();
      if (result.error) {
        toast.error(
          typeof result.error === "string"
            ? result.error
            : "Failed to load products"
        );
      } else {
        setProducts(result.products);
      }
    } catch (error) {
      toast.error("Failed to load products");
    }
  }, [fetchProducts]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category?.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category?.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category?.name}
                    className="space-y-12 px-4 py-6"
                  >
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                      {category?.featured.map((item) => (
                        <div key={item.name} className="group relative">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <Link
                            href={item.href}
                            className="mt-6 block text-sm font-medium text-gray-900"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {item.name}
                          </Link>
                          <p
                            aria-hidden="true"
                            className="mt-1 text-sm text-gray-500"
                          >
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <Link
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    {page.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <Link
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create an account
                </Link>
              </div>
              <div className="flow-root">
                <Link
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Sign in
                </Link>
              </div>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {/* Currency selector */}
              <form>
                <div className="-ml-2 inline-grid grid-cols-1">
                  <select
                    id="mobile-currency"
                    name="currency"
                    aria-label="Currency"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-0.5 pl-2 pr-7 text-base font-medium text-gray-700 focus:outline focus:outline-2 group-hover:text-gray-800 sm:text-sm/6"
                  >
                    {currencies.map((currency) => (
                      <option key={currency}>{currency}</option>
                    ))}
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-500"
                  />
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-gray-900">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* Currency selector */}
              <form>
                <div className="-ml-2 inline-grid grid-cols-1">
                  <select
                    id="desktop-currency"
                    name="currency"
                    aria-label="Currency"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-900 py-0.5 pl-2 pr-7 text-left text-base font-medium text-white focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-white sm:text-sm/6"
                  >
                    {currencies.map((currency) => (
                      <option key={currency}>{currency}</option>
                    ))}
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-300"
                  />
                </div>
              </form>

              <div className="flex items-center space-x-6">
                <Link
                  href="#"
                  className="text-sm font-medium text-white hover:text-gray-100"
                >
                  Sign in
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-white hover:text-gray-100"
                >
                  Create an account
                </Link>
              </div>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <Link href="#">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt=""
                      src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                      className="h-8 w-auto"
                    />
                  </Link>
                </div>

                <div className="z-10 hidden h-full lg:flex">
                  {/* Flyout menus */}
                  <PopoverGroup className="inset-x-0 bottom-0 px-4">
                    <div className="flex h-full justify-center space-x-8">
                      {navigation.categories.map((category) => (
                        <Popover key={category?.name} className="flex">
                          <div className="relative flex">
                            <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:text-indigo-600">
                              {category?.name}
                              <span
                                aria-hidden="true"
                                className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-[open]:bg-indigo-600"
                              />
                            </PopoverButton>
                          </div>
                          <PopoverPanel
                            transition
                            className="group/popover-panel absolute inset-x-0 top-full z-20 w-full bg-white text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 top-1/2 bg-white shadow"
                            />
                            <div className="relative bg-white">
                              <div className="mx-auto max-w-7xl px-8">
                                <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                  {category?.featured.map((item) => (
                                    <div
                                      key={item.name}
                                      className="group relative"
                                    >
                                      <img
                                        alt={item.imageAlt}
                                        src={item.imageSrc}
                                        className="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"
                                      />
                                      <Link
                                        href={item.href}
                                        className="mt-4 block font-medium text-gray-900"
                                      >
                                        <span className="absolute inset-0 z-10" />
                                        {item.name}
                                      </Link>
                                      <p aria-hidden="true" className="mt-1">
                                        Shop now
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            {/* Presentational element to emulate a border that sits on top of the popover */}
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 top-0 z-10 mx-auto h-px max-w-7xl px-8"
                            >
                              <div className="h-px w-full bg-transparent transition-colors duration-200 ease-out group-data-[open]/popover-panel:bg-gray-200" />
                            </div>
                          </PopoverPanel>
                        </Popover>
                      ))}
                      {navigation.pages.map((page) => (
                        <Link
                          key={page.name}
                          href={page.href}
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                          {page.name}
                        </Link>
                      ))}
                    </div>
                  </PopoverGroup>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex flex-1 items-center lg:hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                  >
                    <span className="sr-only">Open menu</span>
                    <Menu aria-hidden="true" className="size-6" />
                  </button>

                  {/* Search */}
                  <Link
                    href="#"
                    className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Search</span>
                    <HelpCircle aria-hidden="true" className="size-6" />
                  </Link>
                </div>

                {/* Logo (lg-) */}
                <Link href="#" className="lg:hidden">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </Link>

                <div className="flex flex-1 items-center justify-end">
                  <Link
                    href="#"
                    className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"
                  >
                    Search
                  </Link>

                  <div className="flex items-center lg:ml-8">
                    {/* Help */}
                    <Link
                      href="#"
                      className="p-2 text-gray-400 hover:text-gray-500 lg:hidden"
                    >
                      <span className="sr-only">Help</span>
                      <HelpCircle aria-hidden="true" className="size-6" />
                    </Link>
                    <Link
                      href="#"
                      className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"
                    >
                      Help
                    </Link>

                    {/* Cart */}
                    <div className="ml-4 flow-root lg:ml-8">
                      <Link
                        href="#"
                        className="group -m-2 flex items-center p-2"
                      >
                        <ShoppingBag
                          aria-hidden="true"
                          className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                          0
                        </span>
                        <span className="sr-only">items in cart, view bag</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative">
          {/* Background image and overlap */}
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden sm:flex sm:flex-col"
          >
            <div className="relative w-full flex-1 bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
          </div>

          <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
            {/* Background image and overlap */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex flex-col sm:hidden"
            >
              <div className="relative w-full flex-1 bg-gray-800">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                    className="size-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gray-900 opacity-50" />
              </div>
              <div className="h-48 w-full bg-white" />
            </div>
            <div className="relative py-32">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Mid-Season Sale
              </h1>
              <div className="mt-4 sm:mt-6">
                <Link
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
                >
                  Shop Category
                </Link>
              </div>
            </div>
          </div>

          <section
            aria-labelledby="category-heading"
            className="relative -mt-96 sm:mt-0"
          >
            <h2 id="category-heading" className="sr-only">
              Categories
            </h2>
            <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
              {categories?.map((category) => (
                <div
                  key={category?.name}
                  className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-[4/5] sm:h-auto"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 overflow-hidden rounded-lg"
                  >
                    <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                      <img
                        alt={category?.name}
                        src={category?.cover}
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                  </div>
                  <div className="absolute inset-0 flex items-end rounded-lg p-6">
                    <div>
                      <p aria-hidden="true" className="text-sm text-white">
                        Shop the category
                      </p>
                      <h3 className="mt-1 font-semibold text-white">
                        <Link href={category?.slug}>
                          <span className="absolute inset-0" />
                          {category?.name}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section aria-labelledby="trending-heading">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
            <div className="md:flex md:items-center md:justify-between">
              <h2
                id="favorites-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                Trending Products
              </h2>
              <Link
                href="#"
                className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
              >
                Shop the category
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
              {products?.map((product) => (
                <div key={product?.id} className="group relative">
                  <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
                    <img
                      alt={product?.images[0].alt}
                      src={product?.images[0].url}
                      className="size-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    <Link href={product?.slug}>
                      <span className="absolute inset-0" />
                      {product?.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product?.variants[0].name}</p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {product?.variants[0].price}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-sm md:hidden">
              <Link
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Shop the category
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="perks-heading"
          className="border-t border-gray-200 bg-gray-50"
        >
          <h2 id="perks-heading" className="sr-only">
            Our perks
          </h2>

          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
              {perks.map((perk) => (
                <div
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:shrink-0">
                    <div className="flow-root">
                      <img
                        alt=""
                        src={perk.imageUrl}
                        className="-my-1 mx-auto h-24 w-auto"
                      />
                    </div>
                  </div>
                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-900">
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer aria-labelledby="footer-heading" className="bg-gray-50">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 py-20">
            <div className="grid grid-cols-1 md:grid-flow-col md:auto-rows-min md:grid-cols-12 md:gap-x-8 md:gap-y-16">
              {/* Image section */}
              <div className="col-span-1 md:col-span-2 lg:col-start-1 lg:row-start-1">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </div>

              {/* Sitemap sections */}
              <div className="col-span-6 mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6 lg:col-start-2">
                <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Products
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.products.map((item) => (
                        <li key={item.name} className="text-sm">
                          <Link
                            href={item.href}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Company
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.company.map((item) => (
                        <li key={item.name} className="text-sm">
                          <Link
                            href={item.href}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Customer Service
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.customerService.map((item) => (
                      <li key={item.name} className="text-sm">
                        <Link
                          href={item.href}
                          className="text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Newsletter section */}
              <div className="mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1">
                <h3 className="text-sm font-medium text-gray-900">
                  Sign up for our newsletter
                </h3>
                <p className="mt-6 text-sm text-gray-500">
                  The latest deals and savings, sent to your inbox weekly.
                </p>
                <form className="mt-2 flex sm:max-w-md">
                  <input
                    id="email-address"
                    type="text"
                    required
                    autoComplete="email"
                    aria-label="Email address"
                    className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                  <div className="ml-4 shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 py-10 text-center">
            <p className="text-sm text-gray-500">
              &copy; 2021 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StorefrontPage;
