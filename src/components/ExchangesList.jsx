import ExchangeItem from "./ExchangeItem";

const ExchangesList = () => {
  return (
    <>
      <div className="flex justify-between">
        <span>Exchanges</span>
        <span>24h Trade Volume</span>
        <span>Market</span>
        <span>Change</span>
      </div>

      <ExchangeItem />
    </>
  );
};

export default ExchangesList;
