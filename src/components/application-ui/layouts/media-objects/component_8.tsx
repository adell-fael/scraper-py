import { Cross } from 'lucide-react';
import React from 'react';

const MediaObject: React.FC = () => {
  const renderMediaObject = (size: string, title: string, description: string) => (
    <div className="flex">
      <div className="mr-4 shrink-0">
        <Cross
          size={size}
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
  );

  const loremIpsum = 'Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.';

  return (
    <div className="flex">
      {renderMediaObject('16', 'Lorem ipsum', loremIpsum)}
      <div>
        {renderMediaObject('12', 'Lorem ipsum', loremIpsum)}
        {renderMediaObject('12', 'Lorem ipsum', loremIpsum)}
      </div>
    </div>
  );
};

export default MediaObject;