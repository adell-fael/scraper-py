"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { cn } from "@/utils";
import { BellIcon, MenuIcon, Search, X } from "lucide-react";

interface StackedLayoutProps {
  children: React.ReactNode;
}

const StackedLayout: React.FC<StackedLayoutProps> = ({ children }) => {
  const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "Profile", href: "#", current: false },
    { name: "Resources", href: "#", current: false },
    { name: "Company Directory", href: "#", current: false },
    { name: "Openings", href: "#", current: false },
  ];
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-full">
      <header className="bg-indigo-600 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative flex items-center justify-center py-5 lg:justify-between">
            {/* Logo */}
            <div className="absolute left-0 shrink-0 lg:static">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Your Company"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=300"
                  className="h-8 w-auto"
                />
              </a>
            </div>

            {/* Right section on desktop */}
            <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
              <button
                type="button"
                className="relative shrink-0 rounded-full p-1 text-indigo-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-4 shrink-0">
                <div>
                  <MenuButton className="relative flex rounded-full bg-white text-sm ring-2 ring-white/20 focus:outline-none focus-visible:ring-white">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src={user.imageUrl}
                      className="size-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 -mr-2 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:scale-95 data-[closed]:data-[leave]:transform data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-75 data-[leave]:ease-in"
                >
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                      >
                        {item.name}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>

            {/* Search */}
            <div className="min-w-0 flex-1 px-12 lg:hidden">
              <div className="mx-auto grid w-full max-w-xs grid-cols-1">
                <input
                  name="search"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="peer col-start-1 row-start-1 block w-full rounded-md bg-white/20 py-1.5 pl-10 pr-3 text-base text-white outline-none placeholder:text-white focus:bg-white focus:text-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white/40 focus:placeholder:text-gray-400 sm:text-sm/6"
                />
                <Search
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-white peer-focus:text-gray-400"
                />
              </div>
            </div>

            {/* Menu button */}
            <div className="absolute right-0 shrink-0 lg:hidden">
              {/* Mobile menu button */}
              <button
                onClick={() => setOpen(true)}
                className="relative inline-flex items-center justify-center rounded-md bg-transparent p-2 text-indigo-200 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <MenuIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
          </div>
          <div className="hidden border-t border-white/20 py-5 lg:block">
            <div className="grid grid-cols-3 items-center gap-8">
              <div className="col-span-2">
                <nav className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={cn(
                        item.current ? "text-white" : "text-indigo-100",
                        "rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="mx-auto grid w-full max-w-md grid-cols-1">
                <input
                  name="search"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="peer col-start-1 row-start-1 block w-full rounded-md bg-white/20 py-1.5 pl-10 pr-3 text-sm/6 text-white outline-none placeholder:text-white focus:bg-white focus:text-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white/40 focus:placeholder:text-gray-400"
                />
                <Search
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-white peer-focus:text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>

        <Dialog open={open} onClose={setOpen} className="lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 z-20 bg-black/25 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
          />

          <DialogPanel
            transition
            className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black/5">
              <div className="pb-2 pt-3">
                <div className="flex items-center justify-between px-4">
                  <div>
                    <img
                      alt="Your Company"
                      src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      onClick={() => setOpen(false)}
                      className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500"
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <X aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  <a
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Resources
                  </a>
                  <a
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Company Directory
                  </a>
                  <a
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Openings
                  </a>
                </div>
              </div>
              <div className="pb-2 pt-4">
                <div className="flex items-center px-5">
                  <div className="shrink-0">
                    <img
                      alt=""
                      src={user.imageUrl}
                      className="size-10 rounded-full"
                    />
                  </div>
                  <div className="ml-3 min-w-0 flex-1">
                    <div className="truncate text-base font-medium text-gray-800">
                      {user.name}
                    </div>
                    <div className="truncate text-sm font-medium text-gray-500">
                      {user.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <main className="-mt-24 pb-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="sr-only">Page title</h1>
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
            {/* Left column */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              <section aria-labelledby="section-1-title">
                <h2 id="section-1-title" className="sr-only">
                  Section title
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="p-6">{/* Your content */}</div>
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="grid grid-cols-1 gap-4">
              <section aria-labelledby="section-2-title">
                <h2 id="section-2-title" className="sr-only">
                  Section title
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="p-6">
                    {/* Your content */}
                    {children}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
            <span className="block sm:inline">
              &copy; 2021 Your Company, Inc.
            </span>{" "}
            <span className="block sm:inline">All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StackedLayout;
