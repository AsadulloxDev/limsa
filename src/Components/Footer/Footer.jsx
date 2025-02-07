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
      <div className="bg-[#212121] flex justify-evenly pt-[50px] w-100%">
        <div>
          <h1 className="text-white text-[40px] w-[630px] font-bold">
            {t("footer.order_title")}
          </h1>
          <h1 className="text-purple-800 text-[18px] mt-[20px]">
            {t("footer.order_subtitle")}
          </h1>
          <h1 className="text-white text-[30px] mt-[20px] font-bold">
            {t("footer.pages")}
          </h1>
          <div>
            <a className="text-stone-500 text-[20px]" href="/">
              {t("footer.home")}
            </a>
          </div>
          <div>
            <a className="text-stone-500 text-[20px]" href="/services">
              {t("footer.services")}
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <h1 className="text-white text-5xl font-bold">{t("footer.leave_details")}</h1>
          <input
            className="text-white mt-[15px] bg-[#303030] rounded-[10px] w-[500px] h-[60px] p-[10px]"
            type="text"
            placeholder={t("footer.name_placeholder")}
          />
          <input
            type="text"
            defaultValue={t("footer.phone_placeholder")}
            className="text-white mt-[15px] bg-[#303030] rounded-[10px] w-[500px] h-[60px] p-[10px]"
          />
          <textarea
            className="text-white mt-[15px] bg-[#303030] rounded-[10px] h-[150px] w-[500px] p-[10px]"
            placeholder={t("footer.message_placeholder")}
          ></textarea>
          <div>
            <button className="mb-[100px] hover:bg-purple-900 transition-all mt-[25px] w-[140px] h-[45px] bg-purple-800 rounded-[30px] text-white">
              {t("footer.send_button")}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#1a1a1a] p-[50px] flex justify-around">
        <div>
          <h1 className="text-5xl text-white font-bold">{t("footer.contacts")}</h1>
          <div className="grid grid-cols-2 gap-[50px] mt-[50px] w-[700px]">
            <div className="flex items-center gap-2">
              <CiLocationOn className="text-4xl text-gray-400" />
              <div>
                <h1 className="text-white font-bold">{t("footer.address_title")}</h1>
                <h1 className="text-stone-200">{t("footer.address")}</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlinePhoneInTalk className="text-4xl text-gray-400" />
              <div>
                <h1 className="text-white font-bold">{t("footer.phone_title")}</h1>
                <h1 className="text-stone-200">{t("footer.phone_number")}</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IoTimeSharp className="text-4xl text-gray-400" />
              <div>
                <h1 className="text-white font-bold">{t("footer.working_hours_title")}</h1>
                <h1 className="text-stone-200">{t("footer.working_hours")}</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CiShare2 className="text-4xl text-gray-400" />
              <div>
                <h1 className="text-white font-bold">{t("footer.social_networks")}</h1>
                <div className="text-white text-3xl flex gap-2">
                  <FaLinkedinIn />
                  <FaInstagram />
                  <FaTelegramPlane />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.6554713031173!2d69.28311557580024!3d41.33810459905102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5f1f5cfd49%3A0x110bc2a5ed9856b7!2sLIMSA!5e0!3m2!1sru!2s!4v1738778610545!5m2!1sru!2s"
            width="600"
            height="450"
            loading="lazy"
            className="h-[300px] rounded-3xl"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="bg-black p-[30px] flex items-center justify-between">
        <div>
          <img className="w-[180px]" src={logo} alt="Logo" />
        </div>
        <div>
          <h1 className="text-white text-[18px]">{t("footer.copyright")}</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
