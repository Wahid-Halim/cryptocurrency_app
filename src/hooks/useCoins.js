import { useQuery } from "@tanstack/react-query";
import {getCoins} from "../services/cryptoApi";

export const useCoins = (count) => {
  const { data, isPending } = useQuery({
    queryFn: () => getCoins(count),
    queryKey: ["coins"],
  });

  return { data, isPending };
};
