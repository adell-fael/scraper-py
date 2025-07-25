import React from 'react';

const PromoSection: React.FC = () => {
  const imageUrl = "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-hero-full-width.jpg";
  const title = "New arrivals are here";
  const description = "The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.";
  const buttonText = "Shop New Arrivals";

  return (
    <div className="bg-white">
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            src={imageUrl}
            className="size-full object-cover"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">{title}</h1>
          <p className="mt-4 text-xl text-white">{description}</p>
          <a
            href="#"
            className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;