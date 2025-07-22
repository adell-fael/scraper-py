"use client";

import { useState } from "react";

import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {
  Flame,
  Frown,
  HeartIcon,
  Paperclip,
  Smile,
  ThumbsUp,
  X,
} from "lucide-react";
import { cn } from "@/utils";

const TextareaInput = () => {
  const moods = [
    {
      name: "Excited",
      value: "excited",
      icon: Flame,
      iconColor: "text-white",
      bgColor: "bg-red-500",
    },
    {
      name: "Loved",
      value: "loved",
      icon: HeartIcon,
      iconColor: "text-white",
      bgColor: "bg-pink-400",
    },
    {
      name: "Happy",
      value: "happy",
      icon: Smile,
      iconColor: "text-white",
      bgColor: "bg-green-400",
    },
    {
      name: "Sad",
      value: "sad",
      icon: Frown,
      iconColor: "text-white",
      bgColor: "bg-yellow-400",
    },
    {
      name: "Thumbsy",
      value: "thumbsy",
      icon: ThumbsUp,
      iconColor: "text-white",
      bgColor: "bg-blue-500",
    },
    {
      name: "I feel nothing",
      value: null,
      icon: X,
      iconColor: "text-gray-400",
      bgColor: "bg-transparent",
    },
  ];
  const [selected, setSelected] = useState(moods[5]);

  return (
    <div className="flex items-start space-x-4">
      <div className="shrink-0">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block size-10 rounded-full"
        />
      </div>
      <div className="min-w-0 flex-1">
        <form action="#">
          <div className="border-b border-gray-200 pb-px focus-within:border-b-2 focus-within:border-indigo-600 focus-within:pb-0">
            <label htmlFor="comment" className="sr-only">
              Add your comment
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={3}
              placeholder="Add your comment..."
              className="block w-full resize-none text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
              defaultValue={""}
            />
          </div>
          <div className="flex justify-between pt-2">
            <div className="flex items-center space-x-5">
              <div className="flow-root">
                <button
                  type="button"
                  className="-m-2 inline-flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                >
                  <Paperclip aria-hidden="true" className="size-6" />
                  <span className="sr-only">Attach a file</span>
                </button>
              </div>
              <div className="flow-root">
                <Listbox value={selected} onChange={setSelected}>
                  <Label className="sr-only">Your mood</Label>
                  <div className="relative">
                    <ListboxButton className="relative -m-2.5 flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                      <span className="flex items-center justify-center">
                        {selected.value === null ? (
                          <span>
                            <Smile
                              aria-hidden="true"
                              className="size-5 shrink-0"
                            />
                            <span className="sr-only">Add your mood</span>
                          </span>
                        ) : (
                          <span>
                            <span
                              className={cn(
                                selected.bgColor,
                                "flex size-8 items-center justify-center rounded-full"
                              )}
                            >
                              <selected.icon
                                aria-hidden="true"
                                className="size-5 shrink-0 text-white"
                              />
                            </span>
                            <span className="sr-only">{selected.name}</span>
                          </span>
                        )}
                      </span>
                    </ListboxButton>

                    <ListboxOptions
                      transition
                      className="absolute z-10 -ml-6 mt-1 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:ml-auto sm:w-64 sm:text-sm"
                    >
                      {moods.map((mood) => (
                        <ListboxOption
                          key={mood.value}
                          value={mood}
                          className="relative cursor-default select-none bg-white px-3 py-2 data-[focus]:bg-gray-100"
                        >
                          <div className="flex items-center">
                            <div
                              className={cn(
                                mood.bgColor,
                                "flex size-8 items-center justify-center rounded-full"
                              )}
                            >
                              <mood.icon
                                aria-hidden="true"
                                className={cn(
                                  mood.iconColor,
                                  "size-5 shrink-0"
                                )}
                              />
                            </div>
                            <span className="ml-3 block truncate font-medium">
                              {mood.name}
                            </span>
                          </div>
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </div>
                </Listbox>
              </div>
            </div>
            <div className="shrink-0">
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TextareaInput;
