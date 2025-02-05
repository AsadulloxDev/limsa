import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "../../assets/logo.png"
function Footer() {
  return (
    <div>
      <div className="bg-[#212121] flex justify-evenly pt-[50px] w-100%">
        <div>
          <h1 className="text-white text-[40px] w-[630px] font-bold">
            Order a website for your business now, And get a small gift from us
            10% off!
          </h1>
          <h1 className="text-purple-800 text-[18px] mt-[20px]">
            Satisfying every customer is our highest goal - LIMSA
          </h1>
          <h1 className="text-white text-[30px] mt-[20px] font-bold">Pages</h1>
          <div>
            <a className="text-stone-500 text-[20px]" href="/">
              Home
            </a>
          </div>
          <div>
            <a className="text-stone-500 text-[20px]" href="/services">
              Our Services
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <h1 className="text-white text-5xl font-bold">Leave your details</h1>
          <input
            className="text-white mt-[15px] bg-[#303030] rounded-[10px] w-[500px] h-[60px] p-[10px]"
            type="text"
            placeholder="Your name"
          />
          <input
            type="text"
            defaultValue={"+998"}
            className="text-white mt-[15px] bg-[#303030] rounded-[10px] w-[500px] h-[60px] p-[10px]"
          />
          <textarea
            className="text-white mt-[15px] bg-[#303030] rounded-[10px] h-[150px] w-[500px] p-[10px]"
            placeholder="Your massage"
          ></textarea>
          <div>
            <button className=" mb-[100px] hover:bg-purple-900 transition-all mt-[25px] w-[140px] h-[45px] bg-purple-800 rounded-[30px] text-white">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#1a1a1a] p-[50px] flex justify-around">
        <div>
          <div>
            <h1 className="text-5xl text-white font-bold">Contacts</h1>
          </div>
          <div className="grid grid-cols-2 gap-[50px] mt-[50px] w-[700px]">
            <div className="flex items-center gap-2">
              <CiLocationOn className="text-4xl text-gray-400" />
              <div>
                <h1 className="text-white font-bold">Address</h1>
                <h1 className="text-stone-200">
                  Tashkent city Yunusabad district
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlinePhoneInTalk className="text-4xl text-gray-400" />
              <div>
                <h1 className="text-white font-bold">Phone Number</h1>
                <h1 className="text-stone-200">+998 (33) 258 73 58</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IoTimeSharp className="text-4xl text-gray-400" />
              <div>
                <h1 className="text-white font-bold">Working hours</h1>
                <h1 className="text-stone-200">9:00 18:00 Monday-Saturday</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CiShare2 className="text-4xl text-gray-400" />
              <div>
                <h1 className="text-white font-bold">Social networks</h1>
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
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="bg-black p-[30px] flex items-center justify-between">
        <div><img className="w-[180px]" src={logo} alt="" /></div>
        <div><h1 className="text-white text-[18px]">© 2024 Limsa. All rights reserved.</h1></div>
      </div>
    </div>
  );
}

export default Footer;
