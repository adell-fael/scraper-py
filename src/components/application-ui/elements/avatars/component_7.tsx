import { FC } from 'react';
import { UserCircle } from 'lucide-react';

const AvatarDisplay: FC = () => {
  const sizes = [6, 8, 10, 12, 14];
  return sizes.map((size) => (
        <span key={size} className={`inline-block size-${size} overflow-hidden rounded-full bg-gray-100`}>
          <UserCircle className="size-full text-gray-300" />
        </span>
      ))

};

export default AvatarDisplay;