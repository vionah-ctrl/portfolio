import React from "react";

const services = [
  {
    title: "Wedding Photography",
    description:
      "Capturing your special day with beautiful, candid, and memorable photos that tell the story of your love.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-[#c9a66b] mx-auto mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h3l2-3h8l2 3h3v13H3V7z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    title: "Portrait Sessions",
    description:
      "Professional portraits that showcase your personality, whether in studio or at an outdoor location.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-[#c9a66b] mx-auto mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx="12" cy="8" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    ),
  },
  {
    title: "Travel & Nature",
    description:
      "Stunning photos capturing the beauty of nature and the essence of your travel adventures.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-[#c9a66b] mx-auto mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3a15 15 0 010 18" />
      </svg>
    ),
  },
  {
    title: "Photo Editing",
    description:
      "Expert photo retouching and editing to enhance the quality and impact of your images.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-[#c9a66b] mx-auto mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 3.487l3.651 3.651-11.02 11.02H5.84v-3.651l11.02-11.02z"
        />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section className="bg-[#efe7db] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-px bg-[#c9a66b]"></div>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 px-6 text-center">
            My Photography Services
          </h2>
          <div className="flex-1 h-px bg-[#c9a66b]"></div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f6efe6] border border-[#e2d6c6] rounded-lg p-6 text-center shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 duration-300"
            >
              {/* Icon */}
              {service.icon}

              {/* Title */}
              <h3 className="font-serif text-xl text-gray-800 mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
