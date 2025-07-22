import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  ChevronDown,
  BookOpen,
  Briefcase,
  Globe,
  Info,
  Newspaper,
  ShieldCheck,
  Users,
  UserCog,
  Video,
} from "lucide-react";

const FlyoutMenus = () => {
  const engagement = [
    { name: "About", href: "#", icon: Info },
    { name: "Customers", href: "#", icon: Users },
    { name: "Press", href: "#", icon: Newspaper },
    { name: "Careers", href: "#", icon: Briefcase },
    { name: "Privacy", href: "#", icon: ShieldCheck },
  ];
  const resources = [
    { name: "Community", href: "#", icon: UserCog },
    { name: "Partners", href: "#", icon: Globe },
    { name: "Guides", href: "#", icon: BookOpen },
    { name: "Webinars", href: "#", icon: Video },
  ];
  const recentPosts = [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      date: "Mar 16, 2023",
      datetime: "2023-03-16",
      category: { title: "Marketing", href: "#" },
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      description:
        "Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.",
    },
    {
      id: 2,
      title: "How to use search engine optimization to drive sales",
      href: "#",
      date: "Mar 10, 2023",
      datetime: "2023-03-10",
      category: { title: "Sales", href: "#" },
      imageUrl:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
      description:
        "Optio cum necessitatibus dolor voluptatum provident commodi et.",
    },
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
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-2 lg:px-8">
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
              <div>
                <h3 className="text-sm/6 font-medium text-gray-500">
                  Engagement
                </h3>
                <div className="mt-6 flow-root">
                  <div className="-my-2">
                    {engagement.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-900"
                      >
                        <item.icon
                          aria-hidden="true"
                          className="size-6 flex-none text-gray-400"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm/6 font-medium text-gray-500">
                  Resources
                </h3>
                <div className="mt-6 flow-root">
                  <div className="-my-2">
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-900"
                      >
                        <item.icon
                          aria-hidden="true"
                          className="size-6 flex-none text-gray-400"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
              <h3 className="sr-only">Recent posts</h3>
              {recentPosts.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
                >
                  <div className="relative flex-none">
                    <img
                      alt=""
                      src={post.imageUrl}
                      className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-video sm:h-32 lg:h-auto"
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4">
                      <time
                        dateTime={post.datetime}
                        className="text-sm/6 text-gray-600"
                      >
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </a>
                    </div>
                    <h4 className="mt-2 text-sm/6 font-semibold text-gray-900">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h4>
                    <p className="mt-2 text-sm/6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default FlyoutMenus;
