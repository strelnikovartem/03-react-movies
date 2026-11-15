import SearchBar from '../SearchBar/SearchBar';

export default function App() {
  const handleSearch = (query: String) => {
    console.log('handleSearch', query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}
