import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/utils';

const PaginationNav: React.FC = () => {
  const results = {
    start: 1,
    end: 10,
    total: 20,
  };

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6")}
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{results.start}</span> to <span className="font-medium">{results.end}</span> of{' '}
          <span className="font-medium">{results.total}</span> results
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <a
          href="#"
          className={cn("relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0")}
        >
          <ArrowLeft />
          Previous
        </a>
        <a
          href="#"
          className={cn("relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0")}
        >
          Next
          <ArrowRight />
        </a>
      </div>
    </nav>
  )
}

export default PaginationNav;