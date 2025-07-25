import React from 'react';

const PromoSection = () => {
  const backgroundImageUrl = "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-feature-section-full-width.jpg";
  const heading = "Long-term thinking";
  const description = "We're committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows us to focus on quality and reduce our impact. We're doing our best to delay the inevitable heat-death of the universe.";
  const buttonText = "Read our story";
  const buttonLink = "#";

  return (
    <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          alt=""
          src={backgroundImageUrl}
          className="size-full object-cover"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gray-900/50" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{heading}</h2>
        <p className="mt-3 text-xl text-white">{description}</p>
        <a
          href={buttonLink}
          className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default PromoSection;