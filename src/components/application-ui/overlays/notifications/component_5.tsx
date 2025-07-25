"use client";

import { useState, FC } from "react";
import { Transition } from "@headlessui/react";
import { Bell, XCircle } from "lucide-react";

const NotificationPanel: FC = () => {
  const [show, setShow] = useState(true);

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        <Transition show={show}>
          <div className="pointer-events-auto flex w-full max-w-md divide-x divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
            <div className="flex w-0 flex-1 items-center p-4">
              <div className="w-full">
                <p className="text-sm font-medium text-gray-900">
                  <Bell /> Receive notifications
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Notifications may include alerts, sounds, and badges.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col divide-y divide-gray-200">
                <div className="flex h-0 flex-1">
                  <button
                    type="button"
                    onClick={() => {
                      setShow(false);
                    }}
                    className="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <XCircle /> Reply
                  </button>
                </div>
                <div className="flex h-0 flex-1">
                  <button
                    type="button"
                    onClick={() => {
                      setShow(false);
                    }}
                    className="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <XCircle /> Don't allow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default NotificationPanel;
