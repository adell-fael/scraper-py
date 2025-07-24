import { FC } from "react";

const AvatarDisplay: FC = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  const sizes = [6, 8, 10, 12, 14, 16];
  const colors = ["bg-gray-300", "bg-red-400", "bg-green-400"];

  return sizes.map((size, index) => (
    <span key={index} className="relative inline-block">
      <img alt="" src={imageUrl} className={`size-${size} rounded-full`} />
      <span
        className={`absolute bottom-0 right-0 block size-${
          size / 2
        } rounded-full ${colors[index % colors.length]} ring-2 ring-white`}
      />
    </span>
  ));
};

export default AvatarDisplay;
