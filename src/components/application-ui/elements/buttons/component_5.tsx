import { FC } from 'react';

const ButtonComponents: FC = () => {
  const buttonText = "Button text";
  const buttonClasses = [
    "rounded bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100",
    "rounded bg-indigo-50 px-2 py-1 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100",
    "rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100",
    "rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100",
    "rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
  ];

  return (
    <>
      {buttonClasses.map((buttonClass, index) => (
        <button key={index} type="button" className={buttonClass}>
          {buttonText}
        </button>
      ))}
    </>
  );
};

export default ButtonComponents;