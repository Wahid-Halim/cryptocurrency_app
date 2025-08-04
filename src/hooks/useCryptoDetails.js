import { useQuery } from "@tanstack/react-query";
import { getCryptoDetails } from "../services/cryptoApi";

const useCryptoDetails = (coinId) => {
  const { data, isPending } = useQuery({
    queryKey: ["crypt-details"],
    queryFn: () => getCryptoDetails(coinId),
  });

  return { data, isPending };
};

export default useCryptoDetails;
