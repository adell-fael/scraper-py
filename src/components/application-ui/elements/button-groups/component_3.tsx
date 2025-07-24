import { FC } from 'react';
import { Bookmark } from 'lucide-react';

const BookmarkButton: FC = () => {
  const buttonClass = "relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10";
  const buttonClass2 = "relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10";
  const spanClass = "isolate inline-flex rounded-md shadow-sm";

  return (
    <span className={spanClass}>
      <button type="button" className={buttonClass}>
        <Bookmark aria-hidden="true" className="-ml-0.5 size-5 text-gray-400" />
        Bookmark
      </button>
      <button type="button" className={buttonClass2}>
        12k
      </button>
    </span>
  )
}

export default BookmarkButton;