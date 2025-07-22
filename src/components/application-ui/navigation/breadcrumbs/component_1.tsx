import { FC } from 'react';
import { Home, ChevronRight } from 'lucide-react';
import { cn } from '@/utils';

const Breadcrumb: FC = () => {
  const pages = [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
  ];

  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol role="list" className="flex space-x-4 rounded-md bg-white px-6 shadow">
        <li className="flex">
          <div className="flex items-center">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Home aria-hidden="true" className="size-5 shrink-0" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name} className="flex">
            <div className="flex items-center">
              <ChevronRight
                fill="currentColor"
                aria-hidden="true"
                className="h-full w-6 shrink-0 text-gray-200"
              />
              <a
                href={page.href}
                aria-current={page.current ? 'page' : undefined}
                className={cn("ml-4 text-sm font-medium text-gray-500", page.current && "hover:text-gray-700")}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;