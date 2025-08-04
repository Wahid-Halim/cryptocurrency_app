import CurrenciesList from "./CurrenciesList";

const TopCurrencies = () => {
  return (
    <div className="mt-10 font-roboto ">
      {/* simplified mean we will render 10 crypto currency item */}
      <CurrenciesList simplified={true} />
    </div>
  );
};

export default TopCurrencies;
