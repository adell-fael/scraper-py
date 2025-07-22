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
import { Search } from "lucide-react";
import { FilePlus, Folder, Hash, Tag } from "lucide-react";
import { useState, FC } from "react";

const CommandPaletteNav: FC = () => {
  type Project = { id: number; name: string; url: string };
  const projects: Project[] = [
    { id: 1, name: "Workflow Inc. / Website Redesign", url: "#" },
  ];

  const recent = [projects[0]];
  const quickActions = [
    { name: "Add new file...", icon: FilePlus, shortcut: "N", url: "#" },
    { name: "Add new folder...", icon: Folder, shortcut: "F", url: "#" },
    { name: "Add hashtag...", icon: Hash, shortcut: "H", url: "#" },
    { name: "Add label...", icon: Tag, shortcut: "L", url: "#" },
  ];
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(true);

  const filteredProjects =
    query === ""
      ? []
      : projects.filter((project) => {
          return project.name.toLowerCase().includes(query.toLowerCase());
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
          className="mx-auto max-w-2xl transform divide-y divide-gray-500/20 overflow-hidden rounded-xl bg-gray-900 shadow-2xl transition-all data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <Combobox<Project>
            onChange={(item) => {
              if (item) {
                window.location.href = item.url;
              }
            }}
          >
            <div className="grid grid-cols-1">
              <ComboboxInput
                autoFocus
                className="col-start-1 row-start-1 h-12 w-full bg-transparent pl-11 pr-4 text-base text-white outline-none placeholder:text-gray-500 sm:text-sm"
                placeholder="Search..."
                onChange={(event) => setQuery(event.target.value)}
                onBlur={() => setQuery("")}
              />
              <Search
                className="pointer-events-none col-start-1 row-start-1 ml-4 size-5 self-center text-gray-500"
                aria-hidden="true"
              />
            </div>

            {(query === "" || filteredProjects.length > 0) && (
              <ComboboxOptions
                static
                as="ul"
                className="max-h-80 scroll-py-2 divide-y divide-gray-500/20 overflow-y-auto"
              >
                <li className="p-2">
                  {query === "" && (
                    <h2 className="mb-2 mt-4 px-3 text-xs font-semibold text-gray-200">
                      Recent searches
                    </h2>
                  )}
                  <ul className="text-sm text-gray-400">
                    {(query === "" ? recent : filteredProjects).map(
                      (project) => (
                        <ComboboxOption
                          key={project.id}
                          value={project}
                          className="group flex cursor-default select-none items-center rounded-md px-3 py-2 data-[focus]:bg-gray-800 data-[focus]:text-white data-[focus]:outline-none"
                        >
                          <Folder
                            className="size-6 flex-none text-gray-500 group-data-[focus]:text-white forced-colors:group-data-[focus]:text-[Highlight]"
                            aria-hidden="true"
                          />
                          <span className="ml-3 flex-auto truncate">
                            {project.name}
                          </span>
                          <span className="ml-3 hidden flex-none text-gray-400 group-data-[focus]:inline">
                            Jump to...
                          </span>
                        </ComboboxOption>
                      )
                    )}
                  </ul>
                </li>
                {query === "" && (
                  <li className="p-2">
                    <h2 className="sr-only">Quick actions</h2>
                    <ul className="text-sm text-gray-400">
                      {quickActions.map((action) => (
                        <ComboboxOption
                          key={action.shortcut}
                          value={action}
                          className="group flex cursor-default select-none items-center rounded-md px-3 py-2 data-[focus]:bg-gray-800 data-[focus]:text-white data-[focus]:outline-none"
                        >
                          <action.icon
                            className="size-6 flex-none text-gray-500 group-data-[focus]:text-white forced-colors:group-data-[focus]:text-[Highlight]"
                            aria-hidden="true"
                          />
                          <span className="ml-3 flex-auto truncate">
                            {action.name}
                          </span>
                          <span className="ml-3 flex-none text-xs font-semibold text-gray-400">
                            <kbd className="font-sans">⌘</kbd>
                            <kbd className="font-sans">{action.shortcut}</kbd>
                          </span>
                        </ComboboxOption>
                      ))}
                    </ul>
                  </li>
                )}
              </ComboboxOptions>
            )}

            {query !== "" && filteredProjects.length === 0 && (
              <div className="px-6 py-14 text-center sm:px-14">
                <Folder
                  className="mx-auto size-6 text-gray-500"
                  aria-hidden="true"
                />
                <p className="mt-4 text-sm text-gray-200">
                  We couldn't find any projects with that term. Please try
                  again.
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
