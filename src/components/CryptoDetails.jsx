import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useCryptoDetails from "../hooks/useCryptoDetails.js";
import HTMLReactParser from "html-react-parser/lib/index";
import millify from "millify";
import LineChart from "./LineChart.jsx";

// Icons
import { CiDollar, CiCircleAlert, CiCircleCheck } from "react-icons/ci";
import { LiaHashtagSolid } from "react-icons/lia";
import { AiOutlineThunderbolt, AiOutlineMoneyCollect } from "react-icons/ai";
import { CiTrophy } from "react-icons/ci";
import { LuChartLine } from "react-icons/lu";
import { IoStopCircleOutline } from "react-icons/io5";
import useCryptoHistory from "../hooks/useCryptoHistory.js";

const CryptoDetails = () => {
  const { id } = useParams();
  const { data, isPending } = useCryptoDetails(id);
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data: coinHistory, isPending: isPending2 } = useCryptoHistory({
    id,
    timePeriod,
  });

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  if (isPending || isPending2) return <p>Loading....</p>;

  const cryptoDetails = data?.data.coin;

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails.price)}`,
      icon: <CiDollar />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <LiaHashtagSolid /> },
    {
      title: "24h Volume",
      value: `$ ${
        cryptoDetails?.["24hVolume"] && millify(cryptoDetails["24hVolume"])
      }`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails.marketCap)
      }`,
      icon: <CiDollar />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails.allTimeHigh.price)
      }`,
      icon: <CiTrophy />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <LuChartLine />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <AiOutlineMoneyCollect />,
    },
    {
      title: "Approved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CiCircleCheck />
      ) : (
        <IoStopCircleOutline />
      ),
      icon: <CiCircleAlert />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails.supply.total)
      }`,
      icon: <CiCircleAlert />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails.supply.circulating)
      }`,
      icon: <CiCircleAlert />,
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-violet-700 font-bold text-2xl text-center">
        {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
      </h1>

      <p className="mt-3 text-sm text-gray-500 text-center pb-7 border-b border-gray-100">
        {cryptoDetails?.name} live price in US dollars. View value statistics,
        market cap, and supply info.
      </p>

      {/* Time Period Selector */}

      <div className="my-6">
        <label className="font-medium text-gray-700 mr-3">
          Select Time Period:
        </label>
        <select
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
          className="border bg-slate-50 border-gray-200 py-1 px-3 rounded-sm text-base font-semibold"
        >
          {time.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails.price)}
        coinName={cryptoDetails.name}
      />

      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-8 font-jetBrains">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            {cryptoDetails.name} Value Statistic
          </h2>
          <p className="text-sm text-gray-400 mb-3">
            An overview showing the stats of {cryptoDetails.name}
          </p>
          {stats.map(({ icon, title, value }, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b py-2"
            >
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-xl">{icon}</span>
                <span>{title}</span>
              </div>
              <span className="font-bold">{value}</span>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Other Stats
          </h2>

          <p className="text-sm text-gray-400 mb-3">
            An overview showing of all cryptocurrencies
          </p>
          {genericStats.map(({ icon, title, value }, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b py-2"
            >
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-xl">{icon}</span>
                <span>{title}</span>
              </div>
              <span className="font-bold">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="font-jetBrains max-w-el mt-7">
        <div>
          <h3 className="text-blue-600">What is {cryptoDetails.name}?</h3>
          <p className="text-sm mt-1 ">{cryptoDetails.description}</p>
        </div>

        <div className="flex flex-col mt-10">
          <h3 className="text-blue-600">{cryptoDetails.name} Links</h3>
          <div className="self-center w-full">
            {cryptoDetails.links.map((link, index) => {
              return (
                <div
                  className="flex justify-between border-b border-gray-200 p-2"
                  key={index}
                >
                  <h4>{link.type}</h4>
                  <a href={link.url} className="text-blue-500 font-semibold">
                    {link.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
