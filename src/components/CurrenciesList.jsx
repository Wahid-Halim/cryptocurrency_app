import { useState } from "react";

import { useCoins } from "../hooks/useCoins";
import CurrencyItem from "./CurrencyItem";
import Search from "./Search";
import Loader from "./Loader";

const CurrenciesList = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data, isPending } = useCoins(count);
  const [searchTerm, setSearchTerm] = useState("");

  if (isPending) return <Loader />;

  const currencies = data?.coins;

  const filteredCurrencies = currencies?.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {!simplified && <Search onSearch={(value) => setSearchTerm(value)} />}

      <div className="grid grid-cols-3 gap-4 w-full max-laptop1:grid-cols-2 max-tabletLg:grid-cols-1">
        {filteredCurrencies?.map((currency, index) => (
          <CurrencyItem currency={currency} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CurrenciesList;
