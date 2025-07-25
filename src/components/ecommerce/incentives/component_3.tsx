import React from 'react';


const IncentivesSection: React.FC = () => {
  const incentivesData = [
    {
      name: 'Free shipping',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-shipping-simple.svg',
      description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
      name: '10-year warranty',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-warranty-simple.svg',
      description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
      name: 'Exchanges',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-exchange-simple.svg',
      description: "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              We built our business on customer service
            </h2>
            <p className="mt-4 text-gray-500">
              At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring
              about that. Our new strategy is to write a bunch of things that look really good in the headlines, then
              clarify in the small print but hope people don't actually read it.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentivesData.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:shrink-0">
                  <img alt={incentive.name} src={incentive.imageSrc} className="size-16" />
                </div>
                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncentivesSection;