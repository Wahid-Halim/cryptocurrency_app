import Select from "react-select";
import { useCoins } from "../hooks/useCoins";

const CustomSelect = ({ selectedCrypto, setSelectedCrypto }) => {
  const { data, isPending } = useCoins(100);
  if (isPending) return <p>Loading...</p>;

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
