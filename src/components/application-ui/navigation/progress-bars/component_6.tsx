import { FC } from 'react';
import { CheckCircle } from 'lucide-react';

const AccountCreationSteps: FC = () => {
  const steps = [
    { name: 'Create account', href: '#', status: 'complete' },
    { name: 'Profile information', href: '#', status: 'current' },
    { name: 'Theme', href: '#', status: 'upcoming' },
    { name: 'Preview', href: '#', status: 'upcoming' },
  ];

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <nav aria-label="Progress" className="flex justify-center">
        <ol role="list" className="space-y-6">
          {steps.map((step) => (
            <li key={step.name}>
              {step.status === 'complete' ? (
                <a href={step.href} className="group">
                  <span className="flex items-start">
                    <span className="relative flex size-5 shrink-0 items-center justify-center">
                      <CheckCircle
                        aria-hidden="true"
                        className="size-full text-indigo-600 group-hover:text-indigo-800"
                      />
                    </span>
                    <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </a>
              ) : step.status === 'current' ? (
                <a href={step.href} aria-current="step" className="flex items-start">
                  <span aria-hidden="true" className="relative flex size-5 shrink-0 items-center justify-center">
                    <span className="absolute size-4 rounded-full bg-indigo-200" />
                    <span className="relative block size-2 rounded-full bg-indigo-600" />
                  </span>
                  <span className="ml-3 text-sm font-medium text-indigo-600">{step.name}</span>
                </a>
              ) : (
                <a href={step.href} className="group">
                  <div className="flex items-start">
                    <div aria-hidden="true" className="relative flex size-5 shrink-0 items-center justify-center">
                      <div className="size-2 rounded-full bg-gray-300 group-hover:bg-gray-400" />
                    </div>
                    <p className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</p>
                  </div>
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default AccountCreationSteps;