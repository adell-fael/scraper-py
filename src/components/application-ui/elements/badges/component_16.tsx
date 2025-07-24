import { FC } from 'react';

const BadgeDisplay: FC = () => {
  const badgeText = "Badge";
  const badgeClasses = "inline-flex items-center rounded-full px-1.5 py-0.5 text-xs font-medium";
  const badgeColors = [
    { bg: "bg-gray-100", text: "text-gray-600" },
    { bg: "bg-red-100", text: "text-red-700" },
    { bg: "bg-yellow-100", text: "text-yellow-800" },
    { bg: "bg-green-100", text: "text-green-700" },
    { bg: "bg-blue-100", text: "text-blue-700" },
    { bg: "bg-indigo-100", text: "text-indigo-700" },
    { bg: "bg-purple-100", text: "text-purple-700" },
    { bg: "bg-pink-100", text: "text-pink-700" },
  ];

  return badgeColors.map((color, index) => (
        <span key={index} className={`${badgeClasses} ${color.bg} ${color.text}`}>
          {badgeText}
        </span>
      ))
};

export default BadgeDisplay;