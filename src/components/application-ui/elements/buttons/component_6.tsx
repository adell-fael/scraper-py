import { FC } from 'react';
import { CheckCircle } from 'lucide-react';

const ButtonsWithIcon: FC = () => {
  const buttonClasses = "inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  const iconClasses = "-ml-0.5 size-5";

  return (
    <>
      <button type="button" className={`${buttonClasses} px-2.5 py-1.5`}>
        <CheckCircle aria-hidden="true" className={iconClasses} />
        Button text
      </button>
      <button type="button" className={`${buttonClasses} px-3 py-2`}>
        <CheckCircle aria-hidden="true" className={iconClasses} />
        Button text
      </button>
      <button type="button" className={`${buttonClasses} px-3.5 py-2.5`}>
        <CheckCircle aria-hidden="true" className={iconClasses} />
        Button text
      </button>
    </>
  )
}

export default ButtonsWithIcon;