import { Fragment } from "react";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import { CheckIcon, MinusIcon, PlusIcon } from "lucide-react";

// Add TierName type
const TIER_NAMES = ["Starter", "Growth", "Scale"] as const;
type TierName = (typeof TIER_NAMES)[number];

const PricingSection = () => {
  const tiers: {
    name: TierName;
    description: string;
    priceMonthly: string;
    href: string;
    highlights: { description: string; disabled?: boolean }[];
  }[] = [
    {
      name: "Starter",
      description: "Everything you need to get started.",
      priceMonthly: "$19",
      href: "#",
      highlights: [
        { description: "Custom domains" },
        { description: "Edge content delivery" },
        { description: "Advanced analytics" },
        { description: "Quarterly workshops", disabled: true },
        { description: "Single sign-on (SSO)", disabled: true },
        { description: "Priority phone support", disabled: true },
      ],
    },
    {
      name: "Growth",
      description: "All the extras for your growing team.",
      priceMonthly: "$49",
      href: "#",
      highlights: [
        { description: "Custom domains" },
        { description: "Edge content delivery" },
        { description: "Advanced analytics" },
        { description: "Quarterly workshops" },
        { description: "Single sign-on (SSO)", disabled: true },
        { description: "Priority phone support", disabled: true },
      ],
    },
    {
      name: "Scale",
      description: "Added flexibility at scale.",
      priceMonthly: "$99",
      href: "#",
      highlights: [
        { description: "Custom domains" },
        { description: "Edge content delivery" },
        { description: "Advanced analytics" },
        { description: "Quarterly workshops" },
        { description: "Single sign-on (SSO)" },
        { description: "Priority phone support" },
      ],
    },
  ];
  const sections = [
    {
      name: "Features",
      features: [
        {
          name: "Edge content delivery",
          tiers: { Starter: true, Growth: true, Scale: true },
        },
        {
          name: "Custom domains",
          tiers: { Starter: "1", Growth: "3", Scale: "Unlimited" },
        },
        {
          name: "Team members",
          tiers: { Starter: "3", Growth: "20", Scale: "Unlimited" },
        },
        {
          name: "Single sign-on (SSO)",
          tiers: { Starter: false, Growth: false, Scale: true },
        },
      ],
    },
    {
      name: "Reporting",
      features: [
        {
          name: "Advanced analytics",
          tiers: { Starter: true, Growth: true, Scale: true },
        },
        {
          name: "Basic reports",
          tiers: { Starter: false, Growth: true, Scale: true },
        },
        {
          name: "Professional reports",
          tiers: { Starter: false, Growth: false, Scale: true },
        },
        {
          name: "Custom report builder",
          tiers: { Starter: false, Growth: false, Scale: true },
        },
      ],
    },
    {
      name: "Support",
      features: [
        {
          name: "24/7 online support",
          tiers: { Starter: true, Growth: true, Scale: true },
        },
        {
          name: "Quarterly workshops",
          tiers: { Starter: false, Growth: true, Scale: true },
        },
        {
          name: "Priority phone support",
          tiers: { Starter: false, Growth: false, Scale: true },
        },
        {
          name: "1:1 onboarding tour",
          tiers: { Starter: false, Growth: false, Scale: true },
        },
      ],
    },
  ];
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 max-lg:text-center lg:max-w-7xl lg:px-8">
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-950 sm:text-6xl lg:text-pretty">
          Pricing that grows with your team size
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg font-medium text-gray-600 max-lg:mx-auto sm:text-xl/8">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
      </div>
      <div className="relative pt-16 sm:pt-24">
        <div className="absolute inset-x-0 bottom-0 top-48 bg-[radial-gradient(circle_at_center_center,#7775D6,#592E71,#030712_70%)] lg:bg-[radial-gradient(circle_at_center_150%,#7775D6,#592E71,#030712_70%)]" />
        <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="-m-2 grid grid-cols-1 rounded-[2rem] shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
              >
                <div className="grid grid-cols-1 rounded-[2rem] p-2 shadow-md shadow-black/5">
                  <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                    <h2 className="text-sm font-semibold text-indigo-600">
                      {tier.name} <span className="sr-only">plan</span>
                    </h2>
                    <p className="mt-2 text-pretty text-sm/6 text-gray-600">
                      {tier.description}
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="text-5xl font-semibold text-gray-950">
                        {tier.priceMonthly}
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>USD</p>
                        <p>per month</p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a
                        href={tier.href}
                        aria-label={`Start a free trial on the ${tier.name} plan`}
                        className="inline-block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Start a free trial
                      </a>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-sm/6 font-medium text-gray-950">
                        Start selling with:
                      </h3>
                      <ul className="mt-3 space-y-3">
                        {tier.highlights.map((highlight) => (
                          <li
                            key={highlight.description}
                            data-disabled={highlight.disabled}
                            className="group flex items-start gap-4 text-sm/6 text-gray-600 data-[disabled]:text-gray-400"
                          >
                            <span className="inline-flex h-6 items-center">
                              <PlusIcon
                                aria-hidden="true"
                                className="size-4 fill-gray-400 group-data-[disabled]:fill-gray-300"
                              />
                            </span>
                            {highlight.disabled ? (
                              <span className="sr-only">Not included:</span>
                            ) : null}
                            {highlight.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between py-16 opacity-60 max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4 sm:py-24">
            <img
              alt="Transistor"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
              className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
            />
            <img
              alt="Laravel"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg"
              className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
            />
            <img
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
              className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
              className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
            />
            <img
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
              className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-6 pt-16 sm:pt-24 lg:max-w-7xl lg:px-8">
        <table className="w-full text-left max-sm:hidden">
          <caption className="sr-only">Pricing plan comparison</caption>
          <colgroup>
            <col className="w-2/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
          </colgroup>
          <thead>
            <tr>
              <td className="p-0" />
              {TIER_NAMES.map((tierName) => (
                <th key={tierName} scope="col" className="p-0">
                  <div className="text-sm font-semibold text-indigo-600">
                    {tierName} <span className="sr-only">plan</span>
                  </div>
                </th>
              ))}
            </tr>
            <tr>
              <th className="p-0" />
              {TIER_NAMES.map((tierName) => (
                <td key={tierName} className="px-0 pb-0 pt-3">
                  <a
                    href={tiers.find((t) => t.name === tierName)?.href}
                    aria-label={`Get started with the ${tierName} plan`}
                    className="inline-block rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Get started
                  </a>
                </td>
              ))}
            </tr>
          </thead>
          {sections.map((section) => (
            <tbody key={section.name} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pb-0 pt-10 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold text-gray-950">
                    {section.name}
                  </div>
                </th>
              </tr>
              {section.features.map((feature) => (
                <tr
                  key={feature.name}
                  className="border-b border-gray-100 last:border-none"
                >
                  <th
                    scope="row"
                    className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                  >
                    {feature.name}
                  </th>
                  {TIER_NAMES.map((tierName) => (
                    <td key={tierName} className="p-4 max-sm:text-center">
                      {typeof feature.tiers[tierName] === "string" ? (
                        <>
                          <span className="sr-only">{tierName} includes:</span>
                          <span className="text-sm/6 text-gray-950">
                            {feature.tiers[tierName]}
                          </span>
                        </>
                      ) : (
                        <>
                          {feature.tiers[tierName] === true ? (
                            <CheckIcon
                              aria-hidden="true"
                              className="inline-block size-4 fill-green-600"
                            />
                          ) : (
                            <MinusIcon
                              aria-hidden="true"
                              className="inline-block size-4 fill-gray-400"
                            />
                          )}

                          <span className="sr-only">
                            {feature.tiers[tierName] === true
                              ? `Included in ${tierName}`
                              : `Not included in ${tierName}`}
                          </span>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
        <TabGroup className="sm:hidden">
          <TabList className="flex">
            {TIER_NAMES.map((tierName) => (
              <Tab
                key={tierName}
                className="w-1/3 border-b border-gray-100 py-4 text-base/8 font-medium text-indigo-600 data-[selected]:border-indigo-600 [&:not([data-focus])]:focus:outline-none"
              >
                {tierName}
              </Tab>
            ))}
          </TabList>
          <TabPanels as={Fragment}>
            {TIER_NAMES.map((tierName) => (
              <TabPanel key={tierName}>
                <a
                  href={tiers.find((t) => t.name === tierName)?.href}
                  className="mt-8 block rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Get started
                </a>
                {sections.map((section) => (
                  <Fragment key={section.name}>
                    <div className="-mx-6 mt-10 rounded-lg bg-gray-50 px-6 py-3 text-sm/6 font-semibold text-gray-950 group-first-of-type:mt-5">
                      {section.name}
                    </div>
                    <dl>
                      {section.features.map((feature) => (
                        <div
                          key={feature.name}
                          className="grid grid-cols-2 border-b border-gray-100 py-4 last:border-none"
                        >
                          <dt className="text-sm/6 font-normal text-gray-600">
                            {feature.name}
                          </dt>
                          <dd className="text-center">
                            {typeof feature.tiers[tierName] === "string" ? (
                              <span className="text-sm/6 text-gray-950">
                                {feature.tiers[tierName]}
                              </span>
                            ) : (
                              <>
                                {feature.tiers[tierName] === true ? (
                                  <CheckIcon
                                    aria-hidden="true"
                                    className="inline-block size-4 fill-green-600"
                                  />
                                ) : (
                                  <MinusIcon
                                    aria-hidden="true"
                                    className="inline-block size-4 fill-gray-400"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tierName] === true
                                    ? "Yes"
                                    : "No"}
                                </span>
                              </>
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </Fragment>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default PricingSection;
