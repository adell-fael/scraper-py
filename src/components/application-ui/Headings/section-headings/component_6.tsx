import { cn } from "@/utils";
import { ChevronDownIcon } from "lucide-react";

const SectionHeading = () => {
  const tabs = [
    { name: "Applied", href: "#", current: false },
    { name: "Phone Screening", href: "#", current: false },
    { name: "Interview", href: "#", current: true },
    { name: "Offer", href: "#", current: false },
    { name: "Hired", href: "#", current: false },
  ];
  return (
    <div className="border-b border-gray-200 pb-5 sm:pb-0">
      <h3 className="text-base font-semibold text-gray-900">Candidates</h3>
      <div className="mt-3 sm:mt-4">
        <div className="grid grid-cols-1 sm:hidden">
          <select
            defaultValue={tabs?.find((tab) => tab?.current)?.name}
            aria-label="Select a tab"
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
          />
        </div>
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? "page" : undefined}
                className={cn(
                  tab.current
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
