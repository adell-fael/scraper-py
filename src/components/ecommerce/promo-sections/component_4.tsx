import React from 'react';

const PromoSection = () => {
  const imageUrl = "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-feature-section-01.jpg";
  const title = "Level up your desk";
  const description = "Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice desk setup.";
  const buttonText = "Shop Workspace";

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <img
              alt=""
              src={imageUrl}
              className="size-full object-cover"
            />
          </div>
          <div className="relative bg-gray-900/75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block sm:inline">{title.split(' ')[0]}</span>
                <span className="block sm:inline">{title.split(' ')[1]}</span>
              </h2>
              <p className="mt-3 text-xl text-white">
                {description}
              </p>
              <a
                href="#"
                className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;