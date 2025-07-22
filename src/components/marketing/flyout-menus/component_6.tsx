import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  ChevronDown,
  RefreshCcw,
  PieChart,
  MousePointerClick,
  FileBarChart,
  Fingerprint,
  SquareStack,
} from "lucide-react";

const FlyoutMenus = () => {
  const solutions = [
    {
      name: "Analytics",
      description: "Get a better understanding of your traffic",
      href: "#",
      icon: PieChart,
    },
    {
      name: "Integrations",
      description: "Connect with third-party tools and find out expectations",
      href: "#",
      icon: SquareStack,
    },
    {
      name: "Engagement",
      description: "Speak directly to your customers with our engagement tool",
      href: "#",
      icon: MousePointerClick,
    },
    {
      name: "Automations",
      description: "Build strategic funnels that will convert",
      href: "#",
      icon: RefreshCcw,
    },
    {
      name: "Security",
      description: "Your customers' data will be safe and secure",
      href: "#",
      icon: Fingerprint,
    },
    {
      name: "Reports",
      description: "Edit, manage and create newly informed decisions",
      href: "#",
      icon: FileBarChart,
    },
  ];
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
        <span>Solutions</span>
        <ChevronDown aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
          <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
            {solutions.map((item) => (
              <div
                key={item.name}
                className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon
                    aria-hidden="true"
                    className="size-6 text-gray-600 group-hover:text-indigo-600"
                  />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 px-8 py-6">
            <div className="flex items-center gap-x-3">
              <h3 className="text-sm/6 font-semibold text-gray-900">
                Enterprise
              </h3>
              <p className="rounded-full bg-indigo-600/10 px-2.5 py-1.5 text-xs font-semibold text-indigo-600">
                New
              </p>
            </div>
            <p className="mt-2 text-sm/6 text-gray-600">
              Empower your entire team with even more advanced tools.
            </p>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default FlyoutMenus;
