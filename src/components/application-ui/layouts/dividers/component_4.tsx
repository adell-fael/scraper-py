import React from 'react';

const DividersWithProjects: React.FC = () => {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-3 text-base font-semibold text-gray-900">Projects</span>
      </div>
    </div>
  )
}

export default DividersWithProjects;