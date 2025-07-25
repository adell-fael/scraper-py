
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Menu as MenuIcon, Bell as BellIcon, X as XMarkIcon } from 'lucide-react'
import { cn } from '@/utils'
import { FC } from 'react'

const NavigationBar: FC = () => {
  const logoUrl = "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600";
  const profileImageUrl = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  return (
    <Disclosure as="nav" className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src={logoUrl}
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className={cn("inline-flex items-center px-1 pt-1 text-sm font-medium", "border-b-2 border-indigo-500 text-gray-900")}
              >
                Dashboard
              </a>
              <a
                href="#"
                className={cn("inline-flex items-center px-1 pt-1 text-sm font-medium", "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700")}
              >
                Team
              </a>
              <a
                href="#"
                className={cn("inline-flex items-center px-1 pt-1 text-sm font-medium", "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700")}
              >
                Projects
              </a>
              <a
                href="#"
                className={cn("inline-flex items-center px-1 pt-1 text-sm font-medium", "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700")}
              >
                Calendar
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              type="button"
              className={cn("relative rounded-full bg-white p-1", "text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2")}
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className={cn("relative flex rounded-full bg-white text-sm", "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2")}>
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src={profileImageUrl}
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className={cn("absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none", "data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in")}
              >
                <MenuItem>
                  <a
                    href="#"
                    className={cn("block px-4 py-2 text-sm text-gray-700", "data-[focus]:bg-gray-100 data-[focus]:outline-none")}
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className={cn("block px-4 py-2 text-sm text-gray-700", "data-[focus]:bg-gray-100 data-[focus]:outline-none")}
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className={cn("block px-4 py-2 text-sm text-gray-700", "data-[focus]:bg-gray-100 data-[focus]:outline-none")}
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <DisclosureButton className={cn("group relative inline-flex items-center justify-center rounded-md p-2", "text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500")}>
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <MenuIcon aria-hidden="true" className={cn("block size-6", "group-data-[open]:hidden")} />
              <XMarkIcon aria-hidden="true" className={cn("hidden size-6", "group-data-[open]:block")} />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pb-3 pt-2">
          <DisclosureButton
            as="a"
            href="#"
            className={cn("block border-l-4 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium", "border-indigo-500 text-indigo-700")}
          >
            Dashboard
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className={cn("block border-l-4 py-2 pl-3 pr-4 text-base font-medium", "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700")}
          >
            Team
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className={cn("block border-l-4 py-2 pl-3 pr-4 text-base font-medium", "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700")}
          >
            Projects
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className={cn("block border-l-4 py-2 pl-3 pr-4 text-base font-medium", "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700")}
          >
            Calendar
          </DisclosureButton>
        </div>
        <div className="border-t border-gray-200 pb-3 pt-4">
          <div className="flex items-center px-4">
            <div className="shrink-0">
              <img
                alt=""
                src={profileImageUrl}
                className="size-10 rounded-full"
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">Tom Cook</div>
              <div className="text-sm font-medium text-gray-500">tom@example.com</div>
            </div>
            <button
              type="button"
              className={cn("relative ml-auto shrink-0 rounded-full bg-white p-1", "text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2")}
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1">
            <DisclosureButton
              as="a"
              href="#"
              className={cn("block px-4 py-2 text-base font-medium", "text-gray-500 hover:bg-gray-100 hover:text-gray-800")}
            >
              Your Profile
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className={cn("block px-4 py-2 text-base font-medium", "text-gray-500 hover:bg-gray-100 hover:text-gray-800")}
            >
              Settings
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className={cn("block px-4 py-2 text-base font-medium", "text-gray-500 hover:bg-gray-100 hover:text-gray-800")}
            >
              Sign out
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default NavigationBar;
