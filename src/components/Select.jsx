import Select from "react-select";
import { useCoins } from "../hooks/useCoins";
import Loader from "./Loader";

const CustomSelect = ({ selectedCrypto, setSelectedCrypto }) => {
  const { data, isPending } = useCoins(100);
  if (isPending) return <Loader />;

  const coins = data.coins;

  const options = [
    { label: "All", value: "all" },
    ...coins.map((coin) => ({
      label: coin.name,
      value: coin.name,
    })),
  ];

  const handleChange = (selectedOption) => {
    setSelectedCrypto(selectedOption.value);
  };

  return (
    <div className="w-[250px] mb-10">
      <Select
        options={options}
        onChange={handleChange}
        value={options.find((opt) => opt.value === selectedCrypto)}
        placeholder="Select a coin..."
        isSearchable
        styles={{
          control: (base) => ({
            ...base,
            padding: "4px",
            borderRadius: "4px",
            borderColor: "#ccc",
            boxShadow: "none",
          }),
        }}
      />
    </div>
  );
};

export default CustomSelect;
