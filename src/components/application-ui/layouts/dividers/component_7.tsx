import { Plus } from 'lucide-react';

const DividersComponent: React.FC = () => {
  const buttonText = "Button text";
  const projectsText = "Projects";

  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex items-center justify-between">
        <span className="bg-white pr-3 text-base font-semibold text-gray-900">{projectsText}</span>
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <Plus aria-hidden="true" className="-ml-1 -mr-0.5 size-5 text-gray-400" />
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  )
}

export default DividersComponent;