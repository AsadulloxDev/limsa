import React from "react";
import { FaDesktop, FaKey, FaShieldAlt, FaHeadphones, FaGlobe, FaServer } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaDesktop className="text-4xl text-white" />,
    title: "Adaptive",
    description:
      "The websites we create will be flexible. That is, they will have a tablet and mobile version. There will be no separate payment for this.",
  },
  {
    id: 2,
    icon: <FaKey className="text-4xl text-white" />,
    title: "Admin",
    description:
      "Your website will have a convenient and simple admin panel that will allow you to manage the site from within.",
  },
  {
    id: 3,
    icon: <FaShieldAlt className="text-4xl text-white" />,
    title: "Protection",
    description:
      "Our websites are protected by modern anti-virus and firewalls to resist spambots and attacks.",
  },
  {
    id: 4,
    icon: <FaHeadphones className="text-4xl text-white" />,
    title: "Monitoring 24/7",
    description:
      "Your website is automatically monitored online 24 hours a day to keep it up and running.",
  },
  {
    id: 5,
    icon: <FaServer className="text-4xl text-white" />,
    title: "Domain and Hosting",
    description:
      "Domain and hosting run around, forget about headaches. We have domain UZ and hosting free for 6 months (then $10/month).",
  },
  {
    id: 6,
    icon: <FaGlobe className="text-4xl text-white" />,
    title: "Unique",
    description:
      "The design of each site we create will be unique and different from other sites. One design is one site!",
  },
];

function Service() {
  return (
    <div className="bg-[#212121]">
      <div className="pb-[50px] pt-[50px]">
        <div className="m-auto mt-[100px] w-[200px] text-center pt-[13px] text-white rounded-2xl h-[50px] border border-purple-800">
          Our Services
        </div>
        <div className="bg-[#212121] p-[0px]">
          <h1 className="text-white text-[50px] text-center font-bold">
            Why us? Why most people choose us?
          </h1>
          <h1 className="text-purple-700 text-[50px] font-bold text-center">
            Our Benefits
          </h1>
        </div>
      </div>
      <div>
        <div>
          <div className="bg-[#181818] py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-[#212121] rounded-2xl p-6 flex flex-col items-start shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
