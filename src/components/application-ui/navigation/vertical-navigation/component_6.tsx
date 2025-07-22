import React, { FC } from "react";
import {
  Home,
  Users,
  Folder,
  Calendar,
  FileText,
  PieChart,
} from "lucide-react";
import { cn } from "@/utils";

const Sidebar: FC = () => {
  interface NavigationItem {
    name: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    count?: string; // Optional property
    current: boolean;
  }

  interface SecondaryNavigationItem {
    name: string;
    href: string;
    initial: string;
    current: boolean;
  }

  const navigation: NavigationItem[] = [
    { name: "Dashboard", href: "#", icon: Home, count: "5", current: true },
    { name: "Team", href: "#", icon: Users, current: false },
    { name: "Projects", href: "#", icon: Folder, count: "12", current: false },
    {
      name: "Calendar",
      href: "#",
      icon: Calendar,
      count: "20+",
      current: false,
    },
    { name: "Documents", href: "#", icon: FileText, current: false },
    { name: "Reports", href: "#", icon: PieChart, current: false },
  ];

  const secondaryNavigation: SecondaryNavigationItem[] = [
    { name: "Website redesign", href: "#", initial: "W", current: false },
    { name: "GraphQL API", href: "#", initial: "G", current: false },
    {
      name: "Customer migration guides",
      href: "#",
      initial: "C",
      current: false,
    },
    { name: "Profit sharing program", href: "#", initial: "P", current: false },
  ];

  return (
    <nav aria-label="Sidebar" className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    item.current
                      ? "bg-gray-100 text-indigo-600"
                      : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600",
                    "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                  )}
                >
                  <item.icon
                    aria-hidden="true"
                    className={cn(
                      item.current
                        ? "text-indigo-600"
                        : "text-gray-400 group-hover:text-indigo-600",
                      "size-6 shrink-0"
                    )}
                  />
                  {item.name}
                  {item.count ? (
                    <span
                      aria-hidden="true"
                      className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-50 px-2.5 py-0.5 text-center text-xs/5 font-medium text-gray-600 ring-1 ring-inset ring-gray-200"
                    >
                      {item.count}
                    </span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <div className="text-xs/6 font-semibold text-gray-400">Projects</div>
          <ul role="list" className="-mx-2 mt-2 space-y-1">
            {secondaryNavigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    item.current
                      ? "bg-gray-50 text-indigo-600"
                      : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600",
                    "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                  )}
                >
                  <span
                    className={cn(
                      item.current
                        ? "border-indigo-600 text-indigo-600"
                        : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
                      "flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"
                    )}
                  >
                    {item.initial}
                  </span>
                  <span className="truncate">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
