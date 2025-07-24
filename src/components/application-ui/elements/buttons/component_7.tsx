import { FC } from 'react';
import { CheckCircle } from 'lucide-react';

const ButtonsWithIcon: FC = () => {
  const buttonClass = "inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  const iconClass = "-mr-0.5 size-5";

  return (
    <>
      <button type="button" className={buttonClass}>
        Button text
        <CheckCircle aria-hidden="true" className={iconClass} />
      </button>
      <button type="button" className={buttonClass.replace('px-2.5 py-1.5', 'px-3 py-2')}>
        Button text
        <CheckCircle aria-hidden="true" className={iconClass} />
      </button>
      <button type="button" className={buttonClass.replace('gap-x-1.5 px-2.5 py-1.5', 'gap-x-2 px-3.5 py-2.5')}>
        Button text
        <CheckCircle aria-hidden="true" className={iconClass} />
      </button>
    </>
  )
}

export default ButtonsWithIcon;