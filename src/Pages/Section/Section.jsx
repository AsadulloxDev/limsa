import React, { useState } from "react";
import img1 from "../../assets/section-img1.png";
import img2 from "../../assets/section-img2.png";

const Section = () => {
  const [opened, setOpened] = useState(false);
  const [secondOpened, setSecondOpened] = useState(false);
  const [thirdOpened, setThirdOpened] = useState(false);

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
        <h1 className="text-white font-bold text-5xl mb-6">
          Frequently Asked Questions
        </h1>
        <div
          className="w-[550px] border border-white p-[15px] rounded-2xl cursor-pointer transition-all duration-300"
          onClick={() => setOpened(!opened)}
        >
          <h1 className="text-[30px] text-white">Why are the prices so cheap?</h1>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              opened ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="text-[20px] text-white mt-2 p-[10px]">
              <li>We're always looking to improve our services.</li>
              <li>We're committed to providing high-quality products.</li>
              <li>We're always open to new ideas and suggestions.</li>
            </ul>
          </div>
        </div>
        <div
          className="w-[550px] border border-white p-[15px] rounded-2xl mt-4 cursor-pointer transition-all duration-300"
          onClick={() => setSecondOpened(!secondOpened)}
        >
          <h1 className="text-[30px] text-white">
            Will I be able to edit the site myself in the future?
          </h1>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              secondOpened ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="text-[20px] text-white mt-2 p-[10px]">
              <li>You will have full control over the content.</li>
              <li>We provide a user-friendly CMS for easy editing.</li>
              <li>Training and documentation will be provided.</li>
            </ul>
          </div>
        </div>
        <div
          className="w-[550px] border border-white p-[15px] rounded-2xl mt-4 cursor-pointer transition-all duration-300"
          onClick={() => setThirdOpened(!thirdOpened)}
        >
          <h1 className="text-[30px] text-white">
            Will you continue to support the site after it's finished?
          </h1>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              thirdOpened ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="text-[20px] text-white mt-2 p-[10px]">
              <li>Yes, we provide post-launch support.</li>
              <li>Regular updates and maintenance options available.</li>
              <li>Our support team is always available to help.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
