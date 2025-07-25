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
  DollarSign,
  Globe,
  Search,
  ShoppingBagIcon,
  UserIcon,
  X,
  StarIcon,
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
  const navigation = {
    categories: [
      {
        id: "women",
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
        ],
        sections: [
          [
            {
              id: "shoes",
              name: "Shoes & Accessories",
              items: [
                { name: "Sneakers", href: "#" },
                { name: "Boots", href: "#" },
                { name: "Flats", href: "#" },
                { name: "Sandals", href: "#" },
                { name: "Heels", href: "#" },
                { name: "Socks", href: "#" },
              ],
            },
            {
              id: "collection",
              name: "Shop Collection",
              items: [
                { name: "Everything", href: "#" },
                { name: "Core", href: "#" },
                { name: "New Arrivals", href: "#" },
                { name: "Sale", href: "#" },
                { name: "Accessories", href: "#" },
              ],
            },
          ],
          [
            {
              id: "clothing",
              name: "All Clothing",
              items: [
                { name: "Basic Tees", href: "#" },
                { name: "Artwork Tees", href: "#" },
                { name: "Tops", href: "#" },
                { name: "Bottoms", href: "#" },
                { name: "Swimwear", href: "#" },
                { name: "Underwear", href: "#" },
              ],
            },
            {
              id: "accessories",
              name: "All Accessories",
              items: [
                { name: "Watches", href: "#" },
                { name: "Wallets", href: "#" },
                { name: "Bags", href: "#" },
                { name: "Sunglasses", href: "#" },
                { name: "Hats", href: "#" },
                { name: "Belts", href: "#" },
              ],
            },
          ],
          [
            {
              id: "brands",
              name: "Brands",
              items: [
                { name: "Full Nelson", href: "#" },
                { name: "My Way", href: "#" },
                { name: "Re-Arranged", href: "#" },
                { name: "Counterfeit", href: "#" },
                { name: "Significant Other", href: "#" },
              ],
            },
          ],
        ],
      },
      {
        id: "men",
        name: "Men",
        featured: [
          {
            name: "Accessories",
            href: "#",
            imageSrc:
              "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-category-01.jpg",
            imageAlt:
              "Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.",
          },
          {
            name: "New Arrivals",
            href: "#",
            imageSrc:
              "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
            imageAlt:
              "Drawstring top with elastic loop closure and textured interior padding.",
          },
          {
            name: "Artwork Tees",
            href: "#",
            imageSrc:
              "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg",
            imageAlt:
              "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
          },
        ],
        sections: [
          [
            {
              id: "shoes",
              name: "Shoes & Accessories",
              items: [
                { name: "Sneakers", href: "#" },
                { name: "Boots", href: "#" },
                { name: "Sandals", href: "#" },
                { name: "Socks", href: "#" },
              ],
            },
            {
              id: "collection",
              name: "Shop Collection",
              items: [
                { name: "Everything", href: "#" },
                { name: "Core", href: "#" },
                { name: "New Arrivals", href: "#" },
                { name: "Sale", href: "#" },
              ],
            },
          ],
          [
            {
              id: "clothing",
              name: "All Clothing",
              items: [
                { name: "Basic Tees", href: "#" },
                { name: "Artwork Tees", href: "#" },
                { name: "Pants", href: "#" },
                { name: "Hoodies", href: "#" },
                { name: "Swimsuits", href: "#" },
              ],
            },
            {
              id: "accessories",
              name: "All Accessories",
              items: [
                { name: "Watches", href: "#" },
                { name: "Wallets", href: "#" },
                { name: "Bags", href: "#" },
                { name: "Sunglasses", href: "#" },
                { name: "Hats", href: "#" },
                { name: "Belts", href: "#" },
              ],
            },
          ],
          [
            {
              id: "brands",
              name: "Brands",
              items: [
                { name: "Re-Arranged", href: "#" },
                { name: "Counterfeit", href: "#" },
                { name: "Full Nelson", href: "#" },
                { name: "My Way", href: "#" },
              ],
            },
          ],
        ],
      },
    ],
    pages: [
      { name: "Company", href: "#" },
      { name: "Stores", href: "#" },
    ],
  };
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
  const reviews = {
    average: 3.9,
    totalCount: 512,
    featured: [
      {
        id: 1,
        title: "Can't say enough good things",
        rating: 5,
        content: `
          <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
          <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
        `,
        author: "Risako M",
        date: "May 16, 2021",
        datetime: "2021-01-06",
      },
      {
        id: 2,
        title: "Very comfy and looks the part",
        rating: 5,
        content: `
          <p>After a quick chat with customer support, I had a good feeling about this shirt and ordered three of them.</p>
          <p>Less than 48 hours later, my delivery arrived. I haven't worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Winning!</p>
        `,
        author: "Jackie H",
        date: "April 6, 2021",
        datetime: "2021-01-06",
      },
      {
        id: 3,
        title: "The last shirts I may ever need",
        rating: 4,
        content: `
          <p>I bought two of those comfy cotton shirts, and let me tell you: they're amazing! I have been wearing them almost every day. Even after a dozen of washes, that still looks and feel good as new. Will definitely order a few more... If I ever need to!</p>
        `,
        author: "Laura G",
        date: "February 24, 2021",
        datetime: "2021-01-06",
      },
    ],
  };
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
    product?.variants && product.variants.length > 0
      ? Object.keys(product.variants[0].attributes)
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
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-10 px-4 pb-8 pt-10"
                  >
                    <div className="space-y-4">
                      {category.featured.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="group relative overflow-hidden rounded-md bg-gray-100"
                        >
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full object-cover group-hover:opacity-75"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end">
                            <div className="bg-white/60 p-4 text-base sm:text-sm">
                              <Link
                                href={item.href}
                                className="font-medium text-gray-900"
                              >
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0"
                                />
                                {item.name}
                              </Link>
                              <p
                                aria-hidden="true"
                                className="mt-0.5 text-gray-700 sm:mt-1"
                              >
                                Shop now
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((column, columnIdx) => (
                      <div key={columnIdx} className="space-y-10">
                        {column.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <Link
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
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

            <div className="border-t border-gray-200 px-4 py-6">
              <Link href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg"
                  className="block h-auto w-5 shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">
                  CAD
                </span>
                <span className="sr-only">, change currency</span>
              </Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center lg:hidden">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Open menu</span>
                  <Menu aria-hidden="true" className="size-6" />
                </button>

                <Link
                  href="#"
                  className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Search</span>
                  <Search aria-hidden="true" className="size-6" />
                </Link>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:block lg:flex-1 lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
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
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="grid grid-cols-2 grid-rows-1 gap-8 text-sm">
                                {category.featured.map((item, itemIdx) => (
                                  <div
                                    key={item.name}
                                    className={cn(
                                      itemIdx === 0 ? "col-span-2" : "",
                                      "group relative overflow-hidden rounded-md bg-gray-100"
                                    )}
                                  >
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className={cn(
                                        itemIdx === 0
                                          ? "aspect-[2/1]"
                                          : "aspect-square",
                                        "w-full object-cover group-hover:opacity-75"
                                      )}
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end">
                                      <div className="bg-white/60 p-4 text-sm">
                                        <Link
                                          href={item.href}
                                          className="font-medium text-gray-900"
                                        >
                                          <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                          />
                                          {item.name}
                                        </Link>
                                        <p
                                          aria-hidden="true"
                                          className="mt-0.5 text-gray-700 sm:mt-1"
                                        >
                                          Shop now
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="grid grid-cols-3 gap-x-8 gap-y-10 text-sm text-gray-500">
                                {category.sections.map((column, columnIdx) => (
                                  <div key={columnIdx} className="space-y-10">
                                    {column.map((section) => (
                                      <div key={section.name}>
                                        <p
                                          id={`${category.id}-${section.id}-heading`}
                                          className="font-medium text-gray-900"
                                        >
                                          {section.name}
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={`${category.id}-${section.id}-heading`}
                                          className="mt-4 space-y-4"
                                        >
                                          {section.items.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flex"
                                            >
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
                                    ))}
                                  </div>
                                ))}
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

              {/* Logo */}
              <Link href="#" className="flex">
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
                  className="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center"
                >
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg"
                    className="block h-auto w-5 shrink-0"
                  />
                  <span className="ml-3 block text-sm font-medium">CAD</span>
                  <span className="sr-only">, change currency</span>
                </Link>

                {/* Search */}
                <Link
                  href="#"
                  className="ml-6 hidden p-2 text-gray-400 hover:text-gray-500 lg:block"
                >
                  <span className="sr-only">Search</span>
                  <Search aria-hidden="true" className="size-6" />
                </Link>

                {/* Account */}
                <Link
                  href="#"
                  className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4"
                >
                  <span className="sr-only">Account</span>
                  <UserIcon aria-hidden="true" className="size-6" />
                </Link>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
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
        </nav>
      </header>

      <main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
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
                  {reviews.average}
                  <span className="sr-only"> out of 5 stars</span>
                </p>
                <div className="ml-1 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={cn(
                        reviews.average > rating
                          ? "text-yellow-400"
                          : "text-gray-200",
                        "size-5 shrink-0"
                      )}
                    />
                  ))}
                </div>
                <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                  ·
                </div>
                <div className="ml-4 flex">
                  <Link
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    See all {reviews.totalCount} reviews
                  </Link>
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
                  alt={image?.alt}
                  src={image?.url}
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
              <h2 className="text-sm font-medium text-gray-900">Description</h2>

              <div
                dangerouslySetInnerHTML={{
                  __html: product?.description || "no description",
                }}
                className="mt-4 space-y-4 text-sm/6 text-gray-500"
              />
            </div>

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

        {/* Reviews */}
        <section aria-labelledby="reviews-heading" className="mt-16 sm:mt-24">
          <h2
            id="reviews-heading"
            className="text-lg font-medium text-gray-900"
          >
            Recent reviews
          </h2>

          <div className="mt-6 divide-y divide-gray-200 border-b border-t border-gray-200">
            {reviews.featured.map((review) => (
              <div
                key={review.id}
                className="py-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
              >
                <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                  <div className="flex items-center xl:col-span-1">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          aria-hidden="true"
                          className={cn(
                            review.rating > rating
                              ? "text-yellow-400"
                              : "text-gray-200",
                            "size-5 shrink-0"
                          )}
                        />
                      ))}
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                      {review.rating}
                      <span className="sr-only"> out of 5 stars</span>
                    </p>
                  </div>

                  <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                    <h3 className="text-sm font-medium text-gray-900">
                      {review.title}
                    </h3>

                    <div
                      dangerouslySetInnerHTML={{ __html: review.content }}
                      className="mt-3 space-y-6 text-sm text-gray-500"
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                  <p className="font-medium text-gray-900">{review.author}</p>
                  <time
                    dateTime={review.datetime}
                    className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                  >
                    {review.date}
                  </time>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related products */}
        <section aria-labelledby="related-heading" className="mt-16 sm:mt-24">
          <h2
            id="related-heading"
            className="text-lg font-medium text-gray-900"
          >
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative">
                <img
                  alt={relatedProduct?.images[0].alt}
                  src={relatedProduct?.images[0].url}
                  className="aspect-square w-full rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={relatedProduct?.slug}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct?.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {relatedProduct.variants[0].name}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${relatedProduct.variants[0].price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer aria-labelledby="footer-heading">
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
export default ProductPage;
