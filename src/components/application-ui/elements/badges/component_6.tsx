
import { FC } from 'react';
import { Circle } from 'lucide-react';

const BadgeDisplay: FC = () => {
  const colors = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
  return  colors.map((color) => (
        <span
          key={color}
          className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200"
        >
          <Circle color={`${color}-500`} size={1.5} />
          Badge
        </span>
      ))
};

export default BadgeDisplay;
