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
import {
  Menu,
  Search,
  ShoppingCartIcon,
  UserIcon,
  X,
  ChevronDownIcon,
  StarIcon,
  HeartIcon,
} from "lucide-react";
import {
  cn,
  findVariantByAttributes,
  getAvailableVariantsForAttribute,
  getColorStyle,
  getUniqueAttributeValues,
  isColorAttribute,
} from "@/utils";
import { FirebaseProduct, useProducts } from "@merittdev/sdk";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

const ProductPage: FC = () => {
  const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];
  const navigation = {
    categories: [
      {
        name: "Women",
        featured: [
          { name: "Sleep", href: "#" },
          { name: "Swimwear", href: "#" },
          { name: "Underwear", href: "#" },
        ],
        collection: [
          { name: "Everything", href: "#" },
          { name: "Core", href: "#" },
          { name: "New Arrivals", href: "#" },
          { name: "Sale", href: "#" },
        ],
        categories: [
          { name: "Basic Tees", href: "#" },
          { name: "Artwork Tees", href: "#" },
          { name: "Bottoms", href: "#" },
          { name: "Underwear", href: "#" },
          { name: "Accessories", href: "#" },
        ],
        brands: [
          { name: "Full Nelson", href: "#" },
          { name: "My Way", href: "#" },
          { name: "Re-Arranged", href: "#" },
          { name: "Counterfeit", href: "#" },
          { name: "Significant Other", href: "#" },
        ],
      },
      {
        name: "Men",
        featured: [
          { name: "Casual", href: "#" },
          { name: "Boxers", href: "#" },
          { name: "Outdoor", href: "#" },
        ],
        collection: [
          { name: "Everything", href: "#" },
          { name: "Core", href: "#" },
          { name: "New Arrivals", href: "#" },
          { name: "Sale", href: "#" },
        ],
        categories: [
          { name: "Artwork Tees", href: "#" },
          { name: "Pants", href: "#" },
          { name: "Accessories", href: "#" },
          { name: "Boxers", href: "#" },
          { name: "Basic Tees", href: "#" },
        ],
        brands: [
          { name: "Significant Other", href: "#" },
          { name: "My Way", href: "#" },
          { name: "Counterfeit", href: "#" },
          { name: "Re-Arranged", href: "#" },
          { name: "Full Nelson", href: "#" },
        ],
      },
    ],
    pages: [
      { name: "Company", href: "#" },
      { name: "Stores", href: "#" },
    ],
  };

  const reviews = {
    href: "#",
    average: 4,
    totalCount: 117,
    featured: [
      {
        id: 1,
        title: "This is the best white t-shirt out there",
        rating: 5,
        content: `
          <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
        `,
        author: "Mark Edwards",
        avatarSrc:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 2,
        title: "Adds the perfect variety to my wardrobe",
        rating: 4,
        content: `
          <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
        `,
        author: "Blake Reid",
        avatarSrc:
          "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      },
      {
        id: 3,
        title: "All good things come in 6-Packs",
        rating: 5,
        content: `
          <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
        `,
        author: "Ben Russel",
        avatarSrc:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  };

  const footerNavigation = {
    account: [
      { name: "Manage Account", href: "#" },
      { name: "Saved Items", href: "#" },
      { name: "Orders", href: "#" },
      { name: "Redeem Gift card", href: "#" },
    ],
    service: [
      { name: "Shipping & Returns", href: "#" },
      { name: "Warranty", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Find a store", href: "#" },
      { name: "Get in touch", href: "#" },
    ],
    company: [
      { name: "Who we are", href: "#" },
      { name: "Press", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Privacy", href: "#" },
    ],
    connect: [
      { name: "Facebook", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "Pinterest", href: "#" },
    ],
  };
  const [open, setOpen] = useState(false);

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
        product?.variants,
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

  const [products, setProducts] = useState<FirebaseProduct[] | null>(null);
  const { fetchProductsByCategory } = useProducts();

  const loadProducts = useCallback(async () => {
    try {
      if (!product?.category) return null;

      const result = await fetchProductsByCategory(product?.category);

      setProducts(result.data);
    } catch (error) {
      toast.error("Failed to load products");
    }
  }, [fetchProductsByCategory]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  // Extract available attributes from variants
  const availableAttributes =
    product?.variants && product?.variants.length > 0
      ? Object.keys(product?.variants[0].attributes)
      : [];

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
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category, categoryIdx) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-12 px-4 pb-6 pt-10"
                  >
                    <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                        <div>
                          <p
                            id={`mobile-featured-heading-${categoryIdx}`}
                            className="font-medium text-gray-900"
                          >
                            Featured
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`mobile-featured-heading-${categoryIdx}`}
                            className="mt-6 space-y-6"
                          >
                            {category.featured.map((item) => (
                              <li key={item.name} className="flex">
                                <Link href={item.href} className="text-gray-500">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p
                            id="mobile-categories-heading"
                            className="font-medium text-gray-900"
                          >
                            Categories
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="mobile-categories-heading"
                            className="mt-6 space-y-6"
                          >
                            {category.categories.map((item) => (
                              <li key={item.name} className="flex">
                                <Link href={item.href} className="text-gray-500">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                        <div>
                          <p
                            id="mobile-collection-heading"
                            className="font-medium text-gray-900"
                          >
                            Collection
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="mobile-collection-heading"
                            className="mt-6 space-y-6"
                          >
                            {category.collection.map((item) => (
                              <li key={item.name} className="flex">
                                <Link href={item.href} className="text-gray-500">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p
                            id="mobile-brand-heading"
                            className="font-medium text-gray-900"
                          >
                            Brands
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="mobile-brand-heading"
                            className="mt-6 space-y-6"
                          >
                            {category.brands.map((item) => (
                              <li key={item.name} className="flex">
                                <Link href={item.href} className="text-gray-500">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
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
                  <ChevronDownIcon
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
              <form className="hidden lg:block lg:flex-1">
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
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-300"
                  />
                </div>
              </form>

              <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
                Get free delivery on orders over $100
              </p>

              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link
                  href="#"
                  className="text-sm font-medium text-white hover:text-gray-100"
                >
                  Create an account
                </Link>
                <span aria-hidden="true" className="h-6 w-px bg-gray-600" />
                <Link
                  href="#"
                  className="text-sm font-medium text-white hover:text-gray-100"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:items-center">
                    <Link href="#">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt=""
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        className="h-8 w-auto"
                      />
                    </Link>
                  </div>

                  <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                    <div className="flex h-full space-x-8">
                      {navigation.categories.map((category, categoryIdx) => (
                        <Popover key={category.name} className="flex">
                          <div className="relative flex">
                            <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:text-indigo-600">
                              {category.name}
                              <span
                                aria-hidden="true"
                                className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-[open]:bg-indigo-600"
                              />
                            </PopoverButton>
                          </div>
                          <PopoverPanel
                            transition
                            className="absolute inset-x-0 top-full z-20 w-full bg-white text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 top-1/2 bg-white shadow"
                            />
                            <div className="relative bg-white">
                              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-2 items-start gap-x-8 gap-y-10 pb-12 pt-10">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                    <div>
                                      <p
                                        id={`desktop-featured-heading-${categoryIdx}`}
                                        className="font-medium text-gray-900"
                                      >
                                        Featured
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {category.featured.map((item) => (
                                          <li key={item.name} className="flex">
                                            <Link
                                              href={item.href}
                                              className="hover:text-gray-800"
                                            >
                                              {item.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div>
                                      <p
                                        id="desktop-categories-heading"
                                        className="font-medium text-gray-900"
                                      >
                                        Categories
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby="desktop-categories-heading"
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {category.categories.map((item) => (
                                          <li key={item.name} className="flex">
                                            <Link
                                              href={item.href}
                                              className="hover:text-gray-800"
                                            >
                                              {item.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                    <div>
                                      <p
                                        id="desktop-collection-heading"
                                        className="font-medium text-gray-900"
                                      >
                                        Collection
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby="desktop-collection-heading"
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {category.collection.map((item) => (
                                          <li key={item.name} className="flex">
                                            <Link
                                              href={item.href}
                                              className="hover:text-gray-800"
                                            >
                                              {item.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    <div>
                                      <p
                                        id="desktop-brand-heading"
                                        className="font-medium text-gray-900"
                                      >
                                        Brands
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby="desktop-brand-heading"
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {category.brands.map((item) => (
                                          <li key={item.name} className="flex">
                                            <Link
                                              href={item.href}
                                              className="hover:text-gray-800"
                                            >
                                              {item.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
                      <Search aria-hidden="true" className="size-6" />
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
                    <div className="flex items-center lg:ml-8">
                      <div className="flex space-x-8">
                        <div className="hidden lg:flex">
                          <Link
                            href="#"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Search</span>
                            <Search aria-hidden="true" className="size-6" />
                          </Link>
                        </div>

                        <div className="flex">
                          <Link
                            href="#"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Account</span>
                            <UserIcon aria-hidden="true" className="size-6" />
                          </Link>
                        </div>
                      </div>

                      <span
                        aria-hidden="true"
                        className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                      />

                      <div className="flow-root">
                        <Link
                          href="#"
                          className="group -m-2 flex items-center p-2"
                        >
                          <ShoppingCartIcon
                            aria-hidden="true"
                            className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                          />
                          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                            0
                          </span>
                          <span className="sr-only">
                            items in cart, view bag
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-10 sm:pt-16">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <Link
                  href={"/"}
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  Home
                </Link>
                <svg
                  fill="currentColor"
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <Link
                  href={product?.slug ?? ""}
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  {product?.name}
                </Link>
                <svg
                  fill="currentColor"
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <Link
                href={product?.slug ?? ""}
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
            alt={product?.images[3].alt}
            src={product?.images[3].url}
            className="row-span-2 aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-[3/4]"
          />
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
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
                    <StarIcon
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
                <Link
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </Link>
              </div>
            </div>

            <form className="mt-6">
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
                      {attribute.toLowerCase().includes("size") && (
                        <Link
                          href="#"
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          See sizing chart
                        </Link>
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

              <div className="mt-10 flex">
                <button
                  type="submit"
                  disabled={!selectedVariant}
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {selectedVariant
                    ? `Add to bag - $${selectedVariant.price}`
                    : Object.keys(selectedAttributes).length > 0
                    ? "Complete selection"
                    : "Select options"}
                </button>

                <button
                  type="button"
                  className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <HeartIcon aria-hidden="true" className="size-6 shrink-0" />
                  <span className="sr-only">Add to favorites</span>
                </button>
              </div>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {product?.description}
                </p>
              </div>
            </div>

          </div>

          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Reviews */}
            <section
              aria-labelledby="reviews-heading"
              className="border-t border-gray-200 pt-10 lg:pt-16"
            >
              <h2 id="reviews-heading" className="sr-only">
                Reviews
              </h2>

              <div className="space-y-10">
                {reviews.featured.map((review) => (
                  <div key={review.id} className="flex flex-col sm:flex-row">
                    <div className="order-2 mt-6 sm:ml-16 sm:mt-0">
                      <h3 className="text-sm font-medium text-gray-900">
                        {review.title}
                      </h3>
                      <p className="sr-only">{review.rating} out of 5 stars</p>

                      <div
                        dangerouslySetInnerHTML={{ __html: review.content }}
                        className="mt-3 space-y-6 text-sm text-gray-600"
                      />
                    </div>

                    <div className="order-1 flex items-center sm:flex-col sm:items-start">
                      <img
                        alt={`${review.author}.`}
                        src={review.avatarSrc}
                        className="size-12 rounded-full"
                      />

                      <div className="ml-4 sm:ml-0 sm:mt-4">
                        <p className="text-sm font-medium text-gray-900">
                          {review.author}
                        </p>
                        <div className="mt-2 flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              aria-hidden="true"
                              className={cn(
                                review.rating > rating
                                  ? "text-gray-900"
                                  : "text-gray-200",
                                "size-5 shrink-0"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        <section
          aria-labelledby="related-products-heading"
          className="bg-white"
        >
          <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2
              id="related-products-heading"
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              Customers also purchased
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products?.map((product) => (
                <div key={product?.id} className="group relative">
                  <img
                    alt={product?.images[0].alt}
                    src={product?.images[0].url}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link href={product?.slug}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product?.name}
                        </Link>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product?.variants[0].price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer
        aria-labelledby="footer-heading"
        className="border-t border-gray-200 bg-white"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 py-20 sm:grid-cols-2 sm:gap-y-0 lg:grid-cols-4">
            <div className="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Account</h3>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.account.map((item) => (
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
                <h3 className="text-sm font-medium text-gray-900">Service</h3>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.service.map((item) => (
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
            <div className="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Company</h3>
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
              <div>
                <h3 className="text-sm font-medium text-gray-900">Connect</h3>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.connect.map((item) => (
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
          </div>

          <div className="border-t border-gray-100 py-10 sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center justify-center text-sm text-gray-500">
              <p>Shipping to Canada ($CAD)</p>
              <p className="ml-3 border-l border-gray-200 pl-3">English</p>
            </div>
            <p className="mt-6 text-center text-sm text-gray-500 sm:mt-0">
              &copy; 2021 Your Company, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default ProductPage;
