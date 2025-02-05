import React from "react";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    title: "LANDING PAGE",
    description:
      "Another name for a one-page site is a Landing Page. The page is easy to use and introduces the customer to the information they need.",
    features: [
      "Domain UZ",
      "Protection 24/7",
      "Duration 3 days",
      "Number of pages 1",
    ],
  },
  {
    title: "SITE CARD",
    description:
      "It is the ‘business card’ of the company on the Internet. The site is to introduce the company’s services or products to the people visiting the business page.",
    features: [
      "Domain UZ",
      "Protection 24/7",
      "Duration 3-7 days",
      "Number of pages 2-4",
    ],
  },
  {
    title: "Exclusive",
    description:
      "This website is created based on your order. You can order any website you want.",
    features: [
      "Domain UZ",
      "Protection 24/7",
      "Number of languages - Desired",
      "High Design Level",
    ],
  },
];

const WebsitePlans = () => {
  return (
    <div className="p-8 bg-[#121212] pt-[100px] text-white">
      <div className="flex flex-col gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#212121] p-6 rounded-xl shadow-inner transform transition-all hover:shadow-2xl hover:bg-[#1b1b1b]"
          >
            <h2 className="text-2xl font-semibold text-white">{plan.title}</h2>
            <p className="mt-2 text-gray-400">{plan.description}</p>
            <ul className="mt-4 space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <FaCheck className="text-purple-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between items-center">
              <button className="text-purple-600 font-medium hover:text-purple-800 transition-colors">
                Negotiate
              </button>
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg shadow-md">
                Place Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsitePlans;
