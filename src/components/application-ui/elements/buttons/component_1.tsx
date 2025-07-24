import { FC } from 'react';

const ButtonComponents: FC = () => {
  const buttonClasses = [
    "rounded bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
    "rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  ];

  return (
    <>
      <button type="button" className={`${buttonClasses[0]} px-2 py-1 text-xs`}>
        Button text
      </button>
      <button type="button" className={`${buttonClasses[0]} px-2 py-1`}>
        Button text
      </button>
      <button type="button" className={`${buttonClasses[1]} px-2.5 py-1.5`}>
        Button text
      </button>
      <button type="button" className={`${buttonClasses[1]} px-3 py-2`}>
        Button text
      </button>
      <button type="button" className={`${buttonClasses[1]} px-3.5 py-2.5`}>
        Button text
      </button>
    </>
  );
};

export default ButtonComponents;