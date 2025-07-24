import { Truck, CheckCircle, Calendar } from 'lucide-react';

const IncentivesDisplay: React.FC = () => {
  const incentives = [
    { name: 'Free, contactless delivery', icon: Truck },
    { name: 'No questions asked returns', icon: CheckCircle },
    { name: '2-year warranty', icon: Calendar },
  ];

  return (
    <div className="bg-white">
      <h2 className="sr-only">Why you should buy from us</h2>
      <div className="flex overflow-x-auto">
        <div className="mx-auto flex space-x-12 whitespace-nowrap px-4 py-3 sm:px-6 lg:space-x-24 lg:px-8">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="flex items-center text-sm font-medium text-indigo-600">
              <incentive.icon aria-hidden="true" className="mr-2 h-6 w-6 flex-none" />
              <p>{incentive.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncentivesDisplay;