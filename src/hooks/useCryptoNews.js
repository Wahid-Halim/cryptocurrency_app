import { useQuery } from "@tanstack/react-query";
import { getCryptoNews } from "../services/cryptoNewsApi";

const useCryptoNews = (simplified) => {
  const { data, isPending } = useQuery({
    queryFn: () => getCryptoNews(simplified),
    queryKey: ["cryptoNews"],
    staleTime: 1000 * 60,
  });

  return { data, isPending };
};

export default useCryptoNews;
