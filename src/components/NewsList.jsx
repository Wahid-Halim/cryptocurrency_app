import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { getCryptoNews } from "../services/cryptoNewsApi";
import NewsItem from "./NewsItem";

const NewsList = ({ simplified }) => {
  const { data, isPending } = useQuery({
    queryFn: () => getCryptoNews(simplified),
    queryKey: ["cryptoNews"],
    staleTime: 1000 * 60,
  });

  if (isPending) return <p> Loading ...</p>;

  console.log(data, "data");

  const cryptoNews = data;
  console.log(cryptoNews, "news");
  return (
    <div>
    
      <div className="grid grid-cols-3 gap-4">
        {data?.map((news) => (
          <NewsItem news={news} key={news.id} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
