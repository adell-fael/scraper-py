import { FC } from "react";

const BadgeDisplay: FC = () => {
  const badgeText = "Badge";
  const badgeClasses = [
    "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium",
    "bg-gray-100 text-gray-600",
    "bg-red-100 text-red-700",
    "bg-yellow-100 text-yellow-800",
    "bg-green-100 text-green-700",
    "bg-blue-100 text-blue-700",
    "bg-indigo-100 text-indigo-700",
    "bg-purple-100 text-purple-700",
    "bg-pink-100 text-pink-700",
  ];

  return badgeClasses.map((badgeClass, index) => (
    <span key={index} className={`${badgeClass}`}>
      {badgeText}
    </span>
  ));
};

export default BadgeDisplay;
