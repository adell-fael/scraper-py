import { X } from "lucide-react";
import React from "react";

const MediaObject: React.FC = () => {
  const title = "Lorem ipsum";
  const description =
    "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.";

  return (
    <div className="sm:flex">
      <div className="mb-4 shrink-0 sm:mb-0 sm:mr-4">
        <X
          fill="none"
          stroke="currentColor"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="h-32 w-full border border-gray-300 bg-white text-gray-300 sm:w-32"
        >
          <path
            d="M0 0l200 200M0 200L200 0"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
        </X>
      </div>
      <div>
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="mt-1">{description}</p>
      </div>
    </div>
  );
};

export default MediaObject;
