import { NavLink, useSearchParams } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";

import { FaHome } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa";
import { PiCurrencyEth } from "react-icons/pi";
import { useState } from "react";

const AppNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNav = () => {
    setIsOpen((open) => !open);
  };
  return (
    <aside className="w-[300px] h-[100vh] bg-violet-700 pt-4 px-6 text-white max-laptop1:px-2 max-laptop1:w-[200px] max-mobileLg:w-full max-mobileLg:h-fit ">
      <div className="flex justify-between items-center mb-5">
        <h1 className="flex items-center   text-center text-2xl font-semibold gap-x-2 justify-center font-roboto tracking-wider">
          <PiCurrencyEth className="text-4xl" />
          CoinNest
        </h1>
        <span onClick={handleOpenNav}>
          {isOpen ? (
            <RxHamburgerMenu className="mobileLg:hidden text-2xl " />
          ) : (
            <VscChromeClose className="mobileLg:hidden text-2xl " />
          )}
        </span>
      </div>
      <nav className={`${!isOpen ? "max-mobileLg:hidden" : ""}`}>
        <ul className="space-y-6">
          <li className="">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `nav-link ${isActive ? "bg-violet-600" : ""}`
              }
            >
              <FaHome className="text-2xl" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cryptocurrencies"
              className={({ isActive }) =>
                `nav-link ${isActive ? "bg-violet-600" : ""}`
              }
            >
              <FaChartLine />
              Cryptocurrencies
            </NavLink>
          </li>

          <li>
            <NavLink
              to="news"
              className={({ isActive }) =>
                `nav-link ${isActive ? "bg-violet-600" : ""}`
              }
            >
              <FaNewspaper />
              News
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AppNav;
