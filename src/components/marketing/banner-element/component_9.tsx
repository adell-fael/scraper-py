import { X } from "lucide-react";

const BannerElement = () => {
  return (

      <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
        <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-900 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
          <p className="text-sm/6 text-white">
            <a href="#">
              <strong className="font-semibold">GeneriCon 2023</strong>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="mx-2 inline size-0.5 fill-current"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              Join us in Denver from June 7 – 9 to see what’s coming next&nbsp;
              <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
          <button type="button" className="-m-1.5 flex-none p-1.5">
            <span className="sr-only">Dismiss</span>
            <X aria-hidden="true" className="size-5 text-white" />
          </button>
        </div>
      </div>

  );
};

export default BannerElement;
