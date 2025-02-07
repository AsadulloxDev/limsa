import React, { useState } from "react";
import img1 from "../../assets/section-img1.png";
import img2 from "../../assets/section-img2.png";
import { FaArrowDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Section = () => {
  const [opened, setOpened] = useState(false);
  const [secondOpened, setSecondOpened] = useState(false);
  const [thirdOpened, setThirdOpened] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-[#212121] flex justify-around items-center py-20">
      <div className="flex gap-[50px] mt-[100px]">
        <div>
          <img className="h-[450px]" src={img1} alt="FAQ Image 1" />
        </div>
        <div>
          <img className="h-[450px] mt-[100px]" src={img2} alt="FAQ Image 2" />
        </div>
      </div>
      <div>
        <h1 className="text-white font-bold text-5xl mb-6">{t("section.title")}</h1>
        
        {[{
          question: t("section.questionTitle"),
          answer: [
            t("section.answer"),
            t("section.answer2"),
            t("section.answer3"),
          ],
          state: opened,
          setState: setOpened
        }, {
          question: t("section.questionTitle"),
          answer: [
            t("section.answer"),
            t("section.answer2"),
            t("section.answer3"),
          ],
          state: secondOpened,
          setState: setSecondOpened
        }, {
          question: t("section.questionTitle"),
          answer: [
            t("section.answer"),
            t("section.answer2"),
            t("section.answer3"),
          ],
          state: thirdOpened,
          setState: setThirdOpened
        }].map((item, index) => (
          <div
            key={index}
            className="w-[550px] border border-white p-[15px] rounded-2xl mt-4 cursor-pointer transition-all duration-300"
            onClick={() => item.setState(!item.state)}
          >
            <div className="flex justify-between items-center">
              <h1 className="text-[30px] text-white">{item.question}</h1>
              <FaArrowDown 
                className={`text-white text-3xl ml-4 transition-transform duration-300 ${item.state ? 'rotate-180' : ''}`} 
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                item.state ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="text-[20px] text-white mt-2 p-[10px]">
                {item.answer.map((ans, i) => (
                  <li key={i}>{ans}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
