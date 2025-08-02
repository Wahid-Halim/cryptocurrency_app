import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCoins } from "../../services/cryptoApi";

const useCoins = () => {
  const { data, isPending } = useQuery({
    queryFn: getCoins,
    queryKey: ["coins"],
  });

  return { data, isPending };
};

export default useCoins;
