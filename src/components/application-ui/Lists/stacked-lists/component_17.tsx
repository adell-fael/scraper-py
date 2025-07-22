import { cn } from "@/utils";
import { ChevronRightIcon } from "lucide-react";

const StackedList = () => {
  // Status options
  type Status = "offline" | "online" | "error";

  // Environment options
  type Environment = "Preview" | "Production";

  // Status styles mapping
  const statuses: Record<Status, string> = {
    offline: "text-gray-500 bg-gray-100/10",
    online: "text-green-400 bg-green-400/10",
    error: "text-rose-400 bg-rose-400/10",
  };

  // Environment styles mapping
  const environments: Record<Environment, string> = {
    Preview: "text-gray-400 bg-gray-400/10 ring-gray-400/20",
    Production: "text-indigo-400 bg-indigo-400/10 ring-indigo-400/30",
  };

  // Deployment type
  type Deployment = {
    id: number;
    href: string;
    projectName: string;
    teamName: string;
    status: Status;
    statusText: string;
    description: string;
    environment: Environment;
  };

  const deployments: Deployment[] = [
    {
      id: 1,
      href: "#",
      projectName: "ios-app",
      teamName: "Planetaria",
      status: "offline",
      statusText: "Initiated 1m 32s ago",
      description: "Deploys from GitHub",
      environment: "Preview",
    },
    {
      id: 2,
      href: "#",
      projectName: "mobile-api",
      teamName: "Planetaria",
      status: "online",
      statusText: "Deployed 3m ago",
      description: "Deploys from GitHub",
      environment: "Production",
    },
    {
      id: 3,
      href: "#",
      projectName: "tailwindcss.com",
      teamName: "Tailwind Labs",
      status: "offline",
      statusText: "Deployed 3h ago",
      description: "Deploys from GitHub",
      environment: "Preview",
    },
    {
      id: 4,
      href: "#",
      projectName: "api.protocol.chat",
      teamName: "Protocol",
      status: "error",
      statusText: "Failed to deploy 6d ago",
      description: "Deploys from GitHub",
      environment: "Preview",
    },
  ];
  return (
    <ul role="list" className="divide-y divide-white/5">
      {deployments.map((deployment) => (
        <li
          key={deployment.id}
          className="relative flex items-center space-x-4 py-4"
        >
          <div className="min-w-0 flex-auto">
            <div className="flex items-center gap-x-3">
              <div
                className={cn(
                  statuses[deployment.status],
                  "flex-none rounded-full p-1"
                )}
              >
                <div className="size-2 rounded-full bg-current" />
              </div>
              <h2 className="min-w-0 text-sm/6 font-semibold text-white">
                <a href={deployment.href} className="flex gap-x-2">
                  <span className="truncate">{deployment.teamName}</span>
                  <span className="text-gray-400">/</span>
                  <span className="whitespace-nowrap">
                    {deployment.projectName}
                  </span>
                  <span className="absolute inset-0" />
                </a>
              </h2>
            </div>
            <div className="mt-3 flex items-center gap-x-2.5 text-xs/5 text-gray-400">
              <p className="truncate">{deployment.description}</p>
              <svg
                viewBox="0 0 2 2"
                className="size-0.5 flex-none fill-gray-300"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <p className="whitespace-nowrap">{deployment.statusText}</p>
            </div>
          </div>
          <div
            className={cn(
              environments[deployment.environment],
              "flex-none rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset"
            )}
          >
            {deployment.environment}
          </div>
          <ChevronRightIcon
            aria-hidden="true"
            className="size-5 flex-none text-gray-400"
          />
        </li>
      ))}
    </ul>
  );
};

export default StackedList;
