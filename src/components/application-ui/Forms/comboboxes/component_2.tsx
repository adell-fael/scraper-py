"use client";

import { cn } from "@/utils";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Label,
} from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

const ComboboxSelect = () => {
  type Person = { id: number; name: string; online: boolean };
  const people: Person[] = [
    { id: 1, name: "Leslie Alexander", online: true },
    // More users...
  ];
  const [query, setQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      as="div"
      value={selectedPerson}
      onChange={(person) => {
        setQuery("");
        setSelectedPerson(person);
      }}
    >
      <Label className="block text-sm/6 font-medium text-gray-900">
        Assigned to
      </Label>
      <div className="relative mt-2">
        <ComboboxInput
          className="block w-full rounded-md bg-white py-1.5 pl-3 pr-12 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery("")}
          displayValue={(person: Person) => person?.name}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronDownIcon
            className="size-5 text-gray-400"
            aria-hidden="true"
          />
        </ComboboxButton>

        <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
          {query.length > 0 && (
            <ComboboxOption
              value={{ id: null, name: query }}
              className="cursor-default select-none px-3 py-2 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
            >
              <div className="flex items-center">
                <span
                  className="inline-block size-2 shrink-0 rounded-full border border-gray-400 [[aria-active='true']_&]:border-white/75"
                  aria-hidden="true"
                />
                <span className="ml-3 block truncate">{query}</span>
              </div>
            </ComboboxOption>
          )}
          {filteredPeople.map((person) => (
            <ComboboxOption
              key={person.id}
              value={person}
              className="cursor-default select-none px-3 py-2 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
            >
              <div className="flex items-center">
                <span
                  className={cn(
                    "inline-block size-2 shrink-0 rounded-full",
                    person.online ? "bg-green-400" : "bg-gray-200"
                  )}
                  aria-hidden="true"
                />
                <span className="ml-3 block truncate">
                  {person.name}
                  <span className="sr-only">
                    {" "}
                    is {person.online ? "online" : "offline"}
                  </span>
                </span>
              </div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </div>
    </Combobox>
  );
};

export default ComboboxSelect;
