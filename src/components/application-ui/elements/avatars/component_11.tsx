
import { FC } from 'react';
import { ArrowRight } from 'lucide-react';

const AvatarDisplay: FC = () => {
  const imageUrl = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  const userName = "Tom Cook";
  const userAction = "View profile";

  return (
    <a href="#" className="group block shrink-0">
      <div className="flex items-center">
        <div>
          <img
            alt=""
            src={imageUrl}
            className="inline-block size-9 rounded-full"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{userName}</p>
          <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">{userAction}</p>
        </div>
        <ArrowRight className="ml-2" />
      </div>
    </a>
  )
}

export default AvatarDisplay;
