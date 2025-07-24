import { ReactNode } from 'react';
import { Box } from 'lucide-react';

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => (
  <Box className="overflow-hidden rounded-lg bg-white shadow">
    <Box className="px-4 py-5 sm:p-6">{children}</Box>
    <Box className="bg-gray-50 px-4 py-4 sm:px-6"></Box>
  </Box>
);

export default Card;