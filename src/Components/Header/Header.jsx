import React, { useEffect, useState } from "react";
import kompImg from "../../assets/komp-img.png";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  return (
    <header
      className="h-[747px]"
      style={{
        background: "radial-gradient(circle at top, #1a1a2e, #0f0f1e 80%)",
      }}
    >

      <div className="flex items-center p-[20px] absolute top-[90px]">
        <div className="ml-10">
          <h1 className="text-white font-[500] text-4xl w-[580px]">
            {t("header.title")}
          </h1>
          <p className="text-gray-300 w-[575px] text-[18px] mt-[20px]">
            {t("header.description")}
          </p>
          <button className="w-auto px-2 mt-[20px] text-white h-[35px] rounded-xl hover:bg-purple-950 transition-all hover:scale-[1.1] duration-500 bg-purple-700">
            {t("header.button")}
          </button>
        </div>
        <div>
          <img src={kompImg} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
