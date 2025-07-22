import { FC } from 'react';
import { Home, Users, Box, Calendar, FileText, BarChart2 } from 'lucide-react';
import { cn } from '@/utils';

const NavigationComponent: FC = () => {
  const navigation = [
    { name: 'Dashboard', href: '#', current: true, icon: Home },
    { name: 'Team', href: '#', current: false, icon: Users },
    { name: 'Projects', href: '#', current: false, icon: Box },
    { name: 'Calendar', href: '#', current: false, icon: Calendar },
    { name: 'Documents', href: '#', current: false, icon: FileText },
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
              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-500" aria-hidden="true" />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationComponent;