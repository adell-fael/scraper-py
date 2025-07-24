
import { FC } from 'react';
import { Circle } from 'lucide-react';

const BadgeDisplay: FC = () => {
  const colors = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
  return colors.map((color) => (
        <span
          key={color}
          className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-800"
        >
          <Circle color={`${color}-400`} size={1.5} aria-hidden="true" />
          Badge
        </span>
      ))
};

export default BadgeDisplay;
