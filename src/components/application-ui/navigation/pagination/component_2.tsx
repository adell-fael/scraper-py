import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/utils';

const NavigationBar: React.FC = () => {
  const linkClass = cn(
    'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
  );

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <a href="#" className={linkClass}>
          <ChevronLeft aria-hidden="true" className="mr-3 size-5 text-gray-400" />
          Previous
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">
        <a href="#" className={linkClass}>1</a>
        <a
          href="#"
          aria-current="page"
          className="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
        >
          2
        </a>
        <a href="#" className={linkClass}>3</a>
        <span className={linkClass}>...</span>
        <a href="#" className={linkClass}>8</a>
        <a href="#" className={linkClass}>9</a>
        <a href="#" className={linkClass}>10</a>
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <a href="#" className={linkClass}>
          Next
          <ChevronRight aria-hidden="true" className="ml-3 size-5 text-gray-400" />
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;