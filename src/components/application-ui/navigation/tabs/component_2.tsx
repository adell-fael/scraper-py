import { FC } from 'react';
import { ChevronDown as ChevronDownIcon } from 'lucide-react';
import { User as UserIcon, Building as BuildingOfficeIcon, Users as UsersIcon, CreditCard as CreditCardIcon } from 'lucide-react';
import { cn } from '@/utils';

const AccountTabs: FC = () => {
  const tabs = [
    { name: 'My Account', href: '#', icon: UserIcon, current: false },
    { name: 'Company', href: '#', icon: BuildingOfficeIcon, current: false },
    { name: 'Team Members', href: '#', icon: UsersIcon, current: true },
    { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:hidden">
        <select
          defaultValue={tabs.find((tab) => tab.current)?.name}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
        />
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                className={cn(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium',
                )}
              >
                <tab.icon
                  aria-hidden="true"
                  className={cn(
                    tab.current ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500',
                    '-ml-0.5 mr-2 size-5',
                  )}
                />
                <span>{tab.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AccountTabs;