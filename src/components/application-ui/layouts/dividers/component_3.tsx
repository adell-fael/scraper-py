import React from 'react';

const DividerWithContinueText: React.FC = () => {
  const text = "Continue";
  const textColor = "text-gray-500";
  const textBgColor = "bg-white";
  const paddingRight = "pr-2";
  const textSize = "text-sm";

  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-start">
        <span className={`${textBgColor} ${paddingRight} ${textSize} ${textColor}`}>{text}</span>
      </div>
    </div>
  )
}

export default DividerWithContinueText;