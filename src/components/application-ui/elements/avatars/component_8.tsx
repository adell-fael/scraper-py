
import { FC } from 'react';
import { Twitter } from 'lucide-react';

const AvatarDisplay: FC = () => {
  const sizes = ['xs', 'sm', '', 'lg', 'xl'];
  const sizeNumbers = [6, 8, 10, 12, 14];

  return sizeNumbers.map((sizeNumber, index) => (
        <span
          key={sizeNumber}
          className={`inline-flex size-${sizeNumber} items-center justify-center rounded-full bg-gray-500`}
        >
          <Twitter name="twitter" size={sizeNumber} color="white" />
          <span className={`text-${sizes[index]} font-medium text-white`}>TW</span>
        </span>
      ))
};

export default AvatarDisplay;
