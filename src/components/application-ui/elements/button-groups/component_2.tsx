import { FC } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PaginationButtons: FC = () => {
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <span className="sr-only">Previous</span>
        <ChevronLeft aria-hidden="true" className="size-5" />
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <span className="sr-only">Next</span>
        <ChevronRight aria-hidden="true" className="size-5" />
      </button>
    </span>
  )
}

export default PaginationButtons;