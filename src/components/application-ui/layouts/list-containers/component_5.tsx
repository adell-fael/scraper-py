import React from 'react';

const ListContainers: React.FC = () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
          {/* Your content */}
        </li>
      ))}
    </ul>
  );
};

export default ListContainers;