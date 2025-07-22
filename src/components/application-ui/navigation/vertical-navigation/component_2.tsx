import { FC } from 'react';
import { Home, Users, FileText, Calendar, Folder, BarChart2 } from 'lucide-react';
import { cn } from '@/utils';

const SidebarNavigation: FC = () => {
  const navigation = [
    { name: 'Dashboard', href: '#', count: '5', current: true, icon: Home },
    { name: 'Team', href: '#', current: false, icon: Users },
    { name: 'Projects', href: '#', count: '12', current: false, icon: FileText },
    { name: 'Calendar', href: '#', count: '20+', current: false, icon: Calendar },
    { name: 'Documents', href: '#', current: false, icon: Folder },
    { name: 'Reports', href: '#', current: false, icon: BarChart2 },
  ];

  return (
    <nav aria-label="Sidebar" className="flex flex-1 flex-col">
      <ul role="list" className="-mx-2 space-y-1">
        {navigation.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={cn(
                item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                'group flex gap-x-3 rounded-md p-2 pl-3 text-sm/6 font-semibold',
              )}
            >
              <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
              {item.name}
              {item.count ? (
                <span
                  aria-hidden="true"
                  className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs/5 font-medium text-gray-600 ring-1 ring-inset ring-gray-200"
                >
                  {item.count}
                </span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNavigation;