import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo-limsa.png";
import kompImg from "../../assets/komp-img.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="h-[747px]"
      style={{
        background: "radial-gradient(circle at top, #1a1a2e, #0f0f1e 80%)",
      }}
    >
      <nav
        className={`fixed z-50 flex justify-between w-full p-[20px] items-center transition-all duration-300 ${!scrolled? "bg-[radial-gradient(circle_at_top,_#1a1a2e,_#0f0f1e_80%)] shadow-2xl": "bg-[#1A1A1A]"}`}
      >
        <div className="flex items-center gap-10">
          <img src={logo} className="w-[150px]" alt="Logo" />
          <ul className="hidden md:flex gap-[20px] text-white">
            {["Home", "Our Services", "Our Works", "Prices"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="relative text-white transition-colors duration-300 hover:text-purple-600 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
          <select className="hidden md:block text-white outline-0 bg-transparent">
            <option className="text-gray-700" value="Uz">Uz</option>
            <option className="text-gray-700" value="Eng">Eng</option>
            <option className="text-gray-700" value="Rus">Rus</option>
          </select>
        </div>
        <button className="hidden md:block bg-purple-700 text-white w-[170px] h-[40px] rounded-xl border-purple-700 hover:bg-transparent hover:border hover:border-purple-700 hover:scale-[1.1] transition-all duration-300">
          +998 (33) 258 73 58
        </button>
        <button
          className="md:hidden text-white text-2xl z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>
      <div
        className={`z-40 fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-5 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {["Home", "Our Services", "Our Works", "Prices"].map((item, index) => (
          <a
            key={index}
            href="#"
            className="text-white text-xl hover:text-purple-700 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </a>
        ))}
        <select className="text-white bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 p-2">
          <option  value="Uz">
            Uz
          </option>
          <option value="Eng">Eng</option>
          <option value="Rus">Rus</option>
        </select>
      </div>

      <div className="flex items-center p-[20px] absolute top-[90px]">
        <div className="ml-10">
          <h1 className="text-white font-[500] text-4xl w-[580px]">
            Perfect 'IT' solutions to grow your business!
          </h1>
          <p className="text-gray-300 w-[575px] text-[18px] mt-[20px]">
            Entrust your project to experts with more than 10 years of
            experience and achieve high success in a short time.
          </p>
          <button className="w-[100px] mt-[20px] text-white h-[35px] rounded-xl hover:bg-purple-950 transition-all hover:scale-[1.1] duration-500 bg-purple-700">
            Contact
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
