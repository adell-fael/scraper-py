import { Crosshair } from 'lucide-react';

const MediaObject = () => {
  const title = "Lorem ipsum";
  const description = "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.";

  return (
    <div className="sm:flex">
      <div className="mb-4 shrink-0 sm:mb-0 sm:mr-4">
        <Crosshair
          size={16}
          color="gray"
          strokeWidth={1}
          className="border border-gray-300 bg-white text-gray-300"
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