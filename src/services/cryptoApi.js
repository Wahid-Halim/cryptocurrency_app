const BASE_URL = "https://coinranking1.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "17ccf53491msh82bc9a67de2dd50p1af898jsn9580e8d478c8",
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  },
};

export const getCoins = async () => {
  const res = await fetch(`${BASE_URL}/coins`, options);

  if (!res.ok) throw new Error("Failed to fetch coins");
    const data = await res.json();
    
  return data?.data;
};
