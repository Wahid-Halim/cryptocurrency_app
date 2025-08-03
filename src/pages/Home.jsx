import GlobalStats from "../features/homepage/GlobalStats";
import TopCurrencies from "../features/homepage/TopCurrencies";
import News from "./News";

const Home = () => {
  return (
    <div className="bg-slate-100 w-full h-full max-container pt-8 px-6 ">
      <GlobalStats />
      <TopCurrencies />
      <News />
    </div>
  );
};

export default Home;
