import React from "react";
import { FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WebsitePlans = () => {
  const { t } = useTranslation();

  const plans = [
    {
      title: t("plans.title1"),
      description: t("plans.description1"),
      features: t("plans.features1", { returnObjects: true }),
    },
    {
      title: t("plans.title2"),
      description: t("plans.description2"),
      features: t("plans.features2", { returnObjects: true }),
    },
    {
      title: t("plans.title3"),
      description: t("plans.description3"),
      features: t("plans.features3", { returnObjects: true }),
    },
  ];

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
                {t("plans.negotiate")}
              </button>
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg shadow-md">
                {t("plans.placeOrder")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsitePlans;
