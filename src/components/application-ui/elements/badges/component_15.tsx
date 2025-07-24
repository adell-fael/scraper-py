import { FC } from 'react';

const BadgeDisplay: FC = () => {
  const badgeText = "Badge";
  const badgeClasses = [
    "inline-flex items-center rounded-full px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset",
    "bg-gray-50 text-gray-600 ring-gray-500/10",
    "bg-red-50 text-red-700 ring-red-600/10",
    "bg-yellow-50 text-yellow-800 ring-yellow-600/20",
    "bg-green-50 text-green-700 ring-green-600/20",
    "bg-blue-50 text-blue-700 ring-blue-700/10",
    "bg-indigo-50 text-indigo-700 ring-indigo-700/10",
    "bg-purple-50 text-purple-700 ring-purple-700/10",
    "bg-pink-50 text-pink-700 ring-pink-700/10"
  ];

  return badgeClasses.map((badgeClass, index) => (
        <span key={index} className={`${badgeClass}`}>
          {badgeText}
        </span>
      ))
};

export default BadgeDisplay;