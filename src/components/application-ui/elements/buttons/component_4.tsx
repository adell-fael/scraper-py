import { FC } from 'react';

const ButtonComponents: FC = () => {
  const buttonText = "Button text";
  const buttonClass = "rounded bg-white/10 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-white/20";
  const buttonClassMd = "rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20";

  return (
    <>
      <button type="button" className={buttonClass}>
        {buttonText}
      </button>
      <button type="button" className={buttonClass.replace('text-xs', 'text-sm')}>
        {buttonText}
      </button>
      <button type="button" className={buttonClassMd}>
        {buttonText}
      </button>
      <button type="button" className={buttonClassMd.replace('px-2.5 py-1.5', 'px-3 py-2')}>
        {buttonText}
      </button>
      <button type="button" className={buttonClassMd.replace('px-2.5 py-1.5', 'px-3.5 py-2.5')}>
        {buttonText}
      </button>
    </>
  )
}

export default ButtonComponents;