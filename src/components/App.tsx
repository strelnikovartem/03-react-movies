import axios from "axios";
import SearchForm from "./SearchForm";

interface Article {
  objectID: string;
  title: string;
  url: string;
}

interface ArticlesHttpResponse {
  hits: Article[];
}

export default function App() {
  const handleSearch = async (topic: string) => {
    // Виконуємо HTTP-запит
    const response = await axios.get<ArticlesHttpResponse>(`https://hn.algolia.com/api/v1/search?query=${topic}`);
    console.log(response.data); // об'єкт з властивістю hits
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
    </>
  );
}
