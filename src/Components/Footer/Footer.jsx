import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import { FaLinkedinIn, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-[#212121] flex flex-col xl:flex-row xl:justify-evenly pt-12 px-6">
        <div className="mb-8 xl:mb-0">
          <h1 className="text-white text-2xl md:text-3xl xl:text-4xl font-bold max-w-xl">
            {t("footer.order_title")}
          </h1>
          <h1 className="text-purple-800 text-lg md:text-xl mt-4">
            {t("footer.order_subtitle")}
          </h1>
          <h1 className="text-white text-xl md:text-2xl mt-4 font-bold">
            {t("footer.pages")}
          </h1>
          <div>
            <a className="text-stone-500 text-lg" href="/">
              {t("footer.home")}
            </a>
          </div>
          <div>
            <a className="text-stone-500 text-lg" href="/services">
              {t("footer.services")}
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <h1 className="text-white text-2xl md:text-3xl xl:text-5xl font-bold">
            {t("footer.leave_details")}
          </h1>
          <input
            className="text-white mt-4 bg-[#303030] rounded-lg w-full md:w-96 h-12 p-4"
            type="text"
            placeholder={t("footer.name_placeholder")}
          />
          <input
            type="text"
            defaultValue={t("footer.phone_placeholder")}
            className="text-white mt-4 bg-[#303030] rounded-lg w-full md:w-96 h-12 p-4"
          />
          <textarea
            className="text-white mt-4 bg-[#303030] rounded-lg h-36 w-full md:w-96 p-4"
            placeholder={t("footer.message_placeholder")}
          ></textarea>
          <div>
            <button className="mt-6 w-36 h-12 bg-purple-800 rounded-full text-white hover:bg-purple-900 transition-all">
              {t("footer.send_button")}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#1a1a1a] p-6 md:p-12 flex flex-col lg:flex-row justify-between">
        <div className="mb-8 lg:mb-0">
          <h1 className="text-2xl md:text-3xl xl:text-5xl text-white font-bold">
            {t("footer.contacts")}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="flex items-center gap-2">
              <CiLocationOn className="text-3xl md:text-4xl text-gray-400" />
              <div>
                <h1 className="text-white font-bold">{t("footer.address_title")}</h1>
                <h1 className="text-stone-200">{t("footer.address")}</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlinePhoneInTalk className="text-3xl md:text-4xl text-gray-400" />
              <div>
                <h1 className="text-white font-bold">{t("footer.phone_title")}</h1>
                <h1 className="text-stone-200">{t("footer.phone_number")}</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IoTimeSharp className="text-3xl md:text-4xl text-gray-400" />
              <div>
                <h1 className="text-white font-bold">{t("footer.working_hours_title")}</h1>
                <h1 className="text-stone-200">{t("footer.working_hours")}</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CiShare2 className="text-3xl md:text-4xl text-gray-400" />
              <div>
                <h1 className="text-white font-bold">{t("footer.social_networks")}</h1>
                <div className="text-white text-2xl flex gap-2">
                  <FaLinkedinIn />
                  <FaInstagram />
                  <FaTelegramPlane />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.6554713031173!2d69.28311557580024!3d41.33810459905102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5f1f5cfd49%3A0x110bc2a5ed9856b7!2sLIMSA!5e0!3m2!1sru!2s!4v1739009574712!5m2!1sru!2s"
            className="w-full h-64 md:h-72 rounded-3xl"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="bg-black p-6 flex flex-col md:flex-row items-center justify-between">
        <img className="w-32 md:w-44" src={logo} alt="Logo" />
        <h1 className="text-white text-lg md:text-xl mt-4 md:mt-0">
          {t("footer.copyright")}
        </h1>
      </div>
    </div>
  );
}

export default Footer;
