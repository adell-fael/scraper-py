
import { FC } from 'react';
import { X } from 'lucide-react';

const BadgeComponent: FC = () => {
  const colors = [
    { bg: 'gray', text: 'gray', hover: 'gray', stroke: 'gray' },
    { bg: 'red', text: 'red', hover: 'red', stroke: 'red' },
    { bg: 'yellow', text: 'yellow', hover: 'yellow', stroke: 'yellow' },
    { bg: 'green', text: 'green', hover: 'green', stroke: 'green' },
    { bg: 'blue', text: 'blue', hover: 'blue', stroke: 'blue' },
    { bg: 'indigo', text: 'indigo', hover: 'indigo', stroke: 'indigo' },
    { bg: 'purple', text: 'purple', hover: 'purple', stroke: 'violet' },
    { bg: 'pink', text: 'pink', hover: 'pink', stroke: 'pink' },
  ];

  return colors.map((color, index) => (
        <span key={index} className={`inline-flex items-center gap-x-0.5 rounded-md bg-${color.bg}-100 px-2 py-1 text-xs font-medium text-${color.text}-700`}>
          Badge
          <button type="button" className={`group relative -mr-1 size-3.5 rounded-sm hover:bg-${color.hover}-600/20`}>
            <span className="sr-only">Remove</span>
            <X className={`size-3.5 stroke-${color.stroke}-700/50 group-hover:stroke-${color.stroke}-700/75`} />
            <span className="absolute -inset-1" />
          </button>
        </span>
      ))
};

export default BadgeComponent;
