import React, { useEffect, useState } from "react";
import kompImg from "../../assets/komp-img.png";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  return (
    <header
      className="xl:h-[747px] h-[800px] sm:h-[600px]"
      style={{
        background: "radial-gradient(circle at top, #1a1a2e, #0f0f1e 80%)",
      }}
    >

      <div className="block items-center sm:flex p-[20px] absolute top-[90px]">
        <div className="ml-10">
          <h1 className="text-white font-[500] text-4xl md:w-[580px] w-auto">
            {t("header.title")}
          </h1>
          <p className="text-gray-300 md:w-[575px] text-[18px] mt-[20px]">
            {t("header.description")}
          </p>
          <button className="w-auto px-2 mt-[20px] text-white h-[35px] rounded-xl hover:bg-purple-950 transition-all hover:scale-[1.1] duration-500 bg-purple-700">
            {t("header.button")}
          </button>
        </div>
        <div>
          <img className="w-[80%] mt-[30px] mx-auto sm:w-[100%]" src={kompImg} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
