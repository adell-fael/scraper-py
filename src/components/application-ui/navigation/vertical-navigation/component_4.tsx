import { FC } from 'react';
import { Home, Users, Folder, Calendar, FileText, PieChart } from 'lucide-react';
import { cn } from '@/utils';

const NavigationBar: FC = () => {
  const navigation = [
    { name: 'Dashboard', href: '#', icon: Home, current: true },
    { name: 'Team', href: '#', icon: Users, current: false },
    { name: 'Projects', href: '#', icon: Folder, current: false },
    { name: 'Calendar', href: '#', icon: Calendar, current: false },
    { name: 'Documents', href: '#', icon: FileText, current: false },
    { name: 'Reports', href: '#', icon: PieChart, current: false },
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
                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
              )}
            >
              <item.icon
                aria-hidden="true"
                className={cn(
                  item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                  'size-6 shrink-0',
                )}
              />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;