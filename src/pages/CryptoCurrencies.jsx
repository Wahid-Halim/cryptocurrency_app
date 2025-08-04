import CurrenciesList from "../components/CurrenciesList";
const CryptoCurrencies = () => {
  return (
    <section className=" page-container max-container max-md:px-2 max-md:py-4">
      <CurrenciesList simplified={false} />
    </section>
  );
};

export default CryptoCurrencies;
