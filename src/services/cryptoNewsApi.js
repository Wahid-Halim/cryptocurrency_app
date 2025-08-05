const API_KEY = "a1c912321dd046af9a71f5e7463f56d4";

console.log(API_KEY, "api keys");

export const getCryptoNews = async (simplified) => {
  const url = `https://newsapi.org/v2/everything?q=crypto&pageSize=${
    simplified ? 10 : 100
  }&sortBy=publishedAt&apiKey=${API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch news");

  const data = await res.json();
  return data.articles;
};
