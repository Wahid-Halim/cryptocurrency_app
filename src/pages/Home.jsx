import GlobalStats from "../components/GlobalStats";
import TopCurrencies from "../components/TopCurrencies";
import NewsList from "../components/NewsList";
import SubHeader from "../components/SubHeader";

const Home = () => {
  return (
    <div className="page-container max-container max-md:px-2 max-md:py-4">
      <GlobalStats />
      <SubHeader
        to="/cryptocurrencies"
        headerText="Top 10 Cryptos in The World"
      />
      <TopCurrencies />

      <SubHeader to="/news" headerText="Latest Crypto News" />
      <NewsList simplified={true} />
    </div>
  );
};

export default Home;
