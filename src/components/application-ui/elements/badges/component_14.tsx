
import { FC } from 'react';

const BadgeDisplay: FC = () => {
  const badgeText = "Badge";
  return (
    <>
      <span className="inline-flex items-center rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600">
        {badgeText}
      </span>
      <span className="inline-flex items-center rounded-md bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700">
        {badgeText}
      </span>
      <span className="inline-flex items-center rounded-md bg-yellow-100 px-1.5 py-0.5 text-xs font-medium text-yellow-800">
        {badgeText}
      </span>
      <span className="inline-flex items-center rounded-md bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
        {badgeText}
      </span>
      <span className="inline-flex items-center rounded-md bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700">
        {badgeText}
      </span>
      <span className="inline-flex items-center rounded-md bg-indigo-100 px-1.5 py-0.5 text-xs font-medium text-indigo-700">
        {badgeText}
      </span>
      <span className="inline-flex items-center rounded-md bg-purple-100 px-1.5 py-0.5 text-xs font-medium text-purple-700">
        {badgeText}
      </span>
      <span className="inline-flex items-center rounded-md bg-pink-100 px-1.5 py-0.5 text-xs font-medium text-pink-700">
        {badgeText}
      </span>
    </>
  )
}

export default BadgeDisplay;
