import { cn } from "@/utils";
import {
  BarChart4Icon,
  CalendarIcon,
  ClockIcon,
  ImageIcon,
  TableIcon,
  ColumnsIcon,
} from "lucide-react";

const CreateProjectTemplates = () => {
  const items = [
    {
      title: "Create a List",
      description: "Another to-do system you’ll try but eventually give up on.",
      icon: BarChart4Icon,
      background: "bg-pink-500",
    },
    {
      title: "Create a Calendar",
      description: "Stay on top of your deadlines, or don’t — it’s up to you.",
      icon: CalendarIcon,
      background: "bg-yellow-500",
    },
    {
      title: "Create a Gallery",
      description: "Great for mood boards and inspiration.",
      icon: ImageIcon,
      background: "bg-green-500",
    },
    {
      title: "Create a Board",
      description: "Track tasks in different stages of your project.",
      icon: ColumnsIcon,
      background: "bg-blue-500",
    },
    {
      title: "Create a Spreadsheet",
      description: "Lots of numbers and things — good for nerds.",
      icon: TableIcon,
      background: "bg-indigo-500",
    },
    {
      title: "Create a Timeline",
      description: "Get a birds-eye-view of your procrastination.",
      icon: ClockIcon,
      background: "bg-purple-500",
    },
  ];

  return (
    <div>
      <h2 className="text-base font-semibold text-gray-900">Projects</h2>
      <p className="mt-1 text-sm text-gray-500">
        You haven’t created a project yet. Get started by selecting a template
        or start from an empty project.
      </p>
      <ul
        role="list"
        className="mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-2"
      >
        {items.map((item, itemIdx) => (
          <li key={itemIdx} className="flow-root">
            <div className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
              <div
                className={cn(
                  item.background,
                  "flex size-16 shrink-0 items-center justify-center rounded-lg"
                )}
              >
                <item.icon aria-hidden="true" className="size-6 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  <a href="#" className="focus:outline-none">
                    <span aria-hidden="true" className="absolute inset-0" />
                    <span>{item.title}</span>
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex">
        <a
          href="#"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          Or start from an empty project
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default CreateProjectTemplates;
