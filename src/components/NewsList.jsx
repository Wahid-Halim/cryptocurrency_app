import { useQuery } from "@tanstack/react-query";
import { getCryptoNews } from "../services/cryptoNewsApi";
import NewsItem from "./NewsItem";
import Select from "./Select";
import { useState } from "react";

const NewsList = ({ simplified }) => {
  const { data, isPending } = useQuery({
    queryFn: () => getCryptoNews(simplified),
    queryKey: ["cryptoNews"],
    staleTime: 1000 * 60,
  });

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
        {filteredNews.map((news) => (
          <NewsItem news={news} key={news.id} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
