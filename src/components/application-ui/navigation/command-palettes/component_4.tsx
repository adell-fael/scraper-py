"use client";

import { FC, useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Dialog,
  DialogPanel,
  DialogBackdrop,
} from "@headlessui/react";
import { Search } from "lucide-react";
import { AlertCircle, Edit } from "lucide-react";
import { cn } from "@/utils";


const CommandPaletteNav: FC = () => {
  interface Item {
    id: number;
    name: string;
    description: string;
    url: string;
    color: string;
    icon: any;
  }
  const items: Item[] = [
    {
      id: 1,
      name: "Text",
      description: "Add freeform text with basic formatting options.",
      url: "#",
      color: "bg-indigo-500",
      icon: Edit,
    },
    // More items...
  ];
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(true);

  const filteredItems =
    query === ""
      ? []
      : items.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Dialog
      className="relative z-10"
      open={open}
      onClose={() => {
        setOpen(false);
        setQuery("");
      }}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/25 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
        <DialogPanel
          transition
          className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5 transition-all data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <Combobox<Item>
            onChange={(item) => {
              if (item && typeof window !== "undefined") {
                window.location.href = item.url;
              }
            }}
          >
            <div className="grid grid-cols-1">
              <ComboboxInput
                autoFocus
                className="col-start-1 row-start-1 h-12 w-full pl-11 pr-4 text-base text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm"
                placeholder="Search..."
                onChange={(event) => setQuery(event.target.value)}
                onBlur={() => setQuery("")}
              />
              <Search
                className="pointer-events-none col-start-1 row-start-1 ml-4 size-5 self-center text-gray-400"
                aria-hidden="true"
              />
            </div>

            {filteredItems.length > 0 && (
              <ComboboxOptions
                static
                className="max-h-96 transform-gpu scroll-py-3 overflow-y-auto p-3"
              >
                {filteredItems.map((item) => (
                  <ComboboxOption
                    key={item.id}
                    value={item}
                    className="group flex cursor-default select-none rounded-xl p-3 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    <div
                      className={cn(
                        "flex size-10 flex-none items-center justify-center rounded-lg",
                        item.color
                      )}
                    >
                      <item.icon
                        className="size-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-4 flex-auto">
                      <p className="text-sm font-medium text-gray-700 group-data-[focus]:text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500 group-data-[focus]:text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            )}

            {query !== "" && filteredItems.length === 0 && (
              <div className="px-6 py-14 text-center text-sm sm:px-14">
                <AlertCircle className="mx-auto size-6 text-gray-400" />
                <p className="mt-4 font-semibold text-gray-900">
                  No results found
                </p>
                <p className="mt-2 text-gray-500">
                  No components found for this search term. Please try again.
                </p>
              </div>
            )}
          </Combobox>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default CommandPaletteNav;
