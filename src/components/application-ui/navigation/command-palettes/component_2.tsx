"use client";

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Dialog,
  DialogPanel,
  DialogBackdrop,
} from "@headlessui/react";
import { UserCircle } from "lucide-react";
import { useState, FC } from "react";

const CommandPaletteNav: FC = () => {
  type Person = { id: number; name: string; url: string };
  const people: Person[] = [
    { id: 1, name: "Leslie Alexander", url: "#" },
    // More people...
  ];
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(true);

  const filteredPeople =
    query === ""
      ? []
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
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
          className="mx-auto max-w-xl transform rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black/5 transition-all data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <Combobox<Person>
            onChange={(person) => {
              if (person && typeof window !== "undefined") {
                window.location.href = person.url;
              }
            }}
          >
            <ComboboxInput
              autoFocus
              className="w-full rounded-md bg-gray-100 px-4 py-2.5 text-gray-900 outline-none placeholder:text-gray-500 sm:text-sm"
              placeholder="Search..."
              onChange={(event) => setQuery(event.target.value)}
              onBlur={() => setQuery("")}
            />

            {filteredPeople.length > 0 && (
              <ComboboxOptions
                static
                className="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
              >
                {filteredPeople.map((person) => (
                  <ComboboxOption
                    key={person.id}
                    value={person}
                    className="cursor-default select-none rounded-md px-4 py-2 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                  >
                    {person.name}
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            )}

            {query !== "" && filteredPeople.length === 0 && (
              <div className="px-4 py-14 text-center sm:px-14">
                <UserCircle
                  className="mx-auto size-6 text-gray-400"
                  aria-hidden="true"
                />
                <p className="mt-4 text-sm text-gray-900">
                  No people found using that search term.
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
