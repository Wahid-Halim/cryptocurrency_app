import { useQuery } from "@tanstack/react-query";
import { getCryptoHistory } from "../services/cryptoApi";

const useCryptoHistory = ({ id, timePeriod }) => {
  const { data, isPending } = useQuery({
    queryKey: ["crypto-history", id, timePeriod],
    queryFn: () => getCryptoHistory(id, timePeriod),
  });

  return { data, isPending };
};

export default useCryptoHistory;
