'use client'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from 'lucide-react'

const SelectInput = () => {
  
  const publishingOptions = [
  
    {
      value: 'published',
      title: 'Published',
      description: 'This job posting can be viewed by anyone who has the link.',
      current: true,
    },
    {
      value: 'draft',
      title: 'Draft',
      description: 'This job posting will no longer be publicly accessible.',
      current: false,
    },
  
  ]
  const [selected, setSelected] = useState(publishingOptions[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="sr-only">Change published status</Label>
      <div className="relative">
        <div className="inline-flex divide-x divide-indigo-700 rounded-md outline-none">
          <div className="inline-flex items-center gap-x-1.5 rounded-l-md bg-indigo-600 px-3 py-2 text-white">
            <CheckIcon aria-hidden="true" className="-ml-0.5 size-5" />
            <p className="text-sm font-semibold">{selected.title}</p>
          </div>
          <ListboxButton className="inline-flex items-center rounded-l-none rounded-r-md bg-indigo-600 p-2 hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400">
            <span className="sr-only">Change published status</span>
            <ChevronDownIcon aria-hidden="true" className="size-5 text-white forced-colors:text-[Highlight]" />
          </ListboxButton>
        </div>

        <ListboxOptions
          transition
          className="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in"
        >
          {publishingOptions.map((option) => (
            <ListboxOption
              key={option.title}
              value={option}
              className="group cursor-default select-none p-4 text-sm text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p className="font-normal group-data-[selected]:font-semibold">{option.title}</p>
                  <span className="text-indigo-600 group-[:not([data-selected])]:hidden group-data-[focus]:text-white">
                    <CheckIcon aria-hidden="true" className="size-5" />
                  </span>
                </div>
                <p className="mt-2 text-gray-500 group-data-[focus]:text-indigo-200">{option.description}</p>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}

export default SelectInput;
