import { ArrowRight } from "lucide-react";

const LogoCloud = () => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />

          <img
            alt="Reform"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />

          <img
            alt="Tuple"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />

          <img
            alt="SavvyCal"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />

          <img
            alt="Statamic"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
        <div className="mt-16 flex justify-center">
          <p className="relative rounded-full bg-gray-800/75 px-4 py-1.5 text-sm/6 text-gray-400 ring-1 ring-inset ring-white/10">
            <span className="hidden md:inline">
              Over 2500 companies use our tools to better their business.
            </span>
            <a
              href="#"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              <span aria-hidden="true" className="absolute inset-0" /> Read our
              customer stories{" "}
              <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;

