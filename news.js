const url =
  "https://newsapi.org/v2/everything?q=recycling&sortBy=publishedAt&apiKey=7c14be6f0b91412dbec1d4898a8a5f53";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
