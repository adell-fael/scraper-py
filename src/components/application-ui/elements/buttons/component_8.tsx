import { FC } from "react";

const ButtonComponents: FC = () => {
  const buttonClass =
    "rounded-full bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  const buttonTypes = [
    "px-2.5 py-1 text-xs",
    "px-2.5 py-1",
    "px-3 py-1.5",
    "px-3.5 py-2",
    "px-4 py-2.5",
  ];

  return buttonTypes.map((type, index) => (
    <button key={index} type="button" className={`${buttonClass} ${type}`}>
      Button text
    </button>
  ));
};

export default ButtonComponents;
