import React from "react";
import { QuoteIcon } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!",
      attribution: "Sarah Peters, New Orleans",
    },
    {
      id: 2,
      quote:
        "I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!",
      attribution: "Kelly McPherson, Chicago",
    },
    {
      id: 3,
      quote:
        "Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.",
      attribution: "Chris Paul, Phoenix",
    },
  ];
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Decorative background image and gradient */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
          <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-sale-full-width.jpg"
            className="size-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-white/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
      </div>

      {/* Callout */}
      <section
        aria-labelledby="sale-heading"
        className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2
            id="sale-heading"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Get 25% off during our one-time sale
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
            Most of our products are limited releases that won't come back. Get
            your favorite items while they're in stock.
          </p>
          <a
            href="#"
            className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto"
          >
            Get access to our one-time sale
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section
        aria-labelledby="testimonial-heading"
        className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2
            id="testimonial-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            What are people saying?
          </h2>

          <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.id} className="sm:flex lg:block">
                <QuoteIcon
                  className="shrink-0 text-gray-300"
                  width={24}
                  height={18}
                  aria-hidden="true"
                />
                <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                  <p className="text-lg text-gray-600">{testimonial.quote}</p>
                  <cite className="mt-4 block font-semibold not-italic text-gray-900">
                    {testimonial.attribution}
                  </cite>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsSection;
