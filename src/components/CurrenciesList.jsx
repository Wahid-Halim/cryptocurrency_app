import { useState } from "react";

import { useCoins } from "../hooks/useCoins";
import CurrencyItem from "./CurrencyItem";
import Search from "./Search";

const CurrenciesList = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data, isPending } = useCoins(count);
  const [searchTerm, setSearchTerm] = useState("");

  if (isPending) return "...loading";

  const currencies = data?.coins;

  const filteredCurrencies = currencies?.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 space-y-6">
      {!simplified && <Search onSearch={(value) => setSearchTerm(value)} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCurrencies?.map((currency, index) => (
          <CurrencyItem currency={currency} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CurrenciesList;
