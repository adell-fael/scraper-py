import React from 'react';

const ListContainers: React.FC = () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <div className="overflow-hidden rounded-md bg-white shadow">
      <ul role="list" className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="px-6 py-4">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListContainers;