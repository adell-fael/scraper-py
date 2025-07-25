import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const FlyoutMenus = () => {
  const solutions = [
    { name: "Analytics", href: "#" },
    { name: "Engagement", href: "#" },
    { name: "Security", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "Automations", href: "#" },
    { name: "Reports", href: "#" },
  ];
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
        <span>Solutions</span>
        <ChevronDown aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-56 shrink rounded-xl bg-white p-4 text-sm/6 font-semibold text-gray-900 shadow-lg ring-1 ring-gray-900/5">
          {solutions.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block p-2 hover:text-indigo-600"
            >
              {item.name}
            </a>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default FlyoutMenus;
