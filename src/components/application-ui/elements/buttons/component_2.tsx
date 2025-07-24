import { FC } from 'react';

const ButtonComponents: FC = () => {
  const buttonClasses = [
    "rounded bg-white font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
    "rounded-md bg-white font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
  ];
  const buttonSizes = ["px-2 py-1 text-xs", "px-2 py-1 text-sm", "px-2.5 py-1.5 text-sm", "px-3 py-2 text-sm", "px-3.5 py-2.5 text-sm"];

  return (
    <>
      {buttonClasses.map((buttonClass, index) =>
        <button
          key={index}
          type="button"
          className={`${buttonClass} ${buttonSizes[index]}`}
        >
          Button text
        </button>
      )}
    </>
  )
}

export default ButtonComponents;