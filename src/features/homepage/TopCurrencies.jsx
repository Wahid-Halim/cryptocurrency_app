import { NavLink } from "react-router-dom";
import CurrenciesList from "./CurrenciesList";
const TopCurrencies = () => {
  return (
    <div className="mt-10 font-roboto ">
      <header className="flex justify-between ">
        <h2 className="font-medium text-2xl ">Top 10 Cryptos in The World</h2>
        <NavLink to="/cryptocurrencies" className="text-blue-500 font-bold">
          Show More
        </NavLink>
      </header>

      {/* simplified mean we will render 10 crypto currency item */}
      <CurrenciesList simplified={true} />
    </div>
  );
};

export default TopCurrencies;
