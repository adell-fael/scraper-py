export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="grid min-h-full grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
        <div className="relative flex">
          <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="relative flex w-full flex-col items-start justify-end bg-black/40 p-8 sm:p-12">
            <h2 className="text-lg font-medium text-white/75">Self-Improvement</h2>
            <p className="mt-1 text-2xl font-medium text-white">Journals and note-taking</p>
            <a
              href="#"
              className="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Shop now
            </a>
          </div>
        </div>
        <div className="relative flex">
          <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="relative flex w-full flex-col items-start justify-end bg-black/40 p-8 sm:p-12">
            <h2 className="text-lg font-medium text-white/75">Desk and Office</h2>
            <p className="mt-1 text-2xl font-medium text-white">Work from home accessories</p>
            <a
              href="#"
              className="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Shop now
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
