import { FC } from 'react';
import { Home, ChevronRight } from 'lucide-react';
import { cn } from '@/utils';

const BreadcrumbNav: FC = () => {
  const pages = [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
  ];

  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol role="list" className={cn('flex', 'items-center', 'space-x-4')}>
        <li>
          <div>
            <a href="#" className={cn('text-gray-400', 'hover:text-gray-500')}>
              <Home aria-hidden="true" className={cn('size-5', 'shrink-0')} />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className={cn('flex', 'items-center')}>
              <ChevronRight fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className={cn('size-5', 'shrink-0', 'text-gray-300')} />
              <a
                href={page.href}
                aria-current={page.current ? 'page' : undefined}
                className={cn('ml-4', 'text-sm', 'font-medium', 'text-gray-500', 'hover:text-gray-700')}
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

export default BreadcrumbNav;