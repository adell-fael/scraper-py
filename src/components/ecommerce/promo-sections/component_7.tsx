import React from 'react';

const PromoSection = () => {
  const title = "Summer styles are finally here";
  const description = "This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.";
  const imageUrls = [
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg",
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg",
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg",
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg",
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg",
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg",
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{title}</h1>
            <p className="mt-4 text-xl text-gray-500">{description}</p>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    {Array.from({ length: 4 }, (_, index) => (
                      <div key={index} className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        {imageUrls.slice(index * 2, index * 2 + 2).map((url, idx) => (
                          <div key={idx} className="h-64 w-44 overflow-hidden rounded-lg">
                            <img alt="" src={url} className="size-full object-cover" />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;