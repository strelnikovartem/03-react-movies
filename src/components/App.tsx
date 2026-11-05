import axios from "axios";
import { useState } from "react";
import SearchForm from "./SearchForm";
import ArticleList from "./ArticleList";

interface Article {
  objectID: string;
  title: string;
  url: string;
}

interface ArticlesHttpResponse {
  hits: Article[];
}

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await axios.get<ArticlesHttpResponse>(`https://hn.algolia.com/api/v1/search?query=${topic}`);
      setArticles(response.data.hits);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {isLoading && <p>Loading data, please wait...</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
