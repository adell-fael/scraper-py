import { Plus } from 'lucide-react';

const DividersWithPlusIcon: React.FC = () => {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-gray-500">
          <Plus className="size-5 text-gray-500" />
        </span>
      </div>
    </div>
  )
}

export default DividersWithPlusIcon;