import { useCoins } from "../hooks/useCoins";

const Select = ({ selectedCrypto, setSelectedCrypto }) => {
  const { data, isPending } = useCoins();
  const coins = data.coins;
  return (
    <select
      value={selectedCrypto}
      onChange={(e) => setSelectedCrypto(e.target.value)}
      className="w-[200px] mb-10 px-4 py-2 border rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-600 transition"
    >
      {coins.map((coin) => (
        <option value={coin.name}>{coin.name}</option>
      ))}
    </select>
  );
};

export default Select;
