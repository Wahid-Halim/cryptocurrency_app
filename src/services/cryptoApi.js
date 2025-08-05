const BASE_URL = "https://coinranking1.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    // come on man don't use i didn't time have to add to .env file
    "x-rapidapi-key": "17ccf53491msh82bc9a67de2dd50p1af898jsn9580e8d478c8",
  },
};

export const getCoins = async (count = 10) => {
  const res = await fetch(`${BASE_URL}/coins?limit=${count}`, options);

  if (!res.ok) throw new Error("Failed to fetch coins");
  const data = await res.json();

  return data?.data;
};

export const getCryptoDetails = async (coinId) => {
  const res = await fetch(`${BASE_URL}/coin/${coinId}`, options);
  if (!res.ok) throw new Error("Failed to fetch Crypto Details");
  const data = await res.json();
  return data;
};

export const getCryptoHistory = async (id, timePeriod = "7d") => {
  const res = await fetch(
    `${BASE_URL}/coin/${id}/history?timePeriod=${timePeriod}`,
    options
  );

  if (!res.ok) throw new Error("Failed to fetch crypto history");
  const data = await res.json();
  return data;
};

export const getExchanges = async () => {
  const res = await fetch(`${BASE_URL}/exchanges`, options);

  if (!res.ok) throw new Error("Failed to fetch exchanges");

  const data = await res.json();
  console.log(data, "from api");
  return data;
};
