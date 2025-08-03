import millify from "millify";
const CurrencyItem = ({ currency }) => {
  const { rank, name, iconUrl, price, marketCap, change } = currency;

  return (
    <div className="flex flex-col p-3 bg-slate-50 shadow-md transition hover:shadow-2xl space-y-3">
      <div className="flex justify-between mb-5 border-b border-1 border-gray-100 pb-3">
        <span className="font-medium text-[18px]">
          {rank}. {name}
        </span>
        <img src={iconUrl} alt={`${name} icon`} className="w-10" />
      </div>
      <p className="text-gray-600 font-jetBrains">Price: {millify(price)}</p>
      <p className="text-gray-600 font-jetBrains">
        Market Cap: {millify(marketCap)}
      </p>
      <p className="text-gray-600 font-jetBrains">
        Daily Change: {millify(change)}%
      </p>
    </div>
  );
};

export default CurrencyItem;
