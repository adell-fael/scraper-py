import React, { FC, ReactNode } from "react";

const CardComponent: FC<{ children: ReactNode }> = ({ children }) => {
  const cardStyle = "overflow-hidden rounded-lg bg-gray-200";
  const contentStyle = "px-4 py-5 sm:p-6";

  return (
    <div className={cardStyle}>
      <div className={contentStyle}>{children}</div>
    </div>
  );
};

export default CardComponent;
