import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo-limsa.png";

function Navbar() {
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
    <div>
      <nav
        className={`fixed z-50 flex justify-between w-full p-[20px] items-center transition-all duration-300 ${
          !scrolled
            ? "bg-transparent shadow-2xl"
            : "bg-[#1A1A1A]"
        }`}
      >
        <div className="flex items-center gap-10">
          <img src={logo} className="w-[150px]" alt="Logo" />
          <ul className="hidden md:flex gap-[20px] text-white">
            {[
              { name: "Home", path: "/" },
              { name: "Our Services", path: "/services" },
              { name: "Our Works", path: "/works" },
              { name: "Prices", path: "/prices" },
            ].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "relative text-white transition-colors duration-300 hover:text-purple-600 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-purple-700 after:transition-all after:duration-300"
                      : "relative text-white transition-colors duration-300 hover:text-purple-600 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-purple-700 after:transition-all after:duration-300"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <select className="hidden md:block text-white bg-transparent rounded-md py-2 px-4 focus:ring-2 focus:ring-purple-500 focus:outline-none">
            <option className="text-gray-700" value="Uz">
              Uz
            </option>
            <option className="text-gray-700" value="Eng">
              Eng
            </option>
            <option className="text-gray-700" value="Rus">
              Rus
            </option>
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
          <NavLink
            key={index}
            to={`/${item.toLowerCase().replace(" ", "")}`}
            className={({ isActive }) =>
              isActive
                ? "text-white text-xl hover:text-purple-700 transition-colors duration-300 bg-purple-700"
                : "text-white text-xl hover:text-purple-700 transition-colors duration-300"
            }
            onClick={() => setIsOpen(false)}
          >
            {item}
          </NavLink>
        ))}
        <select className="text-white bg-black border border-gray-600 rounded-md py-2 px-4 focus:ring-2 focus:ring-purple-500 focus:outline-none">
          <option value="Uz">Uz</option>
          <option value="Eng">Eng</option>
          <option value="Rus">Rus</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
