import NewsItem from "./NewsItem";
import Select from "./Select";
import { useState } from "react";
import useCryptoNews from "../hooks/useCryptoNews";
import Loader from "./Loader";

const NewsList = ({ simplified }) => {
  const { data, isPending } = useCryptoNews(simplified);

  const [selectedCrypto, setSelectedCrypto] = useState("all");

  if (isPending) return <Loader />;

  const allNews = data || [];

  // Filter logic
  const filteredNews =
    selectedCrypto === "all"
      ? allNews
      : allNews.filter(
          (news) =>
            news.title.toLowerCase().includes(selectedCrypto.toLowerCase()) ||
            news.description
              ?.toLowerCase()
              .includes(selectedCrypto.toLowerCase())
        );

  return (
    <div>
      {!simplified && (
        <Select
          selectedCrypto={selectedCrypto}
          setSelectedCrypto={setSelectedCrypto}
        />
      )}

      <div className="grid grid-cols-3 gap-4 max-[1278px]:grid-cols-2  max-laptop1:grid-cols-1">
        {filteredNews.map((news, index) => (
          <NewsItem news={news} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
