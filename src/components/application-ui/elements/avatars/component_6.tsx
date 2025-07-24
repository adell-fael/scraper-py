import { FC } from "react";

const AvatarDisplay: FC = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  const sizes = [6, 8, 10, 12, 14, 16];
  const colors = [
    "bg-gray-300",
    "bg-red-400",
    "bg-gray-300",
    "bg-green-400",
    "bg-gray-300",
    "bg-gray-300",
  ];
  const sizeClasses = [
    "size-1.5",
    "size-2",
    "size-2.5",
    "size-3",
    "size-3.5",
    "size-4",
  ];

  return sizes.map((size, index) => (
    <span key={index} className="relative inline-block">
      <img alt="" src={imageUrl} className={`size-${size} rounded-md`} />
      <span className="absolute bottom-0 right-0 block translate-x-1/2 translate-y-1/2 transform rounded-full border-2 border-white">
        <span
          className={`block ${sizeClasses[index]} rounded-full ${colors[index]}`}
        />
      </span>
    </span>
  ));
};

export default AvatarDisplay;
