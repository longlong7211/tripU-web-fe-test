export type TArticlesSource = {
  id: string;
  name: string;
}
export type TArticles = {
  source: TArticlesSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
