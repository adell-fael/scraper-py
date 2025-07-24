import { ReactNode } from 'react';
import { Box } from 'lucide-react';

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => (
  <Box className="overflow-hidden rounded-lg bg-white shadow">
    <div className="px-4 py-5 sm:px-6">
      {children}
    </div>
    <div className="bg-gray-50 px-4 py-5 sm:p-6">
      {children}
    </div>
  </Box>
);

export default Card;