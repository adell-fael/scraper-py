"use client";

import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import { cn } from "@/utils";

const SelectInput = () => {
  const people = [
    { id: 1, name: "Wade Cooper", online: true },
    { id: 2, name: "Arlene Mccoy", online: false },
    { id: 3, name: "Devon Webb", online: false },
    { id: 4, name: "Tom Cook", online: true },
    { id: 5, name: "Tanya Fox", online: false },
    { id: 6, name: "Hellen Schmidt", online: true },
    { id: 7, name: "Caroline Schultz", online: true },
    { id: 8, name: "Mason Heaney", online: false },
    { id: 9, name: "Claudie Smitham", online: true },
    { id: 10, name: "Emil Schaefer", online: false },
  ];
  const [selected, setSelected] = useState(people[3]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block text-sm/6 font-medium text-gray-900">
        Assigned to
      </Label>
      <div className="relative mt-2">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <span
              aria-label={selected.online ? "Online" : "Offline"}
              className={cn(
                selected.online
                  ? "bg-green-400 forced-colors:bg-[Highlight]"
                  : "bg-gray-200",
                "inline-block size-2 shrink-0 rounded-full border border-transparent"
              )}
            />
            <span className="block truncate">{selected.name}</span>
          </span>
          <ChevronsUpDown
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
            >
              <div className="flex items-center">
                <span
                  aria-hidden="true"
                  className={cn(
                    person.online
                      ? "bg-green-400 forced-colors:bg-[Highlight]"
                      : "bg-gray-200",
                    "inline-block size-2 shrink-0 rounded-full border border-transparent"
                  )}
                />
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {person.name}
                  <span className="sr-only">
                    {" "}
                    is {person.online ? "online" : "offline"}
                  </span>
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[:not([data-selected])]:hidden group-data-[focus]:text-white">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}

export default SelectInput;
