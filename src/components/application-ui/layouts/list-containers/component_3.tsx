import React from 'react';

const ListContainers: React.FC = () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="px-4 py-4 sm:px-6">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListContainers;