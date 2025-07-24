import { Image } from 'lucide-react';
import React from 'react';

const MediaObject: React.FC = () => {
  const title = "Lorem ipsum";
  const description = "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.";

  return (
    <div className="flex">
      <div className="mr-4 shrink-0 self-center">
        <Image
          stroke="currentColor"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="size-16 border border-gray-300 bg-white text-gray-300"
        />
      </div>
      <div>
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="mt-1">{description}</p>
      </div>
    </div>
  )
}

export default MediaObject;