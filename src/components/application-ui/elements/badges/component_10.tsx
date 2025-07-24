import { FC } from 'react';
import { Circle } from 'lucide-react';

const BadgeDisplay: FC = () => {
  const badgeColors = [
    { bg: 'gray-100', text: 'gray-600', fill: 'gray-400' },
    { bg: 'red-100', text: 'red-700', fill: 'red-500' },
    { bg: 'yellow-100', text: 'yellow-800', fill: 'yellow-500' },
    { bg: 'green-100', text: 'green-700', fill: 'green-500' },
    { bg: 'blue-100', text: 'blue-700', fill: 'blue-500' },
    { bg: 'indigo-100', text: 'indigo-700', fill: 'indigo-500' },
    { bg: 'purple-100', text: 'purple-700', fill: 'purple-500' },
    { bg: 'pink-100', text: 'pink-700', fill: 'pink-500' },
  ];

  return badgeColors.map((color, index) => (
        <span
          key={index}
          className={`inline-flex items-center gap-x-1.5 rounded-md bg-${color.bg} px-2 py-1 text-xs font-medium text-${color.text}`}
        >
          <Circle fill={color.fill} size={1.5} />
          Badge
        </span>
      ))
};

export default BadgeDisplay;