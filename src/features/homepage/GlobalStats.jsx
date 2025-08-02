import millify from "millify";

import useCoins from "./useCoins";
import { Exchange } from "../../pages";

const GlobalStats = () => {
  const { data, isPending } = useCoins();
  const {
    total,
    total24hVolume,
    totalCoins,
    totalExchanges,
    totalMarketCap,
    totalMarkets,
  } = data.stats || {};

  if (isPending) return <p>Loading.....</p>;

  return (
    <div>
      <h1 className=" text-2xl mb-6 font-medium">Global Crypto Stats</h1>
      <div className="">
        <ul className="grid grid-cols-2">
          <li className="flex flex-col font-jetBrains">
            <span className="text-gray-500 text-sm">
              Total Cryptocurrencies
            </span>
            <span className="font-bold text-[18px]">{total}</span>
          </li>

          <li className="flex flex-col font-jetBrains">
            <span className="text-gray-500 text-sm">Total Exchanges </span>

            <span className="font-bold text-[18px]">
              {millify(totalExchanges)}
            </span>
          </li>

          <li className="flex flex-col font-jetBrains">
            <span className="text-gray-500 text-sm">Total Market Cap</span>
            <span className="font-bold text-[18px]">
              {millify(totalMarketCap)}
            </span>
          </li>

          <li className="flex flex-col font-jetBrains">
            <span className="text-gray-500 text-sm">Total 24h Volume</span>
            <span className="font-bold text-[18px]">
              {millify(total24hVolume)}
            </span>
          </li>

          <li className="flex flex-col font-jetBrains">
            <span className="text-gray-500 text-sm">Total Markets</span>
            <span className="font-bold text-[18px]">
              {millify(totalMarkets)}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GlobalStats;
