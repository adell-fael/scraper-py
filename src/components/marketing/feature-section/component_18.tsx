import { Check } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      name: "Invite team members",
      description:
        "Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.",
    },
    {
      name: "List view",
      description:
        "Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.",
    },
    {
      name: "Keyboard shortcuts",
      description:
        "In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.",
    },
    {
      name: "Calendars",
      description:
        "Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi.",
    },
    {
      name: "Notifications",
      description:
        "Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.",
    },
    {
      name: "Boards",
      description:
        "Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.",
    },
    {
      name: "Reporting",
      description:
        "Eos laudantium repellat sed architecto earum unde incidunt.",
    },
    {
      name: "Mobile app",
      description: "Nulla est saepe accusamus nostrum est est fugit omnis.",
    },
  ];
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Everything you need
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              All-in-one platform
            </p>
            <p className="mt-6 text-base/7 text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
          </div>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <Check
                    aria-hidden="true"
                    className="absolute left-0 top-1 size-5 text-indigo-500"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
