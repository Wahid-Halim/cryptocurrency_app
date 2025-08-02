import { NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa";
import { PiCurrencyEth } from "react-icons/pi";

const AppNav = () => {
  return (
    <aside
      className="max-w-[300px] h-[100vh]
     bg-violet-700 pt-4 px-6 text-white"
    >
      <h1 className="flex items-center mt-4 mb-10 text-center text-2xl font-semibold gap-x-2 justify-center font-roboto tracking-wider">
        <PiCurrencyEth className="text-4xl" />
        CoinNest
      </h1>
      <nav>
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
              to="exchange"
              className={({ isActive }) =>
                `nav-link ${isActive ? "bg-violet-600" : ""}`
              }
            >
              <BsCurrencyExchange />
              Exchange
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
