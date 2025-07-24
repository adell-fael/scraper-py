import { ReactNode } from 'react';

interface CardProps {
  headerContent: ReactNode;
  bodyContent: ReactNode;
  footerContent: ReactNode;
}

const Card: React.FC<CardProps> = ({ headerContent, bodyContent, footerContent }) => (
  <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
    <div className="px-4 py-5 sm:px-6">
      {headerContent}
    </div>
    <div className="px-4 py-5 sm:p-6">
      {bodyContent}
    </div>
    <div className="px-4 py-4 sm:px-6">
      {footerContent}
    </div>
  </div>
);

export default Card;