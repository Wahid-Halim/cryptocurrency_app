import CurrenciesList from "../components/CurrenciesList";
const CryptoCurrencies = () => {
  return (
    <section className=" w-full h-full max-container pt-8 px-6">
      <CurrenciesList simplified={false} />
    </section>
  );
};

export default CryptoCurrencies;
