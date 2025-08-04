import { useQuery } from "@tanstack/react-query";
// import useExchanges from "../hooks/useExchanges";
import { getExchanges } from "../services/cryptoApi";

const ExchangeItem = () => {
  const { data, isPending } = useQuery({
    queryFn: getExchanges,
    queryKey: ["exchanges"],
  });

  if (isPending) return <p>Loading....</p>;
  console.log(data, "hello");

  return <div>ExchangeItem</div>;
};

export default ExchangeItem;
