import {
  CloudUpload,
  Lock,
  RefreshCw,
  Fingerprint,
  Cog,
  Server,
} from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      name: "Push to deploy.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
      icon: CloudUpload,
    },
    {
      name: "SSL certificates.",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      icon: Lock,
    },
    {
      name: "Simple queues.",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.",
      icon: RefreshCw,
    },
    {
      name: "Advanced security.",
      description:
        "Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.",
      icon: Fingerprint,
    },
    {
      name: "Powerful API.",
      description:
        "Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.",
      icon: Cog,
    },
    {
      name: "Database backups.",
      description:
        "Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.",
      icon: Server,
    },
  ];
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-indigo-400">
            Everything you need
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            No server? No problem.
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate
            blanditiis.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-400 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon
                  aria-hidden="true"
                  className="absolute left-1 top-1 size-5 text-indigo-500"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default FeatureSection;
