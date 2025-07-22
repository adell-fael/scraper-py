import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  ChevronDown,
  Phone,
  PlayCircle,
  LayoutGrid,
  PieChart,
  MousePointerClick,
  Fingerprint,
  SquareStack,
} from "lucide-react";

const FlyoutMenus = () => {
  const solutions = [
    {
      name: "Analytics",
      description:
        "Get a better understanding of where your traffic is coming from",
      href: "#",
      icon: PieChart,
    },
    {
      name: "Engagement",
      description: "Speak directly to your customers with our engagement tool",
      href: "#",
      icon: MousePointerClick,
    },
    {
      name: "Security",
      description: "Your customers' data will be safe and secure",
      href: "#",
      icon: Fingerprint,
    },
    {
      name: "Integrations",
      description: "Connect with third-party tools that you're already using",
      href: "#",
      icon: SquareStack,
    },
  ];
  const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircle },
    { name: "Contact sales", href: "#", icon: Phone },
    { name: "View all products", href: "#", icon: LayoutGrid },
  ];
  return (
    <Popover className="relative isolate z-50 shadow">
      <div className="bg-white py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
            Solutions
            <ChevronDown aria-hidden="true" className="size-5" />
          </PopoverButton>
        </div>
      </div>

      <PopoverPanel
        transition
        className="absolute inset-x-0 top-16 bg-white transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 top-1/2 bg-white shadow-lg ring-1 ring-gray-900/5"
        />
        <div className="relative bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
            {solutions.map((item) => (
              <div
                key={item.name}
                className="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50"
              >
                <div className="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon
                    aria-hidden="true"
                    className="size-6 text-gray-600 group-hover:text-indigo-600"
                  />
                </div>
                <a
                  href={item.href}
                  className="mt-6 block font-semibold text-gray-900"
                >
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default FlyoutMenus;
