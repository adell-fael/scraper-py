import { FC } from "react";

const AvatarDisplay: FC = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  const sizes = [6, 8, 10, 12, 14];

  return sizes.map((size) => (
    <img
      key={size}
      alt=""
      src={imageUrl}
      className={`inline-block size-${size} rounded-full`}
    />
  ));
};

export default AvatarDisplay;
