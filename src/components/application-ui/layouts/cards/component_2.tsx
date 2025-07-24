
import { FC, ReactNode } from 'react';

const CardComponent: FC<{ children: ReactNode }> = ({ children }) => {

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  )
}

export default CardComponent;