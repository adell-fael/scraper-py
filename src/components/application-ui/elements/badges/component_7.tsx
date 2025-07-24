import { FC } from 'react';
import { X } from 'lucide-react';

const BadgeComponent: FC = () => {
  const colors = [
    'gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'
  ];

  return colors.map((color) => (
        <span key={color} className={`inline-flex items-center gap-x-0.5 rounded-md bg-${color}-50 px-2 py-1 text-xs font-medium text-${color}-700 ring-1 ring-inset ring-${color}-700/10`}>
          Badge
          <button type="button" className={`group relative -mr-1 size-3.5 rounded-sm hover:bg-${color}-600/20`}>
            <span className="sr-only">Remove</span>
            <X className={`size-3.5 stroke-${color}-700/50 group-hover:stroke-${color}-700/75`} />
            <span className="absolute -inset-1" />
          </button>
        </span>
      ))
};

export default BadgeComponent;