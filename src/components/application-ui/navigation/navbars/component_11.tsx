import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { Search, Menu as MenuIcon, X, Bell } from "lucide-react";
import { cn } from "@/utils";
import { FC } from 'react'

const NavigationBar: FC = () => {
  const user = {
    name: "Chelsea Hagon",
    email: "chelsea.hagon@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };

  const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Calendar", href: "#", current: false },
    { name: "Teams", href: "#", current: false },
    { name: "Directory", href: "#", current: false },
  ];

  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];

  return (
    <Popover as="header" className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
          <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
            <div className="flex-shrink-0 items-center">
              <a href="#">
                <img
                  alt="Your Company"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
            </div>
          </div>
          <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
            <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
              <div className="grid w-full grid-cols-1">
                <input
                  name="search"
                  type="search"
                  placeholder="Search"
                  className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
                <Search className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
            <PopoverButton className="group relative -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="block size-6 group-data-[open]:hidden" />
              <X className="hidden size-6 group-data-[open]:block" />
            </PopoverButton>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
            <button
              type="button"
              className="relative ml-5 flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="sr-only">View notifications</span>
              <Bell className="size-6" />
            </button>
            <Menu as="div" className="relative ml-5 flex-shrink-0">
              <div>
                <MenuButton className="relative flex rounded-full bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
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
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none"
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
            <a
              href="#"
              className="ml-6 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-600"
            >
              New Project
            </a>
          </div>
        </div>
      </div>
      <PopoverPanel
        as="nav"
        aria-label="Global"
        className="absolute left-1/2 z-10 w-full -translate-x-1/2 lg:hidden"
      >
        <div className="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={cn(
                item.current ? "bg-gray-100 text-gray-900" : "hover:bg-gray-50",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="border-t border-gray-200 pb-3 pt-4">
          <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
            <div className="flex-shrink-0">
              <img
                alt=""
                src={user.imageUrl}
                className="size-10 rounded-full"
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">
                {user.name}
              </div>
              <div className="text-sm font-medium text-gray-500">
                {user.email}
              </div>
            </div>
            <button
              type="button"
              className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="sr-only">View notifications</span>
              <Bell className="size-6" />
            </button>
          </div>
          <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
            {userNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default NavigationBar;
