import { FC } from 'react';
import { CheckCircle, Circle, ArrowRightCircle } from 'lucide-react';

const JobApplicationSteps: FC = () => {
  const steps = [
    { id: 'Step 1', name: 'Job details', href: '#', status: 'complete' },
    { id: 'Step 2', name: 'Application form', href: '#', status: 'current' },
    { id: 'Step 3', name: 'Preview', href: '#', status: 'upcoming' },
  ];

  return (
    <nav aria-label="Progress">
      <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
        {steps.map((step) => (
          <li key={step.name} className="md:flex-1">
            <a
              href={step.href}
              className={`group flex flex-col border-l-4 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 ${
                step.status === 'complete'
                  ? 'border-indigo-600 hover:border-indigo-800'
                  : step.status === 'current'
                  ? 'border-indigo-600'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              aria-current={step.status === 'current' ? 'step' : undefined}
            >
              <span className={`text-sm font-medium ${step.status === 'complete' ? 'text-indigo-600 group-hover:text-indigo-800' : 'text-gray-500 group-hover:text-gray-700'}`}>
                {step.id}
              </span>
              <span className="text-sm font-medium">{step.name}</span>
              {step.status === 'complete' ? (
                <CheckCircle className="text-indigo-600 group-hover:text-indigo-800" />
              ) : step.status === 'current' ? (
                <ArrowRightCircle className="text-indigo-600" />
              ) : (
                <Circle className="text-gray-500 group-hover:text-gray-700" />
              )}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default JobApplicationSteps;