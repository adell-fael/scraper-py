"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import {
  BellIcon,
  X,
  ArrowDownCircleIcon,
  ArrowUpIcon,
  ArrowUpCircleIcon,
  Menu as Bars,
  Ellipsis,
  PlusIcon,
} from "lucide-react";
import { cn } from "@/utils";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: "Home", href: "#" },
    { name: "Invoices", href: "#" },
    { name: "Clients", href: "#" },
    { name: "Expenses", href: "#" },
  ];
  const secondaryNavigation = [
    { name: "Last 7 days", href: "#", current: true },
    { name: "Last 30 days", href: "#", current: false },
    { name: "All-time", href: "#", current: false },
  ];
  const stats = [
    {
      name: "Revenue",
      value: "$405,091.00",
      change: "+4.75%",
      changeType: "positive",
    },
    {
      name: "Overdue invoices",
      value: "$12,787.00",
      change: "+54.02%",
      changeType: "negative",
    },
    {
      name: "Outstanding invoices",
      value: "$245,988.00",
      change: "-1.39%",
      changeType: "positive",
    },
    {
      name: "Expenses",
      value: "$30,156.00",
      change: "+10.18%",
      changeType: "negative",
    },
  ];
  type Status = "Paid" | "Withdraw" | "Overdue";
  const statuses: Record<Status, string> = {
    Paid: "text-green-700 bg-green-50 ring-green-600/20",
    Withdraw: "text-gray-600 bg-gray-50 ring-gray-500/10",
    Overdue: "text-red-700 bg-red-50 ring-red-600/10",
  };

  // Transaction type
  interface Transaction {
    id: number;
    invoiceNumber: string;
    href: string;
    amount: string;
    tax: string;
    status: Status; // Enforce valid statuses
    client: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Heroicon type
  }

  // Day type
  interface Day {
    date: string;
    dateTime: string;
    transactions: Transaction[];
  }

  const days: Day[] = [
    {
      date: "Today",
      dateTime: "2023-03-22",
      transactions: [
        {
          id: 1,
          invoiceNumber: "00012",
          href: "#",
          amount: "$7,600.00 USD",
          tax: "$500.00",
          status: "Paid",
          client: "Reform",
          description: "Website redesign",
          icon: ArrowUpCircleIcon,
        },
        {
          id: 2,
          invoiceNumber: "00011",
          href: "#",
          amount: "$10,000.00 USD",
          status: "Withdraw",
          client: "Tom Cook",
          tax: "0,00",
          description: "Salary",
          icon: ArrowDownCircleIcon,
        },
        {
          id: 3,
          invoiceNumber: "00009",
          href: "#",
          amount: "$2,000.00 USD",
          tax: "$130.00",
          status: "Overdue",
          client: "Tuple",
          description: "Logo design",
          icon: ArrowUpIcon,
        },
      ],
    },
    {
      date: "Yesterday",
      dateTime: "2023-03-21",
      transactions: [
        {
          id: 4,
          invoiceNumber: "00010",
          href: "#",
          amount: "$14,000.00 USD",
          tax: "$900.00",
          status: "Paid",
          client: "SavvyCal",
          description: "Website redesign",
          icon: ArrowUpCircleIcon,
        },
      ],
    },
  ];

  interface Invoice {
    date: string;
    dateTime: string;
    amount: string;
    status: Status;
  }

  interface Customer {
    id: number;
    name: string;
    imageUrl: string;
    lastInvoice: Invoice;
  }
  const clients: Customer[] = [
    {
      id: 1,
      name: "Tuple",
      imageUrl: "https://tailwindcss.com/plus-assets/img/logos/48x48/tuple.svg",
      lastInvoice: {
        date: "December 13, 2022",
        dateTime: "2022-12-13",
        amount: "$2,000.00",
        status: "Overdue",
      },
    },
    {
      id: 2,
      name: "SavvyCal",
      imageUrl:
        "https://tailwindcss.com/plus-assets/img/logos/48x48/savvycal.svg",
      lastInvoice: {
        date: "January 22, 2023",
        dateTime: "2023-01-22",
        amount: "$14,000.00",
        status: "Paid",
      },
    },
    {
      id: 3,
      name: "Reform",
      imageUrl:
        "https://tailwindcss.com/plus-assets/img/logos/48x48/reform.svg",
      lastInvoice: {
        date: "January 23, 2023",
        dateTime: "2023-01-23",
        amount: "$7,600.00",
        status: "Paid",
      },
    },
  ];
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center gap-x-6">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-3 p-3 md:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <Bars aria-hidden="true" className="size-5 text-gray-900" />
            </button>
            <img
              alt="Your Company"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </div>
          <nav className="hidden md:flex md:gap-x-11 md:text-sm/6 md:font-semibold md:text-gray-700">
            {navigation.map((item, itemIdx) => (
              <a key={itemIdx} href={item.href}>
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-end gap-x-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your profile</span>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-8 rounded-full bg-gray-800"
              />
            </a>
          </div>
        </div>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="-ml-0.5 flex h-16 items-center gap-x-6">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
              <div className="-ml-0.5">
                <a href="#" className="-m-1.5 block p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
              </div>
            </div>
            <div className="mt-2 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main>
        <div className="relative isolate overflow-hidden pt-16">
          {/* Secondary navigation */}
          <header className="pb-4 pt-6 sm:pb-6">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
              <h1 className="text-base/7 font-semibold text-gray-900">
                Cashflow
              </h1>
              <div className="order-last flex w-full gap-x-8 text-sm/6 font-semibold sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:text-sm/7">
                {secondaryNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={
                      item.current ? "text-indigo-600" : "text-gray-700"
                    }
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <PlusIcon aria-hidden="true" className="-ml-1.5 size-5" />
                New invoice
              </a>
            </div>
          </header>

          {/* Stats */}
          <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
            <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
              {stats.map((stat, statIdx) => (
                <div
                  key={stat.name}
                  className={cn(
                    statIdx % 2 === 1
                      ? "sm:border-l"
                      : statIdx === 2
                      ? "lg:border-l"
                      : "",
                    "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8"
                  )}
                >
                  <dt className="text-sm/6 font-medium text-gray-500">
                    {stat.name}
                  </dt>
                  <dd
                    className={cn(
                      stat.changeType === "negative"
                        ? "text-rose-600"
                        : "text-gray-700",
                      "text-xs font-medium"
                    )}
                  >
                    {stat.change}
                  </dd>
                  <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            aria-hidden="true"
            className="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
          >
            <div
              style={{
                clipPath:
                  "polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
              }}
              className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
            />
          </div>
        </div>

        <div className="space-y-16 py-16 xl:space-y-20">
          {/* Recent activity table */}
          <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mx-auto max-w-2xl text-base font-semibold text-gray-900 lg:mx-0 lg:max-w-none">
                Recent activity
              </h2>
            </div>
            <div className="mt-6 overflow-hidden border-t border-gray-100">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                  <table className="w-full text-left">
                    <thead className="sr-only">
                      <tr>
                        <th>Amount</th>
                        <th className="hidden sm:table-cell">Client</th>
                        <th>More details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {days.map((day) => (
                        <Fragment key={day.dateTime}>
                          <tr className="text-sm/6 text-gray-900">
                            <th
                              scope="colgroup"
                              colSpan={3}
                              className="relative isolate py-2 font-semibold"
                            >
                              <time dateTime={day.dateTime}>{day.date}</time>
                              <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                              <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                            </th>
                          </tr>
                          {day.transactions.map((transaction) => (
                            <tr key={transaction.id}>
                              <td className="relative py-5 pr-6">
                                <div className="flex gap-x-6">
                                  <transaction.icon
                                    aria-hidden="true"
                                    className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                                  />
                                  <div className="flex-auto">
                                    <div className="flex items-start gap-x-3">
                                      <div className="text-sm/6 font-medium text-gray-900">
                                        {transaction.amount}
                                      </div>
                                      <div
                                        className={cn(
                                          statuses[transaction.status],
                                          "rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                                        )}
                                      >
                                        {transaction.status}
                                      </div>
                                    </div>
                                    {transaction.tax ? (
                                      <div className="mt-1 text-xs/5 text-gray-500">
                                        {transaction.tax} tax
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                                <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                                <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                              </td>
                              <td className="hidden py-5 pr-6 sm:table-cell">
                                <div className="text-sm/6 text-gray-900">
                                  {transaction.client}
                                </div>
                                <div className="mt-1 text-xs/5 text-gray-500">
                                  {transaction.description}
                                </div>
                              </td>
                              <td className="py-5 text-right">
                                <div className="flex justify-end">
                                  <a
                                    href={transaction.href}
                                    className="text-sm/6 font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    View
                                    <span className="hidden sm:inline">
                                      {" "}
                                      transaction
                                    </span>
                                    <span className="sr-only">
                                      , invoice #{transaction.invoiceNumber},{" "}
                                      {transaction.client}
                                    </span>
                                  </a>
                                </div>
                                <div className="mt-1 text-xs/5 text-gray-500">
                                  Invoice{" "}
                                  <span className="text-gray-900">
                                    #{transaction.invoiceNumber}
                                  </span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Recent client list*/}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="flex items-center justify-between">
                <h2 className="text-base/7 font-semibold text-gray-900">
                  Recent clients
                </h2>
                <a
                  href="#"
                  className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  View all<span className="sr-only">, clients</span>
                </a>
              </div>
              <ul
                role="list"
                className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
              >
                {clients.map((client) => (
                  <li
                    key={client.id}
                    className="overflow-hidden rounded-xl border border-gray-200"
                  >
                    <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                      <img
                        alt={client.name}
                        src={client.imageUrl}
                        className="size-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                      />
                      <div className="text-sm/6 font-medium text-gray-900">
                        {client.name}
                      </div>
                      <Menu as="div" className="relative ml-auto">
                        <MenuButton className="relative block text-gray-400 hover:text-gray-500">
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Open options</span>
                          <Ellipsis aria-hidden="true" className="size-5" />
                        </MenuButton>
                        <MenuItems
                          transition
                          className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <MenuItem>
                            <a
                              href="#"
                              className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                            >
                              View
                              <span className="sr-only">, {client.name}</span>
                            </a>
                          </MenuItem>
                          <MenuItem>
                            <a
                              href="#"
                              className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                            >
                              Edit
                              <span className="sr-only">, {client.name}</span>
                            </a>
                          </MenuItem>
                        </MenuItems>
                      </Menu>
                    </div>
                    <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm/6">
                      <div className="flex justify-between gap-x-4 py-3">
                        <dt className="text-gray-500">Last invoice</dt>
                        <dd className="text-gray-700">
                          <time dateTime={client.lastInvoice.dateTime}>
                            {client.lastInvoice.date}
                          </time>
                        </dd>
                      </div>
                      <div className="flex justify-between gap-x-4 py-3">
                        <dt className="text-gray-500">Amount</dt>
                        <dd className="flex items-start gap-x-2">
                          <div className="font-medium text-gray-900">
                            {client.lastInvoice.amount}
                          </div>
                          <div
                            className={cn(
                              statuses[client.lastInvoice.status],
                              "rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                            )}
                          >
                            {client.lastInvoice.status}
                          </div>
                        </dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
