import React from 'react';

const PromoSection: React.FC = () => {
  const images = [
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-category-01.jpg",
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-category-02.jpg",
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-favorite-01.jpg",
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-favorite-02.jpg",
  ];

  return (
    <div className="bg-white">
      <div className="overflow-hidden pt-32 sm:pt-14">
        <div className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative pb-16 pt-48 sm:pb-24">
              <div>
                <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Final Stock.
                  <br />
                  Up to 50% off.
                </h2>
                <div className="mt-6 text-base">
                  <a href="#" className="font-semibold text-white">
                    Shop the sale
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>

              <div className="absolute -top-32 left-1/2 min-w-max -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                <div className="ml-24 flex space-x-6 sm:ml-3 lg:space-x-8">
                  {images.map((src, index) => (
                    <div key={index} className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div className="shrink-0">
                        <img
                          alt=""
                          src={src}
                          className="size-64 rounded-lg object-cover md:size-72"
                        />
                      </div>
                      {index % 2 === 0 && (
                        <div className="mt-6 shrink-0 sm:mt-0">
                          <img
                            alt=""
                            src={images[index + 1]}
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;