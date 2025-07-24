import { X } from 'lucide-react';

const MediaObject: React.FC<{title: string, description: string}> = ({title, description}) => {
  return (
    <div className="flex">
      <div className="mr-4 shrink-0">
        <X 
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