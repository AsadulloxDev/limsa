import React from 'react'
import Atayev from "../../assets/Atayev.jpg";
import avto from "../../assets/avto.jpg";
import ittime from "../../assets/ittime.png";
import homekit from "../../assets/homekit.jpg";
import uzloyal from "../../assets/uzloyal.jpg";
import oits from "../../assets/oits.jpg";
import partnyor from "../../assets/partnyor.jpg";
import zamon from "../../assets/zamontour.jpg";
import { useTranslation } from 'react-i18next';
function Project() {
    const { t, i18n } = useTranslation();
  return (
    <div className='bg-[#212121] w-[100%] h-auto pb-[100px] pl-[30px]'>
        <h1 className='text-white text-5xl font-500 text-center pt-[150px]'>{t("project.title")}</h1>
        <div className='grid lg:grid-cols-2 px-auto grid-cols-1 justify-between 2xl:grid-cols-3 ml'>
            <div className='sm:w-[450px] w-[325px] mt-[30px] mx-auto'>
                <a href="https://www.ataevbahodirbuild.uz/" className='font-bold text-white ml-[10px]'>ataevbahodirbuild.uz</a>
                <img className='w-[450px] mt-[10px] mb-[15px]  hover:scale-[1.1] transition-all duration-[0.4s]' src={Atayev} alt="" />
                <p><a className='font-500 text-center text-white' href="https://www.ataevbahodirbuild.uz/">{t("project.description")}</a></p>
                <hr className='bg-gray-500 sm:w-[450px] w-auto mt-[20px] mx-auto h-[2px]' />
            </div>
            <div className='sm:w-[450px] w-[325px] mt-[30px] mx-auto'>
                <a href="https://www.ataevbahodirbuild.uz/" className='font-bold text-white ml-[10px]'>ataevbahodirbuild.uz</a>
                <img className='mt-[10px] mb-[15px]  hover:scale-[1.1] transition-all duration-[0.4s]' src={avto} alt="" />
                <p><a className='font-500 text-center text-white' href="https://www.ataevbahodirbuild.uz/">{t("project.description")}</a></p>
                <hr className='bg-gray-500 sm:w-[450px] w-auto mt-[20px] mx-auto h-[2px]' />
            </div>
            <div className='sm:w-[450px] w-[325px] mt-[30px] mx-auto'>
                <a href="https://www.ataevbahodirbuild.uz/" className='font-bold text-white ml-[10px]'>ataevbahodirbuild.uz</a>
                <img className='w-[450px] mt-[10px] mb-[15px]  hover:scale-[1.1] transition-all duration-[0.4s]' src={ittime} alt="" />
                <p><a className='font-500 text-center text-white' href="https://www.ataevbahodirbuild.uz/">{t("project.description")}</a></p>
                <hr className='bg-gray-500 sm:w-[450px] w-auto mt-[20px] mx-auto h-[2px]' />
            </div>
            <div className='sm:w-[450px] w-[325px] mt-[30px] mx-auto'>
                <a href="https://www.ataevbahodirbuild.uz/" className='font-bold text-white ml-[10px]'>ataevbahodirbuild.uz</a>
                <img className='w-[450px] mt-[10px] mb-[15px]  hover:scale-[1.1] transition-all duration-[0.4s]' src={homekit} alt="" />
                <p><a className='font-500 text-center text-white' href="https://www.ataevbahodirbuild.uz/">{t("project.description")}</a></p>
                <hr className='bg-gray-500 sm:w-[450px] w-auto mt-[20px] mx-auto h-[2px]' />
            </div>
            <div className='sm:w-[450px] w-[325px] mt-[30px] mx-auto'>
                <a href="https://www.ataevbahodirbuild.uz/" className='font-bold text-white ml-[10px]'>ataevbahodirbuild.uz</a>
                <img className='w-[450px] mt-[10px] mb-[15px]  hover:scale-[1.1] transition-all duration-[0.4s]' src={uzloyal} alt="" />
                <p><a className='font-500 text-center text-white' href="https://www.ataevbahodirbuild.uz/">{t("project.description")}</a></p>
                <hr className='bg-gray-500 sm:w-[450px] w-auto mt-[20px] mx-auto h-[2px]' />
            </div>
            <div className='sm:w-[450px] w-[325px] mt-[30px] mx-auto'>
                <a href="https://www.ataevbahodirbuild.uz/" className='font-bold text-white ml-[10px]'>ataevbahodirbuild.uz</a>
                <img className='w-[450px] mt-[10px] mb-[15px]  hover:scale-[1.1] transition-all duration-[0.4s]' src={oits} alt="" />
                <p><a className='font-500 text-center text-white' href="https://www.ataevbahodirbuild.uz/">{t("project.description")}</a></p>
                <hr className='bg-gray-500 sm:w-[450px] w-auto mt-[20px] mx-auto h-[2px]' />
            </div>
            <div className='sm:w-[450px] w-[325px] mt-[30px] mx-auto'>
                <a href="https://www.ataevbahodirbuild.uz/" className='font-bold text-white ml-[10px]'>ataevbahodirbuild.uz</a>
                <img className='w-[450px] mt-[10px] mb-[15px]  hover:scale-[1.1] transition-all duration-[0.4s]' src={partnyor} alt="" />
                <p><a className='font-500 text-center text-white' href="https://www.ataevbahodirbuild.uz/">{t("project.description")}</a></p>
                <hr className='bg-gray-500 sm:w-[450px] w-auto mt-[20px] mx-auto h-[2px]' />
            </div>
            <div className='sm:w-[450px] w-[325px] mt-[30px] mx-auto'>
                <a href="https://www.ataevbahodirbuild.uz/" className='font-bold text-white ml-[10px]'>ataevbahodirbuild.uz</a>
                <img className='w-[450px] mt-[10px] mb-[15px]  hover:scale-[1.1] transition-all duration-[0.4s]' src={zamon} alt="" />
                <p><a className='font-500 text-center text-white' href="https://www.ataevbahodirbuild.uz/">{t("project.description")}</a></p>
                <hr className='bg-gray-500 sm:w-[450px] w-auto mt-[20px] mx-auto h-[2px]' />
            </div>
        </div>
    </div>
  )
}

export default Project