import { FC } from 'react';

const AvatarDisplay: FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  ];

  const sizes = [6, 8, 10];

  return sizes.map((size, index) => (
        <div key={index} className={`isolate flex -space-x-${index + 1} overflow-hidden`}>
          {images.map((image, imgIndex) => (
            <img
              key={imgIndex}
              alt=""
              src={image}
              className={`relative z-${30 - imgIndex * 10} inline-block size-${size} rounded-full ring-2 ring-white`}
            />
          ))}
        </div>
      ))
};

export default AvatarDisplay;
