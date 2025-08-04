import NewsItem from "./NewsItem";
import Select from "./Select";
import { useState } from "react";
import useCryptoNews from "../hooks/useCryptoNews";

const NewsList = ({ simplified }) => {
  const { data, isPending } = useCryptoNews(simplified);

  const [selectedCrypto, setSelectedCrypto] = useState("all");

  if (isPending) return <p>Loading...</p>;

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

      <div className="grid grid-cols-3 gap-4">
        {filteredNews.map((news, index) => (
          <NewsItem news={news} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
